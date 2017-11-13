<template>
  <div id="app">

    <img src="./assets/logo.png">

    <div class="get-list" v-if="hasResult">
      <div v-for="post in posts" v-bind:key="post.id">
        <h1>{{ post.id }}</h1>
        <p>{{ post.title }}</p>
      </div>
    </div>

    <button v-else v-on:click="searchTerm">Load Article</button>

    <h1>Vuex Testing</h1>
    <p>Parent: counter: {{ this.$store.state.counter }}</p>
    <button @click="addCounter">Increase from HelloWorld.vue +</button>
    <button @click="subCounter">Decrease from HelloWorld.vue -</button>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    searchTerm: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com'

      this.$http.get(`${baseURI}/posts`)
      .then((result) => {
        console.log(result)
        this.posts = result.data
      })
    },
    addCounter () {
      this.$store.state.counter++
    },
    subCounter () {
      this.$store.state.counter--
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .get-list {
    text-align: left;

    h1,
    p {
      display: inline;
    }
  }
  button {
    display:block;
    margin: 30px auto;
  }
}
</style>
