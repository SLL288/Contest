<template>
    <div id="Posts">
        <PostHeadline id="postheadline1" v-bind:perVar="heads" />
        
        <div  id = "content" v-bind:key="elements.id" v-for="elements in Posts">
            <h2>{{elements.title}}</h2>
            <h6>{{elements.content}}</h6>            
            <p>{{elements.id}}</p>
        </div>
    </div>
</template>


<script>
import PostHeadline from './PostHeadline.vue'
export default {
  name: 'Posts',
  components:{PostHeadline},
  props: ["Posts","heads"],
}
</script>

