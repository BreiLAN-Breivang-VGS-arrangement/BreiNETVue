<template>
    <nav class="w-2/4 mx-auto mt-6 flex flex-row">
        <div class="w-1/2 flex flex-row">        
            <img src="../assets/images/Breilan-White-on-Black-Logo.png" alt="" class="w-1/4 rounded">
            <div class="flex flex-col items-start justify-center ml-4 w-4/6">    
                <h1 class="font-extrabold text-3xl">
                    BreiLAN
                </h1>
                <p class="font-medium ">
                    Et arrangement av ungdom, for ungdom
                </p>
            </div>
        </div>

        <div class="flex flex-row justify-between items-center w-1/2">
            <RouterLink to="/" href="#" class="" >
                Home
            </RouterLink>
            <RouterLink to="/Register" href="#" class="" >
                Register
            </RouterLink>
            <RouterLink to="/Login" href="#" class="" >
                Login
            </RouterLink>
            <RouterLink to="/Tournaments" href="#" class="">
                Tournaments
            </RouterLink>
            <RouterLink to="/Crewpanel" href="#" class="">
                Crew panel
            </RouterLink>
        </div>
    </nav>
</template>

<script>
    
</script>

<style scoped>

</style>