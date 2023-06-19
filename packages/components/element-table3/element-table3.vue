<script setup lang="ts" name="elementTable3">
/**
 * tableConfig 表格配置信息
 * tableConfig.pagination 基本参数
 * tableConfig.pagination.pagination 是否显示分页
 * tableConfig.pagination.selection 表格左侧复选框
 * columns 表示报表列信息
 *  prop 列id,对应接口返回字段名称
 *  label 列展示名称
 *  slotName 展示自定义slot
 *  sortable 支持全局排序，填入custom即可
 *  showOverflowTooltip 当内容过长被隐藏时显示 tooltip
 */
import { ref, reactive, computed, watch, watchEffect } from "vue";
import type { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import { sortMax } from "../../utils/index";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
const emits = defineEmits(["tableChange", "tActionClick"]);

const mainTable = ref<any>(null);
const locale = ref<any>(zhCn);
const props = defineProps({
  tableData: {
    type: Array,
  },
  tableConfig: {
    type: Object,
  },
  handleRowClick: {
    type: Function,
  },
  handleRowDbClick: {
    type: Function,
  },
  total: {
    type: Number,
  },
  current: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
});

interface state {
  multipleSelection: Array<any>;
  currentRow: object;
  sortColumn: any;
  spanArr: Array<any>;
  pos: number;
  loading: boolean;
}

const state = reactive<state>({
  multipleSelection: [], // 复选框选中值
  currentRow: {}, // 选中行
  sortColumn: {}, // 排序
  spanArr: [], // 一个空的数组，用于存放每一行记录的合并数
  pos: 0, // spanArr 的索引
  loading: true,
});
const defaultTableConfig = {
  elTableHeaderStyle: {
    background: "#E5F4FF",
    color: "rgba(0, 0, 0, 0.85)",
    padding: "8px 0px",
  }, //el-table表头颜色配置
  paginationAlign: "right", //翻页居右
  pageSizes: [10, 20, 50, 100],
};

// 表格数据
const currentTableData = computed(() => {
  let tableData = props.tableData;
  if (!Array.isArray(tableData)) {
    return;
  }
  state.loading = false;
  tableData = sortMax(
    tableData,
    props.tableConfig?.parameter?.defaultSort?.prop
  ).reverse();
  if (state.sortColumn?.order === "ascending") {
    tableData = sortMax(tableData, state.sortColumn?.prop);
  } else if (state.sortColumn.order === "descending") {
    tableData = sortMax(tableData, state.sortColumn.prop).reverse();
  }

  if (tableData.length <= props.pageSize) {
    return tableData;
  }
  if (tableData.length <= props.current * props.pageSize) {
    return tableData.slice((props.current - 1) * props.pageSize);
  } else {
    return tableData.slice(
      (props.current - 1) * props.pageSize,
      props.current * props.pageSize
    );
  }
});

// 格式表格数据
const currentColumns = computed(() => {
  if (!Array.isArray(props.tableConfig?.columns)) {
    return;
  }
  return props.tableConfig?.columns?.map((item) => {
    if (item.formatterName) {
      // item.formatterFun = this.$parent[item.formatterName]
    }
    return item;
  });
});

const totalAll = computed(() => {
  let num = Array.isArray(props.tableData) ? props.tableData.length : 0;
  return num;
});

const getSlotName = (slotName: string) => {
  return slotName ? "default" : "other";
};
const handlerChange = (value: number) => {
  state.loading = true;
  emits("tableChange", { page: value, size: props.pageSize });
};
const handleSizeChange = (value: number) => {
  state.loading = true;
  emits("tableChange", { page: 1, size: value });
};

const sortChange = (column: any) => {
  state.sortColumn = column;
};

const rowClick = (row: object, column: any, event: any) => {
  state.currentRow = row;
  if (props.handleRowClick !== undefined) {
    props.handleRowClick(row, column, event);
  }
};

const rowDblClick = (row: object, column: any, event: any) => {
  state.currentRow = row;
  if (props.handleRowDbClick !== undefined) {
    props.handleRowDbClick(row, column, event);
  }
};

const handleSelectionChange = (val: any) => {
  state.multipleSelection = val;
};

// 合并单元格
const spanMethod = () => {
  if (!Array.isArray(props.tableData)) return;
  let mergeColumnName =
    props.tableConfig?.parameter &&
    props.tableConfig.parameter?.mergeColumnName;
  if (mergeColumnName) {
    let data: any = props.tableData;
    state.spanArr = [];
    state.pos = 0;
    for (var i = 0; i < props.tableData.length; i++) {
      if (i === 0) {
        // 如果是第一条记录（即索引是0的时候），向数组中加入１
        state.spanArr.push(1);
        state.pos = 0;
      } else {
        if (data[i][mergeColumnName] === data[i - 1][mergeColumnName]) {
          // 如果beneficiary相等就累加，并且push 0
          state.spanArr[state.pos] += 1;
          state.spanArr.push(0);
        } else {
          // 不相等push 1
          state.spanArr.push(1);
          state.pos = i;
        }
      }
    }
  }
};

//TODO watch或者watchEffect
watch(
  [() => props.tableData],
  () => {
    spanMethod();
  },
  { deep: true, immediate: true }
);
// watchEffect(() => { spanMethod() })

interface SpanMethodProps {
  row: any;
  column: TableColumnCtx<any>;
  rowIndex: number;
  columnIndex: number;
}

const arraySpanMethod = ({
  row,
  column,
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  let mergeColumnName =
    props.tableConfig?.parameter &&
    props.tableConfig.parameter?.mergeColumnName;
  if (mergeColumnName && state.spanArr.length) {
    // columnIndex === xx 找到第xx列，实现合并随机出现的行数
    let mergeColumnNum = props.tableConfig?.parameter?.mergeColumnNum || 1;
    if (columnIndex < mergeColumnNum) {
      const _row = state.spanArr[rowIndex];
      const _col = _row > 0 ? 1 : 0;
      return {
        rowspan: _row,
        colspan: _col,
      };
    } else {
      return [1, 1];
    }
  } else {
    return [1, 1];
  }
};

const handleActionClick = (row: any, flag: string) => {
  emits('tActionClick', row, flag)
}

defineExpose({
  setLoading: (flag: boolean) => (state.loading = flag),
});
</script>

<template>
  <el-config-provider :locale="locale">
    <slot name="tableButtons" v-bind:mainTable="$refs.mainTable" v-bind:multipleSelection="state.multipleSelection">
    </slot>
    <el-table ref="mainTable" class="base-table" :span-method="arraySpanMethod" :data="currentTableData"
      tooltip-effect="light" :header-cell-style="defaultTableConfig.elTableHeaderStyle" @sort-change="sortChange"
      @selection-change="handleSelectionChange" @row-dblclick="rowDblClick" @current-change="rowClick" border
      v-loading="state.loading" v-bind="tableConfig?.parameter && tableConfig.parameter?.extendTable" stripe>
      <el-table-column v-if="tableConfig?.parameter && tableConfig.parameter?.selection" type="selection"
        width="55"></el-table-column>
      <el-table-column v-if="tableConfig?.parameter && tableConfig.parameter?.index" label="序号" type="index" width="55">
        <template #default="scope">
          <span>{{ scope.$index + 1 + (current - 1) * pageSize }}</span>
        </template>
      </el-table-column>
      <el-table-column v-for="(column, index) in currentColumns" :key="index" :prop="column.prop" :label="column.label"
        :sortable="column.sortable" :width="column.width" :formatter="column.formatterFun"
        :show-overflow-tooltip="!!column.showOverflowTooltip" :align="column.align" :fixed="column.fixed"
        v-bind="column?.extendTableColumn">
        <template v-if="column.component" #default="scope">
          <component :is="column.component" :scope="scope" @tActionClick="handleActionClick"></component>
        </template>
        <template v-else v-slot:[getSlotName(column.slotName)]="scope">
          <slot :name="column.slotName" v-bind:scope="scope"></slot>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="tableConfig?.parameter &&
      tableConfig.parameter?.pagination &&
      totalAll
      " :style="`justify-content:${tableConfig.parameter?.extendPagination?.paginationAlign ||
    defaultTableConfig.paginationAlign
    }`" :page-size="pageSize" :current-page="current" :page-sizes="defaultTableConfig.pageSizes"
      layout="total, sizes, prev, pager, next, jumper" :total="total || totalAll" @current-change="handlerChange"
      @size-change="handleSizeChange" background v-bind="tableConfig?.parameter && tableConfig.parameter?.extendPagination
        "></el-pagination>
  </el-config-provider>
</template>

<style scoped>
.el-pagination {
  margin-top: 10px;
  display: flex;
}
</style>
