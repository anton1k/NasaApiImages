<template>
  <div id="app">
    <my-menu></my-menu>
    <router-view/>
  </div>
</template>

<script>
import MyMenu from './components/Menu'

export default {
  components: {
    MyMenu
  }
}
</script>

<style lang="scss">

@import "./scss/bootstrap/scss/bootstrap-grid";
@font-face {    
    font-family: "Montserrat";
    src : url("./font/Montserrat-Regular.ttf")
}
    
*{
  box-sizing: border-box;
}
html, body {
  background: #2c3e50;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;

}

</style>
