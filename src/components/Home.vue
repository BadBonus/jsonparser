<template>
  <div>
    <node :node="jsonData"></node>
  </div>
</template>

<script>
  import node from './Node'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import jsonData from './../create-doc'

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
    }
  }
</script>

<style scoped>

</style>
