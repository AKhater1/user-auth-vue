<template>
    <div class="footer text-center">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'youtube']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <font-awesome-icon :icon="['fab', 'linkedin']" />
    </div>
</template>


<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer{
    padding: 20px;
}

.footer .svg-inline--fa {
    color: #a5a5a5;
    margin: 0 10px;
    font-size: 20px;
    cursor: pointer;
}
</style>