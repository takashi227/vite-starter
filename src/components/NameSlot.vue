<template>
    <div class="alert alert-primary">
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        <hr>
        <div class="alert alert-light">
            <h3>Inner Slot</h3>
            <div class="alert alert-warning h5">
                <slot />
            </div>
            <ul class="list-group">
                <li class="list-group-item">
                    <slot name="first" />
                </li>
                <li class="list-group-item">
                    <slot name="second" />
                </li>
                <li class="list-group-item">
                    <slot name="third" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NameSlot',
    data: function() {
        return {
            title: 'Name Slot',
            message: 'This is message.',
        }
    }
}
</script>