<template>
  <form @submit.prevent="submit" class="form">
    <node v-for="child in children" :key="child.id" :node="child" v-model="modelObj[child.id]"></node>
  </form>
</template>

<script>
  export default {
    name: "Form",
    props: {
      children: Array
    },
    components: {
      node: () => import('./Node')
    },
    data() {
      return {
        modelObj: {}
      }
    },
    methods: {
      submit() {
        console.log(this.modelObj);
      }
    },
    created() {
      this.children.forEach(child => {
        if (child.component !== 'Button') {
          this.modelObj[child.id] = ''
        }
      })
    }
  }
</script>

<style scoped>
  .form {
    margin: 0 20px;
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    .form {
      text-align: center;
    }
  }
</style>
