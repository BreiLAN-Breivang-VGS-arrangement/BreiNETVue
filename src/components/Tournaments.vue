<template>
 <section>
    <nav>
        <h3>Turneringer</h3>
        <select name="filter" id="tournament-filter">
            <option value="Finished">Ferdig</option>
            <option value="Upcoming">Kommende</option>
            <option value="All">Alle</option>
        </select>
    </nav>
    <article class="" v-for="tournament in tournaments" :key="tournament.id">
        <h1>{{ tournament.name }}</h1>
        <p>0{{ tournament.date }}, {{ tournament.time }}</p>
        <p>{{ tournament.host }}</p>
    </article>
 </section>
</template>

<script>
import axios from 'axios';



export default {
    data() {
        return {
            tournaments: [],
            name: '',
            time: '',
            date: '',
            host: '',
            link: '',
            id: '',
            logged_in: false
        };
    },

    mounted() {
        fetch('http://127.0.0.1:5001/fetchtourney')
            .then(res => res.json())
            .then(data => this.tournaments = data.tournaments)
            .catch(err => console.log(err.message))
        axios.get('http://127.0.0.1:5000/send_auth')
            .then(data => this.logged_in = data.logged_in)
            .catch(err => console.log(err.message))
    },

    methods : {
        
    }
}
</script>

<style scoped>

</style>
