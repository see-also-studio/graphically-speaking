import barba from '@barba/core';
import { marquee } from './components/marquee';
import { GraphicallySpeakingPlayer } from './components/graphicallySpeakingPlayer'; 
import { AnalogueClock } from './components/clock';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { randomArray } from './modules/randomArray';
import { objectScatter } from './modules/objectScatter';

gsap.registerPlugin(Draggable);

barba.init({
  timeout: 5000,
  transitions: [
    {
      name: 'self',
      sync: true,
    },
  ],
  views: [
    {
      namespace: 'home',
      afterEnter(data) {
        console.log('home, afterEnter');
        if (data.current.container) {
          data.current.container.remove();
        }
        pageChange();
      },
    },
    {
      namespace: 'people',
      afterEnter(data) {
        console.log('people, afterEnter');
        if (data.current.container) {
          data.current.container.remove();
        }
        pageChange();
      },
    },
  ],
});

const player = document.querySelector('#player');
const graphicallySpeakingPlayer = new GraphicallySpeakingPlayer(player);

function pageChange() {
  // Add event listener for audio links
  document.querySelectorAll('#content__wrapper .audio-link').forEach(el => {
    el.addEventListener('click', function(e) {
      e.preventDefault();
      const el = e.currentTarget;
      const audioSrc = el.getAttribute('href');
      const info1 = 'Now playing';
      const info2 = el.getAttribute('data-name');
      graphicallySpeakingPlayer.playAudio(audioSrc, info1, info2);
    });
  });

  // Run shapes
  const linesContainer = document.querySelector('.lines');
  const lines = linesContainer.children;

  // Shuffle and remove all but first 3 lines
  if (lines.length > 3) {
    console.log('run line shuffle');
    for (let i = lines.length; i >= 0; i--) {
      linesContainer.appendChild(lines[Math.random() * i | 0]);
    }
  
    for (let i = lines.length; i > 3; i--) {
      linesContainer.removeChild(linesContainer.lastChild);
    }
  }

  const randXSpread = randomArray(0, 2);
  const randYSpread = randomArray(0, 2);

  [...lines].forEach((line, i) => {
    const handle = line.querySelectorAll('svg > *');

    line.style.setProperty('--left', (randXSpread[i % 3] * (20+20)) + (Math.floor(Math.random() * 21)));
    line.style.setProperty('--top', (randYSpread[i % 3] * (20+20)) + (Math.floor(Math.random() * 21)));
    
    Draggable.create(line, {
      bounds: '#site-content',
      trigger: handle,
      edgeResistance: 0.5,
      inertia: true,
      zIndexBoost: true,
    });
  });
}

document.querySelectorAll('.marquee').forEach((el) => {
  marquee(el, 
    {
      speed: 70,
    }
  );
});

document.querySelectorAll('.analogue-clock').forEach(el => {
  new AnalogueClock(el);
});

document.querySelector('.wavy-text').childNodes.forEach(function(el, i) {
  el.style.setProperty('animation-delay', -160 * i + 'ms');
});

document.querySelector('.intermission-button').addEventListener('click', function() {
  graphicallySpeakingPlayer.playAudio('/assets/intermission.mp3', 'Now playing', 'Intermission');
});

document.querySelectorAll('.object-scatter').forEach(function(el) {
  el.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSelector = event.target.getAttribute('data-object-scatter-target');
    const targetEl = document.querySelector(targetSelector);
    const isSingle = event.target.getAttribute('data-object-scatter-single') == 'true' ? true : false;
    console.log(isSingle);
    objectScatter(targetEl, (isSingle ? {centerSingleOnClick: isSingle, x: event.clientX, y: event.clientY}: {}));
  });
});
