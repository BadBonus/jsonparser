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

        // payload.name
        // payload.data
        if(methodName === 'addSelectiveData'){
          let formContent = {...this.modelObj};
          const arrayFromContent = Object.values(formContent);
          // console.log('Object.getOwnPropertyNames(this.modelObj)');
          // console.log(Object.getOwnPropertyNames(formContent));
          this.$store.commit(methodName, {
            name:idOfGoal,
            data: arrayFromContent
          })
        }
        else if(methodName === 'deleteLastStringfromArray'){
          this.$store.commit(methodName, {
            name:idOfGoal
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
