<template>
  <div class="menu-block">
    <div class="menu-buttons nav">
      <MenuButton v-for="child in children" :key="child.id" v-bind="child.props"/>
    </div>
    <span>{{title}}</span>
  </div>
</template>

<script>
  import MenuButton from "./MenuButton";
  export default {
    name: "MenuBlock",
    components: {MenuButton},
    props: ['title', 'children']
  }
</script>

<style scoped>
  .menu-block {
    border-right: 1px solid grey;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-buttons {
    display: flex;
  }

  @media (max-width: 600px) {
    .menu-buttons.nav {
      align-self: flex-start;
    }

    .menu-block {
      width: 100%;
    }
  }
</style>
