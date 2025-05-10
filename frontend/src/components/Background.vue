<template>
    <svg class="background-svg" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
      <ellipse cx="300" cy="300" rx="500" ry="250" fill="rgba(255, 255, 255, 0.05)" transform="rotate(-15 300 300)" />
      <ellipse cx="700" cy="600" rx="400" ry="200" fill="rgba(255, 255, 255, 0.08)" transform="rotate(25 700 600)" />
      <ellipse cx="500" cy="1000" rx="700" ry="350" fill="rgba(255, 255, 255, 0.1)" transform="rotate(-5 500 1000)" />
    </svg>
</template>

<script setup></script>

<style scoped>
.background-svg {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  z-index: 0;
  pointer-events: none;
}
</style>