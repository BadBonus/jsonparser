<template>
  <div class="header">
    <node v-for="child in children" :key="child.id" :node="child"></node>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: ['children'],
    components: {
      node: () => import('../Node')
    },
  }
</script>

<style scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>