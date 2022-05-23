export class GraphicallySpeakingPlayer {
  constructor(el) {
    this.el = el;
    this.audioPlayer = this.el.querySelector('audio');
    this.playing;
    this.controls = this.el.querySelector('.player__controls');
    this.info1 = this.el.querySelector('.player__info1');
    this.info2 = this.el.querySelector('.player__info2');

    this.updatePlayingStatus();
    this.controls.addEventListener('click', () => this.toggle());
    this.audioPlayer.addEventListener('ended', () => this.ended());
  }

  toggle() {
    if (this.audioPlayer.paused) {
      this.audioPlayer.play();
    } else {
      this.audioPlayer.pause();
    }

    this.updatePlayingStatus();
  }

  ended() {
    console.log('audio ended');
    console.log(this.audioPlayer.getAttribute('src'));
    if (this.audioPlayer.getAttribute('src') !== '/assets/intermission.mp3') {
      console.log('Go to intermission');
      this.audioPlayer.setAttribute('src', '/assets/intermission.mp3');
      this.audioPlayer.play();
      this.updatePlayerInfo('Now playing', 'Intermission');
    }

    this.updatePlayingStatus();
  }

  updatePlayingStatus() {
    this.playing = !this.audioPlayer.paused;
    this.el.classList.toggle('playing', this.playing);
    this.el.classList.toggle('paused', !this.playing);
  }

  playAudio(src, info1, info2) {
    if (src === this.audioPlayer.getAttribute('src')) {
      this.toggle();
    } else {
      this.audioPlayer.setAttribute('src', src);
      this.audioPlayer.play();
      this.updatePlayerInfo(info1, info2);
      this.updatePlayingStatus();
    }
  }

  updatePlayerInfo(info1, info2) {
    this.info1.innerText = info1;
    this.info2.innerText = info2;
  }
}
