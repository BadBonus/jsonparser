<template>
  <div>
    <node v-for="child in children" :key="child.id" :node="child"></node>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import { mapGetters } from 'vuex'

  export default {
    props: ['children'],
    components: {
      node: () => import('./Node')
    },
    computed: {
      ...mapGetters(['json'])
    }
  }
</script>

<style scoped>

</style>
