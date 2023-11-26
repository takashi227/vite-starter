<template>
    <div class="alert alert-primary">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <button class="btn btn-primary mb-3"
            v-on:click="doAction">
            {{ btn }}
        </button>
        <transition name="transit"
            v-on:before-enter="startAction"
            v-on:before-leave="startAction"
            v-on:after-enter="endAction"
            v-on:after-leave="endAction" >
            <p v-if="flg" class="alert p-3 h5 trans">
                Transition!
            </p>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Transitions2',
    data() {
        return {
            title: 'Trans&Anim',
            message: 'This is Transition sample!',
            flg: true,
            btn: 'Hide',
        }
    },
    methods: {
        doAction() {
            this.flg = !this.flg
        },
        startAction: function() {
            if (this.flg) {
                this.message = '現れます……'
            } else {
                this.message = '消えます……'
            }
        },
        endAction: function() {
            if (this.flg) {
                this.btn = 'Hide'
                this.message = '現れました。'
            } else {
                this.btn = 'Show'
                this.message = '消えました。'
            }
        }
    }
}
</script>

<style>
.trans {
    background-color: black;
    color: white;
    padding: 10px;
    font-size: 20pt;
}

.transit-enter-active {
    transition: opacity 0.5s;
}
.transit-leave-active {
    transition: opacity 5.0s;
}
.transit-enter {
    opacity: 0;
}
.transit-enter-from {
    opacity: 0;
}
.transit-enter-to {
    opacity: 1.0;
}
.transit-leave {
    opacity: 1.0;
}
.transit-leave-to {
    opacity: 0;
}
</style>