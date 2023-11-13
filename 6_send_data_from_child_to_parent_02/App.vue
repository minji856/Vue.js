<template>
    <!-- 실제 click 이벤트가 아니다 -->
    <my-btn @click="log" @changeMsg="logMsg">
        MyButton
    </my-btn>
</template>

<script>
  import MyBtn from "./components/MyBtn"

  export default {
    components : {
      MyBtn
    },
    methods : {
      log(ev){
        console.log('Click!');
        console.log(ev);
      },
      logMsg(msg){
        console.log(msg)
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
