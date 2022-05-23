export class AnalogueClock {
  constructor(el, smooth = false,) {
    this.el = el;
    this.smooth = smooth;
    this.secondsHand = this.el.querySelector('.analogue-clock__hand-seconds');
    this.minutesHand = this.el.querySelector('.analogue-clock__hand-minutes');
    this.hoursHand = this.el.querySelector('.analogue-clock__hand-hours');
    this.secondsHandRotations = 0;
    this.timeZone = 'Europe/London';
    this.currentTime = this.getCurrentTime();

    this.setHands(this.getCurrentTime());

    setTimeout(() => { this.setTransition(); }, 50);
    setInterval(() => { this.setHands(this.getCurrentTime()); }, 1000);
  }

  init() {
    // create elements inside this.el;
  }

  getCurrentTime() {
    const time = new Date();
    const hour = Number(time.toLocaleString([], {
      timeZone: this.timeZone,
      hour: 'numeric',
    }));
    const minute = Number(time.toLocaleString([], {
      timeZone: this.timeZone,
      minute: 'numeric',
    }));
    const second = Number(time.toLocaleString([], {
      timeZone: this.timeZone, 
      second: 'numeric',
    }));

    return {
      hours: hour,
      minutes: minute,
      seconds: second,
    }
  }

  setHands(time) {
    let secondsDeg = time.seconds * 6;
    const minutesDeg = time.minutes * 6 + (secondsDeg / 60);
    const hoursDeg = time.hours * 30 + (minutesDeg / 12);

    if (secondsDeg === 0) {
      this.secondsHandRotations++;
    }

    secondsDeg = secondsDeg + (this.secondsHandRotations * 360);

    this.secondsHand.style.setProperty('transform', 'rotate(' + secondsDeg + 'deg)');
    this.minutesHand.style.setProperty('transform', 'rotate(' + minutesDeg + 'deg)');
    this.hoursHand.style.setProperty('transform', 'rotate(' + hoursDeg + 'deg)');
  }

  setTransition() {
    if (this.smooth) {
      this.secondsHand.style.setProperty('transition-timing-function', 'linear');
      this.secondsHand.style.setProperty('transition-duration', '995ms');
    } else {
      this.secondsHand.style.setProperty('transition-duration', '150ms');
    }
  }
}
