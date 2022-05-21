<template>
  <div class="wrapper" data-theme="fantasy">
      <slot name="header"></slot>
      <slot name="main"></slot>
      <slot name="footer"></slot>
  </div>
  <slot name="sidebar"></slot>
</template>

<style scoped>
.wrapper {
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;
}
</style>
