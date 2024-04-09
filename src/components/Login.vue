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

</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },

    methods: {
        async login(){
            if(this.username != '' && this.password != ''){
                try{ 
                    await axios.post('http://127.0.0.1:5000/login', {
                        username: this.username,
                        password: this.password,
                    });
                    location.reload();
                } catch(error) {
                    alert('Vi kunne ikke logge deg inn, sikker på at det er rett brukernavn og passord?')
                    console.log(error)
                };
            } else {
                alert("Husk både passord OG brukernavn!")
            }
        }
    }
};

</script>

<style scoped>

</style>