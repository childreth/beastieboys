<script></script>

<style lang="scss">

    @import '../../theme.scss';

    svg {
  width: 64px;
  height: 64px;
  animation: 2s linear infinite svg-anim;
}

circle {
  fill: transparent;
  stroke: #3651c9;
  stroke-width: 12;
  stroke-dasharray: 270;
  stroke-dashoffset: 76;
  /* 70 - 240 */
  stroke-linecap: round;
  transform-origin: 50% 50%;
  animation: .75s cubic-bezier(0.55, 0, 0.55, 1) infinite loader-anim;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

@keyframes loader-anim {
  0% {
    stroke-dashoffset: 240;
    transform: rotate(0);
    stroke-width: 8;
  }

  50% {
    stroke-dashoffset: 76;
    transform: rotate(45deg);
    stroke-width: 10;
  }
  100% {
    stroke-dashoffset: 240;
    transform: rotate(360deg);
    stroke-width: 8;
  }
}

@keyframes svg-anim {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}

</style>

<!-- <span class="loader"></span> -->
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="44" />
</svg>