<template>
    <div class="alert alert-primary">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <hr>
        <div class="alert alert-right">
            <h3>Inner Slot</h3>
            <ol class="list-group text-left">
                <slot />
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlotValue',
    data() {
        return {
            title: 'Slot Value',
            message: 'This is message.',
        }
    }
}
</script>