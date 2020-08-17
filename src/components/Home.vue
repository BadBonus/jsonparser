<template>
  <div>
    <node :node="json"></node>
  </div>
</template>

<script>
  import node from './Node'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      node
    },
    computed: {
      ...mapGetters(['json'])
    }
  }
</script>

<style scoped>

</style>
