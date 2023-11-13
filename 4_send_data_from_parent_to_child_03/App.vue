<template>
    <!-- 다양한 속성 -->
    <!--<my-btn> camel 표기법으로도 가능-->
    <!-- <MyBtn class="mycss"
      style="color: red;">
      MyButton
    </MyBtn> -->

    <MyBtn>
      <template v-slot:icon>
        <span>(A)</span>
      </template>
      <template #text>
        <span>MyButton</span>
      </template>
    </MyBtn>
</template>

<script>
  import MyBtn from "./components/MyBtn"

  export default {
    components : {
      MyBtn
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
