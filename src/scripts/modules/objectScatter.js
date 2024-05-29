import { randomFromRange } from "./randomFromRange";
import { randomArray } from "./randomArray";
import { minMax } from "./minMax";

export function objectScatter(el, {centerSingleOnClick = false, x, y, size, shuffle = false} = {}) {
  el.addEventListener('click', imageRemove);
  el.addEventListener('wheel', imageRemove, { passive: true });
  const items = el.children;
  const zonesX = randomArray(1, items.length);
  const zonesY = randomArray(1, items.length);
  const interval = 100 / items.length;
  const delay = randomArray(0, items.length - 1);
  let posX, posY;
  if (centerSingleOnClick) {
    posX = minMax(x / window.innerWidth * 100, 0, 100);
    posY = minMax(y / window.innerHeight * 100, 0, 100);
  }

  if (shuffle) {
    for (let i = items.length; i >= 0; i--) {
      el.appendChild(items[Math.random() * i | 0]);
    }
  }

  [...items].forEach(function(item, i, arr) {
    const random = {
      left: centerSingleOnClick ? posX : randomFromRange(zonesX[i] * interval - ((interval / 4) * 3), zonesX[i] * interval - interval / 4),
      top: centerSingleOnClick ? posY : randomFromRange(zonesY[i] * interval - ((interval / 4) * 3), zonesY[i] * interval - interval / 4),
      delay: delay[i],
    };
    const styles = `--random-top: ${random.top};
      --random-left: ${random.left};
      --delay: ${random.delay * 100};
      ${(size ? '--size: ' + size + ';' : '')}`;

    item.style.cssText = styles;

    const image = item;
    if (!image.src) {
      if (image.hasAttribute('data-srcset')) {
        image.srcset = image.getAttribute('data-srcset');
      }

      if (image.hasAttribute('data-src')) {
        image.src = image.getAttribute('data-src');
      }
    }
  });
  setTimeout(() => {
    el.setAttribute('active', 'active');
  }, 50);
}

function imageRemove(event) {
  const el = event.currentTarget;
  el.removeAttribute('active');
}
