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
            <form @submit.prevent="onSubmit" method="post" action="https://think-smarter.lenovomeaevents.com/auth/register">
                <h2 class="text-center">Registration</h2>
                <input type="text" name="fullname" v-model="fullname" placeholder="Full Name"  />
                <input type="text" name="company" v-model="company" placeholder="Company" />
                <input type="text" name="title" v-model="title" placeholder="Title" />
                <input type="number" name="mobile" v-model="mobile" placeholder="Mobile Number" />
                <input type="email" name="email" v-model="email" placeholder="Corporate Email" />
                <input type="password" name="password" v-model="password" placeholder="Password" />
                <input type="text" name="city" v-model="city" placeholder="City" />
                <div class="text-center">
                    <button type="submit" class="btn btn-danger w-50">Register</button>
                </div>
            </form>    
            <div class="col-12">
                <img src="../assets/windowslogo.png" />
            </div>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "RegisterForm",
}
</script>

<style scoped>

    form {
        width: 530px !important;
        padding: 30px 50px 60px;
        margin: auto;
        background-color: #393a3a;
        border-bottom: 7px solid #fb5f00;
    }

    form h2 {
        margin: 20px 0 40px;
        color: #fff;
    }

    input {
        width: 45%;
        display: inline-block;
        margin: 10px 10px 30px !important;
        padding: 5px;
        border: unset;
        border-radius: 4px;
    }

    .btn-danger {
        background-color: #fb5f00;
        border-color: #fb5f00;
        margin: auto;
    }



</style>
