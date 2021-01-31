<template>
    <div id="Posts">
        <div  v-bind:key="elements.id" v-for="elements in Posts">
            <h2>{{elements.title}}</h2>
            <h6>{{elements.content}}</h6>            
        </div>
    </div>
</template>
<script>
export default {
  name: 'Posts',
  props: ["Posts"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@import '../html5_template/assets/css/main.css'

</style>
