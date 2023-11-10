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
    <footer-component></footer-component>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
          type: Array,
          // default : [] 에러
          default: ()=>[]
      },
      setReadMemo : {
          type:Function
      }
  }
}
</script>

<style>
</style>