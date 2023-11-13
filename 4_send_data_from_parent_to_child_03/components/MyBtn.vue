<template>
  <div class="btn">
    <!-- slot 이름을 지정해주면 원하는 곳에 넣을 수 있다 -->
    <slot name="icon"></slot>
    <slot name="text"></slot>
  </div>
    <!--
    <h1 :class="$attrs.class"
    :style="$attrs.style">test</h1> 
    -->
    <!-- <h1 v-bind="$attrs">test</h1> -->
</template>

<script>
    export default {
        // 상속자체를 막아버리는 속성
        //inheritAttrs: false,
        created (){
            console.log(this.$attrs)
        }
    }
    
</script>

<style>
    .btn {
        display: inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>