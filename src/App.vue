<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, reactive, onMounted, computed, watch, nextTick } from "vue";
import { tableConfig, tableData } from "./index";
import { arrRemove } from "./index";

const table = ref<any>();

interface state {
  tableData: any;
  tableConfig: object;
  form: { page: number; size: number };
  total: number;
}

const state = reactive<state>({
  tableData: [],
  tableConfig: tableConfig,
  form: { page: 1, size: 10 },
  total: 0,
});

const tableChange = (
  params = { page: state.form.page, size: state.form.size }
) => {
  setTimeout(() => {
    state.form = params;
    state.tableData = tableData;
  }, 200);
};

onMounted(() => {
  table.value?.setLoading(true);
  tableChange();
});
const handleRowDbClick = (row: any, column: any, event: any) => {
  console.log(row, column, event);
};

const handleLink = (url: string) => {
  window.open(url, "_blank");
};

const handleDelete = (row: any) => {
  const index = tableData.findIndex((item) => item.id === row.id);
  state.tableData.splice(index, 1);
};

const handleBatchRemove = (list: any[]) => {
  arrRemove(list, state.tableData);
};

// 表格操作事件
const activeRow: any = ref(null)
const tActionClick = async (row: any, flag: string) => {
  let copyRow = JSON.parse(JSON.stringify(row))
  activeRow.value = copyRow
  console.log(copyRow, flag);
  if (flag === 'edit') {

  } else if (flag === 'delete') {

  }
};

</script>

<template>
  <element-table3 ref="table" :tableConfig="tableConfig" :tableData="state.tableData" :current="state.form.page"
    :pageSize="state.form.size" :handleRowDbClick="handleRowDbClick" @tableChange="tableChange">
    <template v-slot:tableButtons="{ scope, multipleSelection }">
      <el-button @click="handleBatchRemove(multipleSelection)">批量删除</el-button>
    </template>
    <template v-slot:amount2="{ scope }">
      <el-tag>{{ scope.row.amount2 }}</el-tag>
    </template>
    <template v-slot:amount3="{ scope }">
      <el-link type="primary" @click="handleLink(scope.row.amount3)">{{
        scope.row.amount3
      }}</el-link>
    </template>
    <template v-for="(column, index) in tableConfig.columns.filter((item) => {
      return (item.slotName && item.component) || false;
    })" v-slot:[`${column?.slotName}`]="{ scope }">
      <component :key="index" :is="column.component" :handleDelete="handleDelete" :buttonName="column.label"
        :scope="scope" @tActionClick="tActionClick"></component>
    </template>
  </element-table3>
</template>
