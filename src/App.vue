<template>
  <div id="app">

    <div id="desktopNavbar" style="width: 100px; text-align: center; padding: 10px; font-size:smaller;">
      <div class="desktopLink" @click="() => openWindow('main')">
        <img src="@/assets/img/site/mz-desktop-icon.png">
        <p>
          <span>Home</span>
        </p>
      </div>
      <div class="desktopLink" @click="() => openWindow('experience')">
        <img src="@/assets/img/site/mz-desktop-icon.png">
        <p>
          <span>About</span>
        </p>
      </div>
      <div class="desktopLink" @click="() => openWindow('projects')">
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
      <div class="windowBox" id="mainWindowBox" v-if="windowsOpen.main" 
      @mouseDown="handleMainWindowMouseDown"
      :style="windowsClassStyle.main">
        <div class="windowTitleBar"
        @mousedown="handleMainTitleBarMouseDown"
        >
          <div class="windowTitleBarText"
          @mousedown="handleMainTitleBarMouseDown"
          >Home</div>
          <div class="windowTitleBarControls">
            <button @click="() => toggleContent('main')">
              <div v-if="windowsContent.main">_</div>
              <div v-else>+</div>
            </button>
            <button @click="() => closeWindow('main')">X</button>
          </div>
        </div>
        <div v-show="windowsContent.main" class="section-content" style="width:60vw;">
          <!-- iframe! -->
          <iframe src="views/home.html" name="iframe_main" title="Main Window IFrame"></iframe>
        </div>
      </div>
      
      
      <!-- experience window -->
      <!-- style="left:22vw; top:12vh;" -->
      <div class="windowBox" v-show="windowsOpen.experience"
      :style="windowsClassStyle.experience" >
        <div class="windowTitleBar">
          <div class="windowTitleBarText">About</div>
          <div class="windowTitleBarControls">
            <button @click="() => toggleContent('experience')">
              <div v-if="windowsContent.experience">_</div>
              <div v-else>+</div>
            </button>
            <button @click="() => closeWindow('experience')">X</button>
          </div>
        </div>
        <!-- navbar -->
        <nav v-show="windowsContent.experience" class="navbar">
          <ul>
            <li><a href="views/about-me.html" target="iframe_experience">Me</a></li>
            <li><a href="about.html" target="iframe_experience">Skills</a></li>
            <li><a href="games.html" target="iframe_experience">Education</a></li>
            <li><a href="music.html" target="iframe_experience">Work</a></li>
          </ul>
        </nav>
        <div v-show="windowsContent.experience" class="section-content" style="width:60vw;">
          <iframe src="home.html" name="iframe_experience" title="Experience Window IFrame"></iframe>
        </div>
      </div>

      <!-- projects window -->
      <!-- style="left:24vw; top:14vh;" -->
      <div class="windowBox" v-show="windowsOpen.projects" :style="windowsClassStyle.projects" >
        <div class="windowTitleBar">
          <div class="windowTitleBarText">stuff i've made</div>
          <div class="windowTitleBarControls">
            <button @click="() => toggleContent('projects')">
              <div v-if="windowsContent.projects">_</div>
              <div v-else>+</div>
            </button>
            <button @click="() => closeWindow('projects')">X</button>
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
      <div class="windowBox" v-if="windowsOpen.warning" :style="windowsClassStyle.alert">
        <div class="windowTitleBar">
          <div class="windowTitleBarText">warning!</div>
          <div class="windowTitleBarControls">
            <button @click="() => closeWindow('warning')">X</button>
          </div>
        </div>
        <div class="section-content">
          <div style="display:flex; align-items: center; justify-content: space-between;">
            <img src="@/assets/img/site/alert-icon.png" />
            <span>site under construction!</span>
          </div>
          <button @click="() => closeWindow('warning')">ok</button>
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
import { onBeforeUnmount } from 'vue'


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


const windowsClassStyle = reactive({
  test: {
    left: '20vw',
    top:'10vh',
  },
  main: {
    left: '20vw',
    top:'10vh',
    zIndex: 10,
    },
  experience: {
    left: '22vw',
    top:'12vh',
    zIndex: 20,

  },
  projects: {
    left: '24vw',
    top:'14vh',
    zIndex: 30,
  },
  alert:{
    left: '45vw',
    top:'45vh',
    zIndex: 1000,
  }
})


const windowPositions = reactive({
  main: {
    startX: 0,
    startY: 0,
    newX: 0,
    newY: 0,
    maxZ: 0
  },
  experience: {
    startX: 0,
    startY: 0,
    newX: 0,
    newY: 0,
    maxZ: 0
  },
})
const zIndexes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const num = ref(0)
const currentWindow = ref(null)
const windows = ref([])
const openCounter = ref(0)
function alertme() {
  num.value++
}


function openWindow(id) {
  windowsClassStyle[id].zIndex = windows.value.length * 10
  openCounter.value++
  if (windows.value.length == 0){
    windowsClassStyle[id].left = '20vw'
    windowsClassStyle[id].top = '10vh'
    windowsClassStyle[id].zIndex = 10
  }else{
    const windowPosIndex = openCounter.value % 3
    windowsClassStyle[id].zIndex = windows.value.length * 10
     windowsClassStyle[id].left = `${20 + (windowPosIndex)*3}vw`
      windowsClassStyle[id].top = `${10 + (windowPosIndex) *3}vh`
  }
  windows.value.push(id)
  windowsOpen[id] = true
}

function closeWindow(id) {
  windows.value = windows.value.filter(window => window !== id)
  const windowNames = ["main", "experience", "projects"]
  
  windowNames.forEach((window, index) => {
    if (window != id) {
      windowsClassStyle[window].zIndex = index * 10
    }else{
      windowsClassStyle[window].zIndex = -1
    }
  })
  
  windowsOpen[id] = false;
}

function showContent(id) {
  windowsContent[id] = true;
}

function hideContent(id) {
  windowsContent[id] = false;
}

function toggleContent(id) {
  windowsContent[id] = !windowsContent[id];
}

const mousemoveMainEventListener = (e)=> {
    const mainWindow = document.getElementById('mainWindowBox')
    windowPositions.main.newX =  e.clientX - windowPositions.main.startX
    windowPositions.main.newY = e.clientY - windowPositions.main.startY
    
    windowsClassStyle.main.top =  `${(mainWindow.offsetTop - windowPositions.main.newY)}px`
    windowsClassStyle.main.left = `${-(mainWindow.offsetLeft - windowPositions.main.newX)}px`
    console.log('mousemove', windowPositions.main, windowPositions.main)
  }
  

const mainMouseUpEventListener = (e) => {
  currentWindow.value = null
  window.removeEventListener('mousemove', mousemoveMainEventListener)
}
// EVENT HANDLERS
function handleMainTitleBarMouseDown(e) {
  e.preventDefault();
  console.log('mouse down')
  if(currentWindow.value || e.button !=0) return
  
  currentWindow.value = 'main'
  
  windowPositions.main.startX = e.clientX
  windowPositions.main.startY = e.clientY
  
  window.addEventListener('mousemove', mousemoveMainEventListener)
  
  window.addEventListener('mouseup', (e) => {
    currentWindow.value = null
    document.removeEventListener('mousemove', mousemoveMainEventListener)
  })
  
}

function handleExperienceTitleBarMouseDown(e) {
  e.preventDefault();
  console.log('mouse down')
}


function handleExperienceWindowMouseDown(e) {
  e.preventDefault();
  console.log('mouse down')
}


function handleMainWindowMouseDown(e) {
  e.preventDefault();
  console.log('mouse down')
}


function resizeZIndices() {
}


</script>




<!-- STYLE -->
<style>
@font-face {
  font-family: Dogica;
  src: url('@/assets/fonts/dogica.ttf');
}

@font-face {
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
  background: url('@/assets/img/bg/glitch1.png');
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
@font-face {
  font-family: Dogica;
  src: url('@/assets/fonts/dogica.ttf');
}

@font-face {
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
  height: 500px;
  width: 100%;
  border: none;
}

#container {
  max-width: 900px;
  margin: auto;
  background-color: var(--bg);
  border: 3px solid var(--text);
}

#container a {
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

.windowTitleBar:hover {
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

.windowTitleBar button:hover {
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

.desktopLink:hover {
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
