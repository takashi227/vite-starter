<template>
    <div class="alert alert-primary">
        <h1>{{ title }}</h1>
        <pre>{{ message }}</pre>
        <hr>
        <div class="area"
            v-on:click.left.prevent="left"
            v-on:click.middle.prevent="middle"
            v-on:click.right.prevent="right" >
            click here!!
        </div>
    </div>
</template>

<script>
export default {
    name: 'Mauseevent',
    data: function() {
        return {
            title: 'Mause Event',
            message: '',
        }
    },
    methods: {
        left() {
            this.message = '[left button]'
        },
        right() {
            this.message = '[right button]'
        },
        middle() {
            this.message = '[middle button]'
        }
    }
}
</script>

<style>
.area {
    width: 300px;
    height: 100px;
    background-color: #fff;
    padding: 10px;
    font-size: 20pt;
}
</style>