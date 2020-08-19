<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li v-if='auth' class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li v-if='!auth' class="nav-item">
                <router-link to="/sign-in" class="nav-link">Sign In</router-link>
            </li>
            <li v-if='auth' class="nav-item">
                <a @click="onLogout" class="nav-link"> Log out</a>
            </li>
            <li class="nav-item">
                <router-link to="" class="nav-link">Product Training</router-link>
            </li>
            <li class="nav-item">
                <router-link to="" class="nav-link"> How to participate</router-link>
            </li>
            <li class="nav-item">
                <router-link to="" class="nav-link"> Upcoming Events</router-link>
            </li>
            <li class="nav-item">
                <router-link to="" class="nav-link"> Contact Us</router-link>
            </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    computed: {
      auth () {
        return this.$store.getters.ifAuthenticated
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
}
</script>

<style scoped>

.bg-dark{
    background-color: #000 !important;
}

.navbar-collapse{
    flex-direction: row-reverse;
}

.navbar-light .navbar-nav .nav-link {
    color: #fff;
    background-color: #fb5f00;
    border-radius: 49px;
    margin: 10px 5px;
    padding: 8px 12px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
}
</style>