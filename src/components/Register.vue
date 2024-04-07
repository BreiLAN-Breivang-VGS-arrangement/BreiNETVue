<template>

    <form @submit.prevent="sendTournament()" >
        <label for="username">

        </label>
        <input type="text" v-model="username">
        
        <label for="password">

        </label>
        <input type="text" v-model="password">
        
        <label for="secret_key">

        </label>
        <input type="text" v-model="secret_key">
    </form>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            secret_key: '',
        };
    },

    methods: {
        async sendTournament(){
            if(this.first_name == '' || this.last_name == '' || this.email == ''){
                try{ 
                    await axios.post('http://127.0.0.1:5000/create_contact', {
                        username: this.username,
                        password: this.password,
                        secret_key: this.secret_key,
                    });
                    location.reload();
                } catch(error) {
                    alert('Something went wrong in sending the contact')
                    console.log(error)
                };
            } else {
                alert("please write firstname, lastname, and email!")
            }
        }
    }
};

</script>

<style scoped>

</style>