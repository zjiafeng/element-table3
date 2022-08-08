<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const props = defineProps(['scope', 'handleDelete'])
const parent = getCurrentInstance()?.parent;

const handleEdit = () => {
    console.log(props.scope.row);
}

const handleDel = () => {
    props.handleDelete(props.scope.row)
}
</script>

<template>
    <div>
        <el-button size="small" @click="handleEdit">编辑</el-button>

        <el-button size="small" @click="handleDel">删除</el-button>
    </div>
</template>