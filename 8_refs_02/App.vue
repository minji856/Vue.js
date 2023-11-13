<template>
    <h1>참조</h1>
    <div>
      <button @click="getCount1">1번째 count 값 알아내기</button>
      <button @click="getCount2">2번째 count 값 알아내기</button>
      <button @click="getInput1">input1 포커스 이동</button>
    </div>

    <div>
      <sample-component ref="sample1"></sample-component>
      <sample-component ref="sample2"></sample-component>
    </div>
    <div>
      <parent-component></parent-component>
    </div>
</template>

<script>
  import ParentComponent from "./components/ParentComponent"
  import SampleComponent from './components/SampleComponent'

  export default {
    data(){
        return { message : ""}
    },
    methods : {
      getCount1(){
        // 첫번째 샘플컴퍼넌트의 count값 출력 alert
        const countValue = this.$refs.sample1.count;
        alert('1번째 count 값 ' + countValue);
      },
      getCount2(){
        // 두번째 샘플컴퍼넌트의 count값 출력
        const countValue2 = this.$refs.sample2.count;
        alert('2번째 count 값 ' + countValue2);
      },
      getInput1(){
        // Child컴퍼넌트의 Text에 focus 주기 누르면 깜빡깜빡 거리는 focus 메서드
        // console.log(this.$refs.ChildComponent.inputfocus)
      }
    },
    name: 'App',
    components: {
      ParentComponent,
      SampleComponent
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
