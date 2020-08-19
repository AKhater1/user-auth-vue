<template>
    <div class="header">
        <div class="row">
            <div class="col-12 col-sm-6 title">
                <h1>Lenovo Channel<br> Drive</h1>
            </div>
            <div class="col-12 col-sm-6 text-right right-img">
                <h3 class="d-inline-block">
                    Smarter<br>
                     technology<br>
                     for all
                </h3>
                <img src="../assets/lenovo.png" class="d-inline-block"/>
            </div>
            <div class="col-sm-8 col-12">
                <p class="lead header-p">
                    The #smarter you are by choosing &amp; recommending the world’s
                    #1 PC Brand, the more there is in it for you!
                    Join our new Lenovo THINK SMARTER loyalty program to enjoy
                    incentives and benefits as Lenovo Channel Partners
                </p>
            </div>
            <form v-if='!auth' @submit.prevent="onSubmit" method="post" action="https://think-smarter.lenovomeaevents.com/auth/login" class="col-sm-3 col-12 text-center">
                <h2>Login Account</h2>
                <input type="email" name="email" v-model="email" placeholder="Email Address" />
                <input type="password" name="password" v-model="password" placeholder="Password" />
                <button type="submit" class="btn btn-danger">Login Account</button>
                <router-link to="/register-form">Create new account</router-link> 
            </form>
            <div v-if="auth" class="col-sm-3 col-12 text-center justify-content-end welcome-user">
                <h3>Welcome {{user}} </h3>
            </div>
            <div class="col-12">
                <img src="../assets/windowslogo.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    computed: {
      auth () {
        return this.$store.getters.ifAuthenticated
      }
    },
    data () {
        return {
            user: this.$store.getters.user.name
        }
    }
}
</script>

<style>

.header {
    background-color: #000;
    padding: 30px 0 30px 30px;
}

.header .title::after {
    content: '';
    position: absolute;
    width: 250px;
    height: 3px;
    background-color: #fb5f00;
}

.header h1 {
    color: #fff;
}

.header .right-img h3 {
    padding-right: 30px;
    color: #fff;
}

.header .right-img img {
    width: 50px;
    margin-bottom: 40px;
}

.header-p {
    color: #fff;
    font-size: 24px !important;
    font-weight: 500 !important;
}

form {
        width: 330px !important;
        padding: 30px 50px;
        background-color: #393a3a;
        margin: 120px auto 0;
    }

    form h2 {
        margin: 20px 0 40px;
        color: #fff;
    }

    input {
        width: 78%;
        display: block;
        margin: 10px auto 30px !important;
        padding: 5px;
        border: unset;
        border-radius: 4px;
    }

    button {
        width: 78%;
    }

    .btn-danger {
        background-color: #fb5f00 !important;
        border-color: #fb5f00 !important;
    }

    a {
        display: block;
        margin-top: 35px;
        color: #fff !important;
    }

    .welcome-user {
        margin-top: 100px;
        padding: 30px;
        background-color: #393a3a;
        color: #fff;
    }

</style>