import { randomFromRange } from "./randomFromRange";
import { randomArray } from "./randomArray";

export function objectScatter(el) {
  el.addEventListener('click', imageRemove);
  el.addEventListener('wheel', imageRemove, { passive: true });
  el.setAttribute('active', 'active');
  const items = el.children;
  const zonesX = randomArray(1, items.length);
  const zonesY = randomArray(1, items.length);
  const interval = 100 / items.length;
  const delay = randomArray(0, items.length - 1);

  [...items].forEach(function(item, i, arr) {
    const random = {
      left: randomFromRange(zonesX[i] * interval - ((interval / 4) * 3), zonesX[i] * interval - interval / 4),
      top: randomFromRange(zonesY[i] * interval - ((interval / 4) * 3), zonesY[i] * interval - interval / 4),
      delay: delay[i],
    };
    const styles = '--random-top: ' + random.top + '; ' +
                   '--random-left: ' + random.left + ';' +
                   '--delay: ' + random.delay * 100 + ';';

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
}

function imageRemove(event) {
  const el = event.currentTarget;
  el.removeAttribute('active');
}
