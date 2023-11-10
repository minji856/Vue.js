<template>
    <div>
        <h1>컴퍼넌트를 이용한 메모장</h1>
    </div>
    <div id="app">
            <!-- 최종적으로 쓰기 페이지 -->
        <!--write page 말고 list-page에 setMode 값을 넘겨줘야한다-->
        <list-page :list="list" :setReadMemo="setReadMemo" :setMode="setMode" v-if="mode == MODE.LIST"></list-page>
        <read-page :current-memo="selectedMemo" :setMode="setMode" v-if="mode == MODE.READ"></read-page>
        <!-- 다시 list로 오기위해 setMode 바인딩 -->
        <write-page :setMode="setMode" :add-memo="addMemo" v-if="mode == MODE.WRITE"></write-page>
    </div>
</template>

<script>
    import ListPage from "./pages/ListPage"
    import ReadPage from "./pages/ReadPage"
    import WritePage from "./pages/WritePage"
    import {MODE} from "./common"

    export default {
        components: {
            ListPage,
            ReadPage,
            WritePage
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
            },
            addMemo(memo){
                this.list.push(memo)
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