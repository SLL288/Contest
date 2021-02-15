<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <navbar />
    <Posts v-bind:Posts="PostsMessage" v-bind:heads="heads" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Posts from './components/Posts.vue'
import Navbar from './components/Navbar.vue'
// import PostHeadline from './components/PostHeadline.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Posts,
    // PostHeadline
  },
  data(){
    return {
      heads:"HeadLINEs",
      PostsMessage:[
        {id:1,
          title:"news1",
          content:"content1" 
        },
        {id:2,
          title:"news2",
          content:"content2" 
        },
        {id:3,
          title:"news3",
          content:"content3" 
        },
        {id:4,
          title:"news4",
          content:"content4" 
        },
        {id:5,
          title:"news5",
          content:"content5" 
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


@import './html5_template/assets/css/main.css'
</style>
