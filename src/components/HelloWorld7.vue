<template>
    <div class="alert alert-primary">
        <h1>{{ data.title }}</h1>
        <p class="mt-3 h5">{{ $store.state.message }}</p>
        <hr>
        <div class="btn btn-secondary"
            @click="$store.commit('count', 2)"
            @click.right="$store.commit('reset')">
            <a class="h5">clicked: {{ $store.state.counter }}</a>
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue'

export default {
    setup(props) {
        const data = reactive({
            title: 'Vuex',
        })
        return {
            data
        }
    }
}
</script>