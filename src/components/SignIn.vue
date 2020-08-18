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
            <form method="post" action="https://think-smarter.lenovomeaevents.com/auth/login" class="text-center">
                <h2>Login Account</h2>
                <input type="email" name="email" placeholder="Email Address" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit" class="btn btn-danger w-100">Login Account</button>
                <router-link to="">Create new account</router-link> 
            </form>    
            <div class="col-12">
                <img src="../assets/windowslogo.png" />
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "SignIn",
}
</script>

<style scoped>

    form {
        width: 330px !important;
        padding: 30px 50px;
        background-color: #393a3a;
        margin: auto;
    }

    form h2 {
        margin: 20px 0 40px;
        color: #fff;
    }

    input {
        width: 100%;
        display: block;
        margin: 10px auto 30px;
        padding: 5px;
        border: unset;
        border-radius: 4px;
    }

    .btn-danger {
        background-color: #fb5f00;
        border-color: #fb5f00;
    }

    a {
        display: block;
        margin-top: 35px;
        color: #fff;
    }

</style>
