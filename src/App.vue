<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Click">Click</router-link>
      <router-link to="/Scoll">Scoll</router-link>
      <router-link to="/debounce">debounce动画演示</router-link>
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
  background: #282c34;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 28px;
  font-weight: 600;
  width: 900px;
  margin: 0 auto;
  height: 10000px;
  padding: 20px;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 40px;
    text-decoration: none;
    color: white;
    line-height: 40px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
