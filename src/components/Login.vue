<template>

    <form @submit.prevent="login()" >
        <label for="username">
            Brukernavn
        </label>
        <input type="text" v-model="username" class="text-black">
        
        <label for="password">
            Passord
        </label>
        <input type="text" v-model="password" class="text-black">

        <button type="submit">
            submit
        </button>
    </form>

    <button type="button" @click="currentUser()">currentUser</button>
    <p > {{ user }} </p>

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            user: ''
        };
    },

    methods: {
        async login(){
            if(this.username != '' && this.password != ''){
                try{ 
                    await axios.post('http://127.0.0.1:5000/login', 
                        // Form data
                        `username=${encodeURIComponent(this.username)}&password=${encodeURIComponent(this.password)}`, 
                        // Headers
                        {
                            headers: {
                                'Content-Type': 'application/x-www-form-urlencoded'                            }
                        });
                } catch(error) {
                    alert('Vi kunne ikke logge deg inn, sikker på at det er rett brukernavn og passord?')
                    console.log(error)
                };
            } else {
                alert("Husk både passord og brukernavn!")
            }
        },

        currentUser() {
            axios.get('http://127.0.0.1:5000/currentuser')
            .then( function(res) {
                console.log(res.data)
                this.currentUser = res.data
            })
        }
    }
};

</script>

<style scoped>

</style>