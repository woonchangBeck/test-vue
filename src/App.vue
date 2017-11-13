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
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.get-list {
  text-align: left;
}

button {
  display:block;
  margin: 30px auto;
}

h1,
p {
  display: inline;
}
</style>
