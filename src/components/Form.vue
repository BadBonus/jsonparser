<template>
  <form @submit.prevent="submit" class="form">
    <node v-for="child in children" :key="child.id" :node="child" v-model="modelObj[child.id]"></node>
  </form>
</template>

<script>
  export default {
    name: "Form",
    props: {
      children: Array,
      logick: Object
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
        const methodName = Object.getOwnPropertyNames(this.logick)[0];
        const idOfGoal = this.logick[methodName];
        // let formContent = {...this.modelObj};
        // payload.name
        // payload.data
        console.log('Object.getOwnPropertyNames(this.modelObj)');
        console.log(Object.getOwnPropertyNames());
        if(methodName === 'addSelectiveData'){

          this.$store.commit(methodName, {
            name:idOfGoal,
            data:['test-contact','test-email.com','test-gsm']
          })
        }
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
