<template>

    <form @submit.prevent="registerAccount()" >
        <label for="username">
            Brukernavn
        </label>
        <input type="text" v-model="username" class="text-black">
        
        <label for="password">
            Passord
        </label>
        <input type="text" v-model="password" class="text-black">
        
        <label for="secret_key">
            Hemmelig nøkkel
        </label>
        <input type="text" v-model="secret_key" class="text-black">
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
            secret_key: '',
        };
    },

    methods: {
        async registerAccount(){
            if(this.first_name == '' || this.last_name == '' || this.email == ''){
                try{ 
                    await axios.post('http://127.0.0.1:5000/register', {
                        username: this.username,
                        password: this.password,
                        secret_key: this.secret_key,
                    });
                    location.reload();
                } catch(error) {
                    alert('Noe gikk galt under opprettingen av brukeren, brukte du rett hemmelig nøkkel?')
                    console.log(error)
                };
            } else {
                alert("Du er nødt til å fylle alle tre feltene for å kunne opprette bruker!")
            }
        }
    }
};

</script>

<style scoped>

</style>