<template>
  <div id="app">
    <HelloWorld v-bind:title="message" v-on:result-event="appAction" />
    <hr>
    <p>{{ result }}</p>
  </div>
  <!-- <button class="btn btn-primary" v-on:click="doAction">change title</button> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      message: 'HELLO',
      result: 'no event',
    }
  },
  methods: {
    // doAction() {
    //   var input = prompt("new title:")
    //   this.message = input
    // }
    appAction(message) {
      this.result = '(*** you send"' + message + '". ***)'
    }
  }
}
</script>
