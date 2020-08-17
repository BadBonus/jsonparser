<template>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" v-bind="$attrs" v-on="$listeners" :id="$attrs.title"
           :value="value" @input="$emit('input', $event.target.checked)"/>
    <label class="form-check-label" :for="$attrs.title" v-bind="$attrs">{{$attrs.title}}</label>
  </div>
</template>

<script>
  export default {
    name: "Checkbox",
    props: {
      label: String,
      value: String
    }
  }
</script>

<style scoped>

</style>
