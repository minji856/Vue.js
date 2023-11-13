<template>
    <!-- memo를 누르면 아래에 보여지는 -->
    <h1>메모 추가</h1>
    <p><button @click="addMemo">메모 추가</button></p>
      <!-- 하나는 함수, 하나는 변수 -->
    <list-component :list="list" 
      :setSelectedMemo="setSelectedMemo"
      :selectedIndex="selectedIndex"></list-component>
    <view-component :memo="selectedMemo"></view-component>
</template>

<script>
  import ListComponent from './components/ListComponent'
  import ViewComponent from './components/ViewComponent'

  export default {
    name: 'App',
    components: {
        ListComponent, ViewComponent},
    data(){
        return {
          list : ["memo1", "memo2"],
          selectedMemo : "",
          selectedIndex : 0
        }
    },
    methods : {
      addMemo(){
        this.list.push("memo" + (this.list.length + 1))
      },
      setSelectedMemo(index){
        this.selectedIndex = index;
        // 이 변수를 view 에게 전달하면 된다
        this.selectedMemo = this.list[index];
        console.log("setSelectedMemo():" + index);
      }
    },
    // 선택된 메모에 기본값으로 띄워주게 하는 역할
    created(){
        this.setSelectedMemo(0)
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
