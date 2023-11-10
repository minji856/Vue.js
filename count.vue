<template>
    <div id="app">
        <p> {{count}} </p>
        <input type="button" @click="countUp" value="1씩 증가"/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                count : 1
            }
        },
        methods : {
            countUp(){
                this.count += 1;
            }
        }
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