<template>
  <v-jsoneditor v-model="jsonData" :options="options" :plus="false" height="400px" @error="onError"/>
</template>

<script>
  export default {
    name: "TextEditor",
    data() {
      return {
        options: {
          mode: "code"
        }
      }
    },
    computed: {
      jsonData: {
        get() {
          return this.$store.state.json
        },
        set(value) {
          this.$store.commit('updateJson', value)
        }
      }
    }
  }
</script>

<style scoped>

</style>