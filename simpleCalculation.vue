<template>
    <div id="app">
        <h2>간단한 계산기</h2>
        <div><input type="text" v-model.number="num1">&nbsp;
            <input type="text" v-model.number="num2"></div>
    </div>
    <br>
    <div>
        <button @click="plus">덧샘계산</button>&nbsp;
        <button @click="minus">뺄샘계산</button>&nbsp;
        <button @click="multiply">곱샘계산</button>&nbsp;
        <button @click="division">나눗샘계산</button>
    </div>
    <div>결과는 {{result}} 입니다.</div>
</template>

<script>
    export default {
        data(){
            return { 
                num1 : "", num2 : "", result : null
            }
        },
        methods : {
            plus(){
                this.result = this.num1 + this.num2
            },
            minus(){
                this.result = this.num1 - this.num2
            },
            multiply(){
                this.result = this.num1 * this.num2
            },
            division(){
                if (this.num2 !== 0) {
                    this.result = this.num1 / this.num2;
                } else {
                    this.result = "나눗셈은 0으로 나눌 수 없습니다.";
                }
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
    button {
        background-color: dodgerblue;
        color: white;
        border-radius: 5px;
    }
</style>