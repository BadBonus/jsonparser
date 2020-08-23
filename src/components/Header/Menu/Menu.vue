<template>
  <nav class="navbar">
    <node v-for="child in children" :key="child.id" :node="child"></node>
  </nav>
</template>

<script>
  export default {
    name: "Menu",
    props: ['children'],
    components: {
      node: () => import('../../Node')
    },
  }
</script>

<style scoped>
  .menu {
    display: flex;
    border-bottom: 1px solid #a8a7a7;
  }

  .navbar {
    justify-content: inherit;
    width: 100%;
  }

  /* .navbar .edit::after,
  .navbar .closeBtn::after,
  .navbar .navigate::after{
    content: '';
    display: block;
    height: 10px;
    width: 10px;
    background-color: gold;
  } */

  @media (max-width: 600px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
