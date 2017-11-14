<template>
  <div class="hello">
    {{ msg }}
    <p>Child counter: {{ childCounter }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is from HelloWorld.vue (From child component)'
    }
  },
  computed: {
    childCounter () {
      return this.$store.getters.getCounter
    }
  }
}
</script>

<style>
  .hello {
    margin-top: 30px;
  }
</style>
