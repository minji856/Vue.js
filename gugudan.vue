<template>
    <div id="app">
        <h2>숫자 배열 조작과 구구단 출력</h2>
        <ul>
            <li v-for = "(item, index) in number_list">{{item}}
                <!-- 변경은 버튼을 누르면 자동으로 현재 숫자 + 1로 변경되게 할 것. -->
            <button @click = "updateNumber(index)">변경</button>
            <button @click="removeNumber(index)">삭제</button>
            </li>
        </ul>
    </div>
        <button @click="addNumber()">추가</button>&nbsp;
        <button @click="sortNumbers()">소트</button>&nbsp;
        <button @click="showGugudan()">구구단 보이기 </button>
    <hr>
        <li v-for="(row, rowIndex) in Gugudan" :key="rowIndex">
            <p v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }} </p>
        </li>
</template>

<script>
    export default {
        data(){
            return { 
                number_list : ["2", "3", "4", "5", "6", "7", "8", "9"],
                Gugudan : []
            }
        },
        methods : {
            addNumber(){
                this.number_list.push(1);
            },
            removeNumber(index) {
                this.number_list.splice(index, 1);
            },
            updateNumber(index) {
                this.number_list.splice(index, 1,number_list[index]+1)
            },
            sortNumbers() {
                this.number_list = [...new Set(this.number_list)].sort((a, b) => a - b);
            },
            showGugudan() {
                this.Gugudan = [];
                const maxNum = Math.max(...this.number_list);
                for (let i = 1; i <= 9; i++) {
                    const row = [];
                    for (const num of this.number_list) {
                        row.push(`${num} * ${i} = ${num * i}`);
                    }
                    this.Gugudan.push(row);
                }
            },
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