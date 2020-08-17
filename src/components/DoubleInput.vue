<template>
  <div>
    <Input v-bind="children[0].props" :value="value0"/>
    <Input v-bind="children[1].props" :value="value1"/>
  </div>
</template>

<script>
  import Input from './Input'
  export default {
    name: "DoubleInput",
    props: ['value0', 'value1', 'children'],
    components: {Input}
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
