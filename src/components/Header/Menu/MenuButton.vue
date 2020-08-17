<template>
  <button :class={classes}>
    <img :src="require(`../../../assets/${iconFileName}`)" :alt="title"/>
    <span>{{title}}</span>
  </button>
</template>

<script>
  export default {
    name: "MenuButton",
    props: ['iconFileName', 'title', 'className'],
    computed:{
      classes: function(){
        return `menu-button col-sm ${this.className}`
      }
    }
  }
</script>

<style scoped>
  .menu-button {
    display: flex;
    flex-direction: column;
    align-items: center;

    background: none;
    border: none;
    outline: none;

    padding: 0;
  }

  .menu-button > img {
    max-width: 80px;
    width: 100%;
  }

  .menu-button > span{
    font-size: 1.5vw;
  }

  @media (min-width:1024px){
    .menu-button > span {
      font-size: 20px;
    }
  }

  @media (max-width: 575.98px) {
    .menu-button.col-sm {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: auto;
    }

    .menu-button > span {
      font-size: 14px;
    }

    .menu-button.col-sm > img {
      width: 20px;
    }
  }
</style>
