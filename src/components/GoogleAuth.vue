<template>
    <section class="alert alert-primary">
        <h1>{{ data.title }}</h1>
        <p>{{ data.message }}</p>
    </section>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase'

const provider = new GoogleAuthProvider();

export default {
    setup() {
        const data = reactive({
            title: 'Google Auth',
            message: 'This is Firebase sample.',
        })
        
        const authNow = () => {
            signInWithPopup(auth, provider).then((result) => {
                data.message = result.user.displayName + ', ' + result.user.email
            })
        }

        onMounted(() => {
            authNow()
        })

        return {
            data,
            authNow
        }
    }
}
</script>