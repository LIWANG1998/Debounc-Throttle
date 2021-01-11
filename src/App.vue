<template>
  <div id="app">
    <div id="nav">
      <h1><router-link to="/">防抖</router-link></h1>
      <h1><router-link to="/about">节流</router-link></h1>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  background-color: #e9ecef;
  height: 100%;
  font-size: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 20px;
  font-weight: 600;
  width: 700px;
  margin: 0 auto;
  background-color: white;
  height: 100%;
  padding: 20px;
  text-align: left;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
