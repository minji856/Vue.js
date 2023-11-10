<template>
    <div id="app">
        <ul>
        <li v-for="index in 10" :key="index" >
            {{ index }} * 5 = {{ index * 5 }}
        </li>
    </ul>
    </div>
</template>

<script>
    export default {
        }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>