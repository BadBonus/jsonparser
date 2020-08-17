<template>
  <component :is="node.component" :id="node.id" v-bind="node.props"
             :style="geometry" v-on="events" :children="node.children"

             :value="value" @input="!$event.target && $emit('input', $event)"> <!-- form v-model -->
    <node v-for="child in node.children" :key="child.id" :node="child"></node>
  </component>
</template>

<script>
  import Table from './Table';
  import Button from './Button';
  import Input from './Input';
  import Checkbox from './Checkbox';
  import Password from './Password';
  import Select from './Select';
  import Form from './Form';
  import MenuBlock from './Header/Menu/MenuBlock';
  import MenuButton from './Header/Menu/MenuButton';
  import Menu from './Header/Menu/Menu';
  import Header from './Header/Header';
  import Title from './Header/Title';
  import Content from './Content';
  import DoubleInput from './DoubleInput';
  import Container from './Container';

  export default {
    name: "node",
    props: ['node', 'value'],
    components: {
      Table,
      Button,
      Input,
      Checkbox,
      Password,
      Select,
      Form,
      MenuBlock,
      MenuButton,
      Menu,
      Header,
      Title,
      Content,
      DoubleInput,
      Container
    },
    methods: {
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      myfunc() {
        console.log('myfunc');
      },
      onRowEdited() {
        console.log('onRowEdited')
      },
      saveRow: () => console.log('saveRow')
    },
    data() {
      return {
        geometry: {},
        events: {}
      }
    },
    beforeMount() {
      // adding 'px'
      for (const property in this.node.geometry) {
        this.geometry[property] = isNaN(this.node.geometry[property])
          ? this.node.geometry[property]
          : this.node.geometry[property] + 'px'
      }
      /*if (!this.geometry.position) {
        this.geometry.position = 'relative'
      }*/

      // adding events
      this.node.actions && this.node.actions.forEach(action => {
        this.events[action['type']] = this[action['call']];
      })
    }
  }
</script>

<style scoped>

</style>