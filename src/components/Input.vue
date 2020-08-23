<template>
  <div class="form-group">
    <label :for="id">{{title}}</label>
    <input class="form-control form-control-sm" v-bind="$attrs" v-on="$listeners" :id="id"
           :value="value" @input="$emit('input', $event.target.value)"/>
  </div>
</template>
<script>
import VueScreenSize from 'vue-screen-size'

  export default {
    name: "Input",
    props: ['value', 'title', 'id', 'children'],
    mixins: [VueScreenSize.VueScreenSizeMixin],
    computed:{

    }
  }
</script>

<style scoped>
  .form-group {
    display: flex;
    justify-content: flex-start;
  }

  .form-group label{
    width: 10vw;
  }

  .form-control {
    width: auto;
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
  }
</style>
