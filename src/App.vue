<template>
  <div id="app" class="app-container">


    <nav class="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>



    <div class="content">
      <h1 class="h1">Hello BITCH </h1>
      <button @click="alertme">
        {{ num }}
      </button>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */

// import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive } from 'vue'

const windowsOpen = ref({
  test: true,
  warning: true,
  main: false,
  experience: false,
  projects: false
})


const windowsContent = ref({
  test: true,
  main: true,
  experience: true,
  projects: true

})
function alertme() {
  num.value++
}


function openWindow(id) {

}

const num = ref(0)
</script>




<!-- STYLE -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #38a673;
}

.app-container {
  display: flex;
}

.navbar {
  width: 200px;
  background-color: #2c3e50;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
}

.navbar li {
  margin: 20px 0;
}

.navbar a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>
