<template>
  <div class="content">
    <node v-for="child in children" :key="child.id" :node="child"></node>
  </div>
</template>

<script>
  export default {
    name: "Content",
    props: ['children'],
    components: {
      node: () => import('./Node')
    }
  }
</script>

<style scoped>
  .content {

  }
</style>