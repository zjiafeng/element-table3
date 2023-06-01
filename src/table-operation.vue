<script setup lang="ts">
import { getCurrentInstance } from 'vue'
const props = defineProps(['scope'])
const emits = defineEmits(['tActionClick'])

const handleEdit = () => {
    emits('tActionClick', props.scope.row, 'edit')
}

const handleDel = () => {
    emits('tActionClick', props.scope.row, 'delete')
}
</script>

<template>
    <div>
        <el-button size="small" @click="handleEdit">编辑</el-button>

        <el-button size="small" @click="handleDel">删除</el-button>
    </div>
</template>