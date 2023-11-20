<template>
<div class="alert alert-warning">
    <h2>{{ title }}</h2>
    <p >{{ message }}</p>
  </div>
</template>

<script>
export default {
    name: 'Validation',
    props: {
        title: String,
        num: {
            type: Number,
            default: 100,
            validator: (value) => {
                return value == parseInt(value) && value >= 0 && value <= 100
            }
        }
    },
    data() {
        return {
            message: 'バリデーションチェック',
        }
    }
}
</script>