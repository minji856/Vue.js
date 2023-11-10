<template>
    <div>
        <h1>컴퍼넌트를 이용한 메모장</h1>
    </div>
    <div id="app">
            <!-- 읽기 페이지에서 다시 List 페이지로 -->
        <list-page :list="list" :setReadMemo="setReadMemo" v-if="mode == MODE.LIST"></list-page>
        <read-page :current-memo="selectedMemo" :setMode="setMode" v-if="mode == MODE.READ"></read-page>
    </div>
</template>

<script>
    import ListPage from "./pages/ListPage"
    import ReadPage from "./pages/ReadPage"
    import {MODE} from "./common"

    export default {
        components: {
            ListPage,
            ReadPage
        },
        data(){
            return { 
                list : ["memo1", "memo2", "memo3"],
                selectedMemo : "",
                mode : MODE.LIST
            }
        },
        methods : {
            setReadMemo(index){
                this.selectedMemo = this.list[index];
                console.log(this.selectedMemo, index);
                this.mode = MODE.READ
            },
            // ReadPage에서부터 MODE값 전달받는 함수
            setMode(mode){
                this.mode = mode;
            }
        },
        computed : {
            MODE(){
                return MODE;
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