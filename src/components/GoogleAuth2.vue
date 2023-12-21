<template>
    <section class="alert alert-primary">
        <h1>{{ data.title }}</h1>
        <p>{{ data.message }}</p>
        <table class="table table-light table-striped">
            <thead class="table-dark text-center">
                <tr>
                    <th>Mail</th>
                    <th>Name</th>
                    <th>Tel</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody class="text-left">
                <tr v-for="(item, key) in data.fire_data">
                    <td>{{ key }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.tel }}</td>
                    <td>{{ item.age }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { onValue, ref } from 'firebase/database'
import { auth, db } from '../firebase'

const person = ref(db, 'person/')
const provider = new GoogleAuthProvider();

export default {
    setup() {
        const data = reactive({
            title: 'Google Auth',
            message: 'This is Firebase sample.',
            fire_data: null,
        })
        
        const authNow = () => {
            signInWithPopup(auth, provider).then((result) => {
                data.message = result.user.displayName + ', ' + result.user.email
                getData()
            })
        }

        const getData = () => {
            onValue(person, (snapshot) => {
                data.fire_data = snapshot.val()
            })
        }

        onMounted(() => {
            authNow()
        })

        return {
            data,
            authNow,
            getData
        }
    }
}
</script>