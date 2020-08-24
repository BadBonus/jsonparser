<template>
  <b-alert :style="geometry" show> {{title}}</b-alert>
</template>

<script>
  export default {
    name: "Button",
    props: {
      title: String
    },
    computed:{
      geometry(){
        return this.$attrs.geometry
        }
    },
    created(){

    }
  }
</script>

<style scoped>

</style>
