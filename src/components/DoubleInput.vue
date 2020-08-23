<template>
  <div class="form-group">
    <label :for="id" >{{title}}</label>
    <input  v-bind="children[0].$attrs" v-on="children[0].$listeners" :id="children[0].id" :value="value0" class="form-control form-control-sm" @input="$emit('input', $event.target.value)"  />
    <input v-bind="children[1].$attrs" v-on="children[1].$listeners" :id="children[1].id" :value="value1" class="form-control form-control-sm" @input="$emit('input', $event.target.value)" />

    <!-- <label :for="id">{{title}}</label>
    <input class="form-control form-control-sm" v-bind="$attrs" v-on="$listeners" :id="id"
           :value="value0" @input="$emit('input', $event.target.value)"/>
    <input class="form-control form-control-sm" v-bind="$attrs" v-on="$listeners" :id="id"
           :value="value1" @input="$emit('input', $event.target.value)"/> -->

           <!-- <input class="form-control form-control-sm" v-bind="$attrs" v-on="$listeners" :id="id"
           :value="value" @input="$emit('input', $event.target.value)"/> -->
  </div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'
  // import Input from './Input'
  export default {
    name: "DoubleInput",
    props: ['value0', 'value1', 'children', 'id', 'title'],
    mixins: [VueScreenSize.VueScreenSizeMixin],
    mounted:function(){
      console.log(this.children[0].props);
    },
    // components: {Input},
  }
</script>

<style scoped>
  .form-group {
    display: flex;
    justify-content: flex-start;
  }

  .form-control {
    width: auto;
  }

  .form-group label{
    width: 10vw;
  }
  .form-group input{
    margin-right: 1.5rem;
  }

   @media (max-width: 600px) {
    .form-group{
      flex-direction: column;
      align-items: center;
    }
    .form-group label{
      text-align: center;
      width: 200px;
    }

    .form-group input{
    margin-bottom: 1.5rem;
    margin-right: 0;
  }
  }
</style>
