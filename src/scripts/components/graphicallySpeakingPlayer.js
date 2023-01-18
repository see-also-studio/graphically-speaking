export class GraphicallySpeakingPlayer {
  constructor(el) {
    this.el = el;
    this.audioPlayer = this.el.querySelector('audio');
    this.playing;
    this.controls = this.el.querySelector('.player__controls');
    this.info1 = this.el.querySelector('.player__info1');
    this.info2 = this.el.querySelector('.player__info2');
    this.intermissionButton = document.body.querySelector('.intermission-button');

    this.updatePlayingStatus();
    //this.controls.addEventListener('click', () => this.toggle());
    this.audioPlayer.addEventListener('ended', () => this.ended());
    this.el.addEventListener('click', () => this.toggle());
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

    const intermissionPlaying = this.playing && this.audioPlayer.getAttribute('src') === '/assets/intermission.mp3' ? true: false;
    this.intermissionButton.classList.toggle('playing', intermissionPlaying);
    
    console.log((this.playing ? 'Playing' : 'Paused') + ', ' + this.audioPlayer.getAttribute('src'));
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
