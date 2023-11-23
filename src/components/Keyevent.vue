<template>
    <div class="alert alert-primary">
        <h1>{{ title }}</h1>
        <pre v-on:click="clear">{{ message }}</pre>
        <hr>
        <div>
            <input type="text" class="form-control" v-on:keydown="type">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Keyevent',
    data: function() {
        return {
            title: 'Key Event',
            message: '',
        }
    },
    methods: {
        type(event) {
            this.message += event.key + ' '
            if (event.key == "Escape") {
                this.message = ''
            }
            event.target.value = ''
        },
        clear() {
            this.message = ''
        }
    }
}
</script>