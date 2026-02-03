export function iterateCssAnimationOffSet(el, i, offset) {
  el.style.setProperty('animation-delay', offset * i + 's');
}
