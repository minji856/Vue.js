<template>
    <div>
        <div class="header"><h3>{{title}}</h3></div>
    </div>
</template>

<script>
export default {
    props : {
        title : {
            type : String,
            // 혹시나 데이터가 안넘어오더라도  default값으로
            default : ""
        }
    }
}
</script>

<style>
    .header{
            height: 40px;
            background-color:#00ee00;
        }
</style>