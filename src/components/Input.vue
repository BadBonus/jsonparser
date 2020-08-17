<template>
  <div class="form-group">
    <label :for="id">{{title}}</label>
    <input class="form-control form-control-sm" v-bind="$attrs" v-on="$listeners" :id="id"
           :value="value" @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
  export default {
    name: "Input",
    props: ['value', 'title', 'id']
  }
</script>

<style scoped>
  .form-group {
    display: flex;
    justify-content: space-between;
  }

  .form-control {
    width: auto;
  }
</style>