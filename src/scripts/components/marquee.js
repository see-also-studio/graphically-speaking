export function marquee(el, settings) {
  const speed = settings.speed || 10;
  const reverse = settings.reverse || false;
  const startPaused = settings.startPaused || false;
  let contentEl = el.querySelector('.marquee__wrapper');
  const contentBackup = contentEl.innerHTML;
  let windowWidth = window.innerWidth;
  contentEl.style.setProperty('.animation-play-state', 'paused');
  init();
  window.addEventListener('resize', function() {
    if (windowWidth !== window.innerWidth) {
      recalc();
      windowWidth = window.innerWidth;
    }
  });
  window.addEventListener('load', recalc);

  function init() {
    if (reverse) {
      el.classList.add('marquee--reverse');
    }

    if (startPaused) {
      el.classList.add('marquee--paused');
    }

    recalc();
  }

  function recalc() {
    const outerWidth = el.offsetWidth;
    const innerWidth = contentEl.offsetWidth; /* calling offsetWidth triggers reflow */
    const clones = Math.ceil(outerWidth / innerWidth);
    const duration = innerWidth / speed;

    el.querySelectorAll('.clone').forEach(function(el) {
      el.remove();
    });

    const tempContent = contentEl.cloneNode(true);
    contentEl.remove();
    contentEl = el.appendChild(tempContent);

    for (let i = 0; i < clones; i++) {
      const clone = contentEl.cloneNode(true);
      clone.classList.add('clone');
      contentEl.after(clone);
    }

    el.style.setProperty('--duration', duration + 's');
  }

  function updateContent(content = contentBackup) {
    contentEl.innerHTML = content;
    recalc();
  }

  return {
    updateContent,
  }
}
