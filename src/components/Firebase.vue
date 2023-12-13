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
import axios from 'axios'
import { onMounted, reactive } from 'vue'

let url = "https://suzuki-takashi-vue3-default-rtdb.firebaseio.com/person.json"

export default {
    setup(props) {
        const data = reactive({
            title: 'Firebase',
            message: 'This is Firebase sample.',
            fire_data: null,
        })

        const getData = () => {
            axios.get(url).then((result) => {
                console.log(result.data)
                data.fire_data = result.data
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