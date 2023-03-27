<script setup>
import InputField from '../components/InputField.vue';
import ButtonField from '../components/ButtonField.vue';
import Footer from '../components/footer/Footer.vue';
import NavBar from '../components/navbar/NavBar.vue';
import { useRouter } from "vue-router";

const router = useRouter();
const goAbout = () => {
	window.location.href = "https://github.com/gdjohn4s";
}

</script>

<template>
    <NavBar
        logo="../src/assets/logobrut2.png"
        logoLink="localhost:5173"
        />
    <div class="container h-100 login-view-padd">
        <div class="row h-100">
            <div class="col-12 col-md-12">
                <h1 class="brutalism-head1"> Login .. </h1>
                <div class="brutalism-head2"> Welcome Back!</div>
                <InputField 
                    label="EMAIL" 
                    typeFormat="email"
                    placeholder="MARIO@ROSSI.COM"/>
                <InputField 
                    label="PASSWORD" 
                    typeFormat="password"
                    placeholder="********"/>
                <ButtonField
                    value="Login 👉🏻"
                    bg-color="cyan"
                    border-color="black"
                    :onClickFun="goAbout"/>
            </div>
        </div>
    </div>
    <Footer />
</template>

<style>
body {
    background-color: rgb(250 245 243);
}

.brutalism-head1 {
    font-weight: 900;
    font-size: 60px;
}

.brutalism-head2 {
    font-weight: 900;
    font-size: 40px;
}

.login-view-padd {
    padding-top: 14vh;
}

hr {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 1.5px;
    background-color: black;
}
</style>