<template>
  <div id="app">
    <Keyevent />
    <Event />
    <Watcher />
    <GetSet title="Getter Setter" />
    <Validation title="バリデーションチェックの確認" :num="num" />
    <HelloJSX title="OK, Vue3" message="※属性で設定したメッセージ" />
    <Calc v-bind:title="message" v-on:result-event="appAction" />
    <div class="mt-3 text-left">
      <table class="table" v-html="log"></table>
    </div>
    <div>
      <button class="btn btn-danger" v-on:click="doClear">Clear Log</button>
    </div>
  </div>
</template>

<script>
import Calc from './components/Calc.vue'
import HelloJSX from './components/helloJSX'
import Validation from './components/Validation.vue'
import GetSet from './components/GetSet.vue'
import Watcher from './components/Watcher.vue'
import Event from './components/Event.vue'
import Keyevent from './components/Keyevent.vue'

export default {
  name: 'App',
  components: {
    Calc,
    HelloJSX,
    Validation,
    GetSet,
    Watcher,
    Event,
    Keyevent
  },
  data() {
    return {
      message: 'CALC',
      result: [],
      num: 50
    }
  },
  computed: {
    log() {
      let table = '<tr><th>Expression</th><th>Value</th></tr>'
      if (this.result.length > 0) {
        for (var i in this.result) {
          table += '<tr><td>' + this.result[i][0] + '</td><th>' + this.result[i][1] + '</th></tr>'
        }
      }
      return table
    }
  },
  created() {
    let items = localStorage.getItem('log')
    let logs = JSON.parse(items)
    if (logs != null) { this.result = logs }
  },
  methods: {
    appAction(exp, res) {
      this.result.unshift([exp, res])
      var log = JSON.stringify(this.result)
      localStorage.setItem('log', log)
    },
    doClear() {
      if (confirm('ログを全て消去します。')) {
        localStorage.removeItem('log')
        this.result = []
      }
    }
  }
}
</script>
