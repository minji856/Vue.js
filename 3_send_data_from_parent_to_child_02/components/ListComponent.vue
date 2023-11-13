<template>
    <div class="parent">
        <div>
            <ul>
                <li v-for="(memo, index) in list" 
                :key="index" 
                @click="setSelectedMemo(index)"
                :class="{selected:index == selectedIndex}">{{ memo }}</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "parent",
    data() { 
        return { 
            selected : false
        } 
    },
    props : {
        list : {
            type:Array,
            default : []
        },
        selectedIndex : {
            type: Number,
            default : 0
        },
        setSelectedMemo : {
            type: Function,
            default : []
            // default : ()=>[]
        }
    }
    ,
    methods : {
    }
}
</script>

<style scoped>
    .parent {
        border: 1px solid #000000;
        margin: 10px;
    }
    .selected {
        color: red;
    }
</style>