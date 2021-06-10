<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/Todo">ToDoList</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        padding-right: 100px;
        padding-left: 100px;
        text-align: right;
        font-size: 20px;

        a   {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
