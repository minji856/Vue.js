<template>
  <div>
    <!-- 누르면 글보기 -->
    <header-component title="리스트 페이지"></header-component>
    <div>
        리스트 컨텐츠
        <ul>
            <li v-for="(memo, index) in list" :key="index" @click="setReadMemo(index)">{{index}}. {{memo}}</li>
        </ul>
    </div>
    <div>
        <button @click="setMode(MODE.WRITE)">메모 추가</button>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
    import {MODE} from "../common"

    export default {
      props: {
        list: {
            type: Array,
            // default : [] 에러
            default: ()=>[]
        },
        setReadMemo : {
            type:Function
        },
        setMode : {
            type : Function,
            default : () => {
                console.log("이 함수는 재설정을 해야합니다.")
              }
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
</style>