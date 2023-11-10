<template>
    <div>
      <header-component title="글쓰기 페이지"></header-component>
      <div>
            <textarea v-model="memo"></textarea>
            <div>
                <button @click="setMode(MODE.LIST)">취소</button>
                <button @click="onAddMemo">저장</button>
            </div>
      </div>
      <footer-component></footer-component>
    </div>
  </template>
  
  <script>
    import {MODE} from "../common"

    export default {
        // textarea의 값
        data(){
            return { memo : "" }
        },
        props : {
            setMode : {
                type : Function,
                default : () => {
                    console.log("이 함수는 재설정을 해야합니다.")
                }
            },
            addMemo : {
                type: Function
            }
        },
        methods : {
            onAddMemo(){
                this.addMemo(this.memo)
                this.setMode(MODE.LIST)
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