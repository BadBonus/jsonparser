<template>
  <div class="form-group">
    <label :for="$attrs.title">{{$attrs.title}}</label>
    <select class="form-control form-control-sm" :id="$attrs.title"
            :value="value" @input="$emit('input', $event.target.value)">
      <option v-for="option in $attrs.options" :key="option">{{option}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: "Select",
    props: ['value']
  }
</script>

<style scoped>

</style>