<template>
    <div class="">
        <nav class="navbar navbar-expand navbar-dark ">
        <a href="/" class="navbar-brand">ADMIN - Travel</a>
        <div class=" mr-auto navbar-nav">

            <li>
                <router-link :to="{name: 'list-town'}" class="nav-link">
                    <b>TỈNH/ THÀNH</b>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'list-user'}" class="nav-link">
                    <b>NGƯỜI DÙNG</b>
                </router-link>
            </li>
        </div>
    </nav>
    </div>
</template>
<style>
.navbar{
    background-color: rgb(51, 180, 141);
    color: #fff;
}
.container{
    
    background-color: whitesmoke;
}
</style>