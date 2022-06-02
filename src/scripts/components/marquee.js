export class Marquee {
  constructor(el, speed = 10, reverse = false, startPaused = false) {
    this.el = el;
    this.contentEl = this.el.querySelector('.marquee__wrapper');
    this.speed = speed;
    this.reverse = reverse;
    this.startPaused = startPaused;

    this.contentEl.style.setProperty('animation-play-state', 'paused')

    this.init();
    window.addEventListener('resize', () => this.reCalc());
    window.addEventListener('load', () => this.reCalc());
  }
  
  init() {
    if (this.reverse) {
      this.el.classList.add('marquee--reverse')
    }

    if (this.startPaused) {
      this.el.classList.add('marquee--paused');
    }
    
    this.reCalc();
  }

  reCalc() {
    this.contentEl.style.animation = 'none';
    const outerWidth = this.el.offsetWidth;
    const innerWidth = this.contentEl.offsetWidth; /* calling offsetWidth triggers reflow */
    const clones = Math.ceil(outerWidth / innerWidth);
    const duration = innerWidth / this.speed;

    this.contentEl.style.animation = null;

    this.el.querySelectorAll('.clone').forEach(function(el) {
      el.remove();
    });

    for (let i = 0; i < clones; i++) {
      const clone = this.contentEl.cloneNode(true);
      clone.classList.add('clone');
      this.contentEl.after(clone);
    }

    this.el.style.setProperty('--duration', duration + 's');
  }
}
