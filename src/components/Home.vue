<template>
  <div>
    <node :node="json"></node>
  </div>
</template>

<script>
  import node from './Node'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import jsonData from './../create-doc'
import { mapGetters } from 'vuex'

  export default {
    components: {
      node
    },
    data(){
      return {
        jsonData
        }
    },
    beforeMount(){
      console.log('beforeMount');
      this.$store.commit('initialData', this.jsonData.data)
    },
    mounted(){
    },
    computed: {
      // main_test() { return this.$store.getters.getDataFrom('test') }
      ...mapGetters(['json'])
    }
  }
</script>

<style scoped>

</style>
