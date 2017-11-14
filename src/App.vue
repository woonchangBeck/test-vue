<template>
  <div id="app">

    <img src="./assets/logo.png">

    <div class="section">
      <h1>Vuex http request test</h1>
      <div class="get-list" v-if="hasResult">
        <div v-for="post in posts" v-bind:key="post.id">
          <h1>{{ post.id }}</h1>
          <p>{{ post.title }}</p>
        </div>
      </div>

      <button v-else v-on:click="searchTerm">Load Article</button>
    </div>

    <div class="section vuex-test">
      <h1>Vuex Testing</h1>
      <p>Parent: counter: {{ parentCounter }}</p>
      <button @click="addCounter">Increase from HelloWorld.vue +</button>
      <button @click="subCounter">Decrease from HelloWorld.vue -</button>
    </div>

    <router-view/>

    <div class="section">
      <h1>Environemnt information</h1>
      <p>Environment: <span>{{ environmentName }}</span></p>
      <p>GTM-ID: <span>{{ GTM }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      posts: [],
      environmentName: process.env.NODE_ENV,
      GTM: process.env.GTM
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    },
    parentCounter () {
      return this.$store.state.counter
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
      // this.$store.state.counter++
      // use Mutations
      // this.$store.commit('addCounter', 5)
      // use Actions
      this.$store.dispatch('addCounter')
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
    margin: 0 auto;
  }
  .vuex-test {
    button {
      display: inline-block;
    }
  }
  .section {
    margin: 40px 0;
    border-top: 1px solid black;
  }
}
</style>
