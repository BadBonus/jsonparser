<template>
  <Input type="password" v-bind="{...$props , ...$attrs}" v-on="$listeners"/>
</template>

<script>
  import Input from "./Input";

  export default {
    name: "Password",
    components: {Input}
  }
</script>

<style scoped>

</style>
