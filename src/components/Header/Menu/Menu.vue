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

  .menu .edit:last-child::right,
  .menu .close:last-child::right,
  .menu .navigate:last-child::right{
    content: '';
    display: block;
    height: 10px;
    width: 1px;
    background-color: gold;
  }

  @media (max-width: 575.98px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
