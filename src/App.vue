<template>

  <div id="app" >

    <div id="desktopNavbar" style="width: 100px; text-align: center; padding: 10px; font-size:smaller;">
      <div class="desktopLink" @:click="openWindow('main')">
        <img src="@/assets/img/site/mz-desktop-icon.png">
        <p>
          <span>Home</span>
        </p>
      </div>
      <div class="desktopLink" @:click="openWindow('experience')">
        <img src="@/assets/img/site/mz-desktop-icon.png">
        <p>
          <span>About</span>
        </p>
      </div>
      <div class="desktopLink" @:click="openWindow('projects')">
        <img src="@/assets/img/site/mz-desktop-icon.png">
        <p>
          <span>Projects</span>
        </p>
      </div>
      <div class="desktopLink">
        <img src="@/assets/img/site/mz-desktop-icon.png">
        <p>
          <span>Writing</span>
        </p>
      </div>
      <div class="desktopLink">
        <img src="@/assets/img/site/mz-desktop-icon.png">
        <p>
          <span>Sitemap</span>
        </p>
      </div>
    </div>
    
    <div id="windowWrapper">
      <!-- main window -->
      <div class="windowBox" v-show="windowsOpen.main" :style="windowsClassStyle.main">
        <div class="windowTitleBar">
          <div class="windowTitleBarText">Home</div>
          <div class="windowTitleBarControls">
            <button @:click="toggleContent('main')">
              <div v-if="windowsContent.main">_</div>
              <div v-else>+</div>
            </button>
            <button @:click="closeWindow('main')">X</button>
          </div>
        </div>
        
        
        
        <div v-show="windowsContent.main" class="section-content" style="width:60vw;">
          <!-- iframe! -->
          <iframe src="views/home.html" name="iframe_main" title="Main Window IFrame"></iframe>
        </div>
      </div>

      <!-- experience window -->
      <div class="windowBox" v-show="windowsOpen.experience" style="left:22vw; top:12vh;">
        <div class="windowTitleBar">
          <div class="windowTitleBarText">About</div>
          <div class="windowTitleBarControls">
            <button @:click="toggleContent('experience')">
              <div v-if="windowsContent.experience">_</div>
              <div v-else>+</div>
            </button>
            <button @:click="closeWindow('experience')">X</button>
          </div>
        </div>
        <!-- navbar -->
        <!-- <nav v-show="windowsContent.experience" class="navbar">
          <ul>
            <li><a href="views/about-me.html" target="iframe_experience">Me</a></li>
            <li><a href="about.html" target="iframe_experience">Skills</a></li>
            <li><a href="games.html" target="iframe_experience">Education</a></li>
            <li><a href="music.html" target="iframe_experience">Work</a></li>
          </ul>
        </nav>
        <div v-show="windowsContent.experience" class="section-content" style="width:60vw;">
          <iframe src="home.html" name="iframe_experience" title="Experience Window IFrame"></iframe>
        </div> -->
      </div>

      <!-- projects window -->
      <div class="windowBox" v-show="windowsOpen.projects" style="left:24vw; top:14vh;">
        <div class="windowTitleBar">
          <div class="windowTitleBarText">stuff i've made</div>
          <div class="windowTitleBarControls">
            <button @:click="toggleContent('projects')">
              <div v-if="windowsContent.projects">_</div>
              <div v-else>+</div>
            </button>
            <button @:click="closeWindow('projects')">X</button>
          </div>
        </div>
        <!-- navbar -->
        <nav v-show="windowsContent.projects" class="navbar">
          <ul>
            <li><a href="home.html" target="iframe_projects">web dev</a></li>
            <li><a href="about.html" target="iframe_projects">game dev</a></li>
            <li><a href="games.html" target="iframe_projects">other</a></li>
            <li><a href="music.html" target="iframe_projects">contact</a></li>
          </ul>
        </nav>
        <div v-show="windowsContent.projects" class="section-content" style="width:60vw;">
          <!-- iframe! -->
          <iframe src="home.html" name="iframe_projects" title="Projects Window IFrame"></iframe>
        </div>
      </div>
      
      <!-- warning popup window -->
      <div class="windowBox" v-show="windowsOpen.warning">
        <div class="windowTitleBar">
          <div class="windowTitleBarText">warning!</div>
          <div class="windowTitleBarControls">
            <button @:click="closeWindow('warning')">X</button>
          </div>
        </div>
        <div class="section-content">
          <div style="display:flex; align-items: center; justify-content: space-between;">
            <img src="@/assets/img/site/alert-icon.png"/>
            <span>site under construction!</span>
          </div>
          <button @:click="closeWindow('warning')">ok</button>
        </div>
        
      
      </div>
  
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */

// import HelloWorld from './components/HelloWorld.vue'
import { ref, reactive } from 'vue'
import { onMounted } from 'vue'
import {onBeforeUnmount} from 'vue'

const windowsOpen = reactive({
  test: true,
  warning: true,
  main: false,
  experience: false,
  projects: false
})


const windowsContent = reactive({
  test: true,
  main: true,
  experience: true,
  projects: true

})


const windowsClassStyle= reactive({
  test: {},
  main: {},
  experience: {},
  projects: {}
})

const num = ref(0)

function alertme() {
  num.value++
}


function openWindow(id)  {
  windowsOpen[id] = true
}


function closeWindow(id, windowsOpen) {
  windowsOpen[id] = false;
}

function showContent(id, windowsContent) {
  windowsContent[id] = true;
}

function hideContent(id, windowsContent) {
  windowsContent[id] = false;
}

function toggleContent(id, windowsContent) {
  windowsContent[id] = !windowsContent[id];
}
</script>




<!-- STYLE -->
<style>
@font-face{
  font-family: Dogica;
  src: url('@/assets/fonts/dogica.ttf');
}

@font-face{
  font-family: Dogica;
  src: url('@/assets/fonts/dogicabold.ttf');
  font-weight: bold;
}

#app {
  font-family: Dogica, Basiic;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:  url('@/assets/img/bg/glitch1.png');
  --text: #FFFFFF;
  --bg: #101020;
  --link: #A0D0FF;
  
  --header-image: url('@/assets/img/bg/glitch1.png');
  --body-bg-image: url('@/assets/img/bg/glitch1.png');
  --box-bg-image: url('@/assets/img/bg/glitch2.png');
  --box2-bg-image: url('@/assets/img/bg/glitch2.png');
  height: 100vh;
  width: 100vw;
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

:root {
  --text: #FFFFFF;
  --bg: #101020;
  --link: #A0D0FF;
  
  --header-image: url('@/assets/img/bg/glitch1.png');
  --body-bg-image: url('@/assets/img/bg/glitch1.png');
  --box-bg-image: url('@/assets/img/bg/glitch2.png');
  --box2-bg-image: url('@/assets/img/bg/glitch2.png');
}

/* fonts */
@font-face{
  font-family: Dogica;
  src: url('@/assets/fonts/dogica.ttf');
}

@font-face{
  font-family: Dogica;
  src: url('@/assets/fonts/dogicabold.ttf');
  font-weight: bold;
}

* {
  box-sizing: border-box; 
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Dogica', 'MS PGothic', verdana, sans-serif;
  margin: 0;
  font-size: 12px;
  line-height: 1.2;
}

/* index stuff */
.index {
  background-image: var(--body-bg-image);
}

iframe {
  height:500px; 
  width:100%;
  border:none;
}

#container {
  max-width: 900px;
  margin: auto;
  background-color: var(--bg);
  border: 3px solid var(--text);
}

#container a{
  color: var(--link);
}
#headerArea {
  background-color: var(--bg);  
}

#header {
  width: 100%;
  background-color: var(--link);
  color: var(--bg);
  background-size: 100%;
  padding: 5px;
}

/* navbar */
.navbar {
  /* navbar color */
  color: var(--text);
  background-color: var(--bg);
  width: 100%;
  margin: 0px; 
}

.navbar ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style-type: none;
  justify-content: initial;
}

.navbar li {
  padding: 10px;
}


.view {
  background-image: var(--box-bg-image);
}


/* navigation links*/
.navbar li a {
  color: var(--text);
  /* this removes the underline */
  text-decoration: none;
}

.navbar li::first-letter {
  text-decoration: underline; 
}

/* navigation link when a link is hovered over */
.navbar li a:hover {
  color: var(--link);
}

#flex {
  display: flex;
  background-image: var(--box-bg-image);
  margin: 0px 5px;
}

#flex li {
  margin: 5px;  
}

aside {
  width: 250px;
  margin: 20px 10px 20px 20px;
}

main {
  flex: 1;
  margin: 20px 20px 20px 10px;
  order: 2;
}

#leftSidebar {
  order: 1;
}

#rightSidebar {
  order: 3;
}

footer {
  background-color: var(--bg);
  width: 40%;
  height: 40px;
  padding: 10px;
  text-align: center;
  color: var(--text);
}

ul {
  padding-inline-start: 10px; 
}

h1,
h2,
h3 {
  color: var(--text);
}

h1 {
  font-size: 25px;
}

a {
  color: var(--link); 
}

.box {
  background-color: #42A584;
  border: 1px solid #fceaff;
  padding: 10px;
}

.box2 {
  background-color: #AD73CE;
  border: 1px solid #fceaff;
  padding: 10px;
}

.section-header {
  color: var(--bg);
  background-color: var(--text);
  padding: 5px;
}

.section-content {
  color: var(--text);
  background-color: var(--bg);
  overflow: hidden;
  padding: 10px;
}


/* window box stuff */
.windowBox {
  background-color: #AFDA9F;
  border: 3px solid var(--text);
  position: absolute;
}

.windowTitleBar {
  color: var(--bg);
  background-color: var(--link);
  padding: 5px;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.windowTitleBar:hover{
  cursor: move;
}

.windowTitleBar button {
  font-family: Dogica;
  padding: 2px;
  margin-left: 5px;
  text-align: center;
  color: var(--bg);
  background-color: var(--link);
  border: 2px solid var(--link);
}

.windowTitleBar button:hover{
  background-color: var(--bg);
  color: var(--link);
  border: 2px solid var(--bg);
  cursor: pointer;
}

.windowTitleBarControls {
  display: flex;
}

.windowTitleBarText {
  pointer-events: none;
}

/* desktop link stuff */
.desktopLink {
  margin-bottom: 20px;
  padding: 5px;
}

.desktopLink:hover{
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
}

.desktopLink p {
  margin-top: 0px;
  user-select: none;
}

#topBar {
  width: 100%;
  height: 30px;
  padding: 10px;
  font-size: smaller;
  background-color: #13092D;
}

@media only screen and (max-width: 800px) {
  #flex {
    flex-wrap: wrap;
  }
  
  aside {
    width: 100%;
  }
  
  main {
    order: 1;
  }
  
  #leftSideBar {
    order: 2; 
  }
  
  #rightSideBar {
    order: 3;
  }
  
  .navbar ul {
    flex-wrap: wrap; 
  }
}




</style>
