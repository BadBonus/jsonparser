<template>
  <button class="btn btn-primary" v-bind="$attrs" v-on="$listeners">{{title}}</button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      title: String
    }
  }
</script>

<style scoped>

</style>
