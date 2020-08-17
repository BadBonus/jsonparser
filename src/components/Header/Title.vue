<template>
  <h1 class="title">{{title}}</h1>
</template>

<script>
  export default {
    name: "Title",
    props: ['title']
  }
</script>

<style scoped>
  .title {
    font-weight: 400;
    font-size: 1rem;
  }
</style>