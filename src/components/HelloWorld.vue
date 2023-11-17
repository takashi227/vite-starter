<template>
  <div class="alert alert-info">
    <h2>{{ title }}</h2>
    <p ref="msg">{{ message }}</p>
    <button class="btn btn-primary" v-on:click="doAction">Click</button>
    <!-- <hr>
    <div>
      <input class="form-control" type="text" v-model="input">
      <button class="btn btn-info mt-2" v-on:click="doAction">Click</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   title: String,
  // },
  data() {
    return {
      title: 'HelloWorld',
      message: 'This is sample message.',
      // input: 'no name',
    }
  },
  mounted() {
    this.counter = 0
  },
  methods: {
    doAction() {
      this.counter++
      this.$refs.msg.innerHTML += '<h6>counted: ' + this.counter + '</h6>'
      // this.message = 'こんにちは、' + this.input + 'さん！'
      // this.$emit('result-event', this.input)
    }
  }
}
</script>
