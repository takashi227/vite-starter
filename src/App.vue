<template>
  <div id="app">

    <!-- axios -->
    <Axios2 />
    <Axios />

    <!-- vuex -->
    <!-- <HelloWorld7 /> -->

    <!-- vue-router -->
    <!-- <div>
      <router-link :to="{name:'index', params:{name:'TARO'}}" class="btn btn-primary mx-2">
        Go to Top
      </router-link>
      <router-link :to="{name:'jsx', params:{name:'HANAKO'}}" class="btn btn-warning">
        Go to JSX
      </router-link>
      <hr>
      <h5>default view</h5>
      <router-view />
      <hr>
      <h5>A & B</h5>
      <router-view name="first"></router-view>
      <router-view name="second"></router-view>
    </div> -->

    <!-- 通常のやつ -->
    <!-- <HelloWorld5 title="CompositionAPI methods" />
    <HelloWorld4 title="CompositionAPI reactive" />
    <HelloWorld3 title="CompositionAPI" />
    <HelloJSX2 title="Composition API" msg="This is Composition API sample JSX." />
    <HelloWorld2 title="Composition API" msg="This is Composition API sample." />
    <Transform />
    <Transitions2 />
    <Transitions />
    <SlotValue>
      <li class="list-group-item"
        v-for="obj in slotobjs"
        v-bind:key="obj.name">
        {{ obj.name }} {{ obj.mail }}
      </li>
    </SlotValue>
    <NameSlot>
      <p>Bigin!..</p>
      <template v-slot:first>
        *** First message ***
      </template>
      <p>..Middle..</p>
      <template v-slot:second>
        *** Second message ***
      </template>
      <p>..End</p>
      <template v-slot:third>
        *** Third message ***
      </template>
    </NameSlot>
    <Slot>
      <p>*** This is default slot sample ***</p>
    </Slot>
    <Mauseevent />
    <Keyevent3 />
    <Keyevent2 />
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
    </div> -->
  </div>
</template>

<script>
// axios
import Axios from './components/Axios.vue';
import Axios2 from './components/Axios2.vue';

export default {
  name: 'app',
  components: {
    Axios,
    Axios2
  },
}

// vuex
// import HelloWorld7 from './components/HelloWorld7.vue';

// export default {
//   name: 'app',
//   components: {
//     HelloWorld7
//   },
// }

// vue-router
// export default {
//   name: 'app',
//   created() {
//     console.log("***** App Created! *****")
//   },
//   mounted() {
//     console.log("----- App Mounted! -----");
//   },
//   data() {
//     return {
//       title: 'Router'
//     }
//   }
// }

// 通常のやつ
// import Calc from './components/Calc.vue'
// import HelloJSX from './components/helloJSX'
// import Validation from './components/Validation.vue'
// import GetSet from './components/GetSet.vue'
// import Watcher from './components/Watcher.vue'
// import Event from './components/Event.vue'
// import Keyevent from './components/Keyevent.vue'
// import Keyevent2 from './components/Keyevent2.vue'
// import Keyevent3 from './components/Keyevent3.vue'
// import Mauseevent from './components/Mauseevent.vue'
// import Slot from './components/Slot.vue'
// import NameSlot from './components/NameSlot.vue'
// import SlotValue from './components/SlotValue.vue'
// import Transitions from './components/Transitions.vue'
// import Transitions2 from './components/Transitions2.vue'
// import Transform from './components/Transform.vue'
// import HelloWorld2 from './components/HelloWorld2.vue'
// import HelloJSX2 from './components/HelloJSX2'
// import HelloWorld3 from './components/HelloWorld3.vue'
// import HelloWorld4 from './components/HelloWorld4.vue'
// import HelloWorld5 from './components/HelloWorld5.vue'

// export default {
//   name: 'App',
//   components: {
//     Calc,
//     HelloJSX,
//     Validation,
//     GetSet,
//     Watcher,
//     Event,
//     Keyevent,
//     Keyevent2,
//     Keyevent3,
//     Mauseevent,
//     Slot,
//     NameSlot,
//     SlotValue,
//     Transitions,
//     Transitions2,
//     Transform,
//     HelloWorld2,
//     HelloJSX2,
//     HelloWorld3,
//     HelloWorld4,
//     HelloWorld5
//   },
//   data() {
//     return {
//       message: 'CALC',
//       result: [],
//       num: 50,
//       slotobjs: [
//         {name: 'Taro', mail: 'taro@yamada'},
//         {name: 'Hanako', mail: 'hanako@flower'},
//         {name: 'Sachiko', mail: 'sachiko@happy'},
//       ]
//     }
//   },
//   computed: {
//     log() {
//       let table = '<tr><th>Expression</th><th>Value</th></tr>'
//       if (this.result.length > 0) {
//         for (var i in this.result) {
//           table += '<tr><td>' + this.result[i][0] + '</td><th>' + this.result[i][1] + '</th></tr>'
//         }
//       }
//       return table
//     }
//   },
//   created() {
//     let items = localStorage.getItem('log')
//     let logs = JSON.parse(items)
//     if (logs != null) { this.result = logs }
//   },
//   methods: {
//     appAction(exp, res) {
//       this.result.unshift([exp, res])
//       var log = JSON.stringify(this.result)
//       localStorage.setItem('log', log)
//     },
//     doClear() {
//       if (confirm('ログを全て消去します。')) {
//         localStorage.removeItem('log')
//         this.result = []
//       }
//     }
//   }
// }
</script>
