<template>
  <div>
    <!-- 반복되서 출력하게끔 -->
    <header-component title="리스트 페이지"></header-component>
    <div>
      리스트 컨텐츠
      <ul>
        <li v-for="(memo, index) in list" :key="index">{{index}}. {{memo}}</li>
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
      }
    }
  }
</script>

<style></style>