<template>
  <font-awesome-icon icon="fa-solid fa-spinner" class="preloader" />
</template>

<style lang="scss" scoped>
.preloader {
  width: 100%;
  font-size: 60px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
