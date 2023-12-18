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
import { onMounted, reactive } from 'vue'
import { onValue, ref } from 'firebase/database'
import { db } from '../firebase'

const person = ref(db, 'person/')

export default {
    setup(props) {
        const data = reactive({
            title: 'Firebase4',
            message: 'This is Firebase sample.',
            fire_data: null,
        })

        const getData = () => {
            onValue(person, (snapshot) => {
                data.fire_data = snapshot.val()
            })
        }

        onMounted(() => {
            getData()
        })

        return {
            data
        }
    }
}
</script>