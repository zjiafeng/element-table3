import tableOperation from "./table-operation.vue";

const amount1Formatter = (row: any, column: any, cellValue: any) => {
  return `${cellValue}家`
}

export const tableConfig = {
  parameter: {
    selection: true,
    index: true,
    pagination: true,
    // mergeColumnName: 'name',
    // mergeColumnNum: 2,
    defaultSort: { prop: 'amount1', order: 'descending' },
    extendTable: {
      'header-cell-style': { background: '#18A058', color: 'rgba(0, 0, 0, 0.85)', padding: '8px 0px' }
    },
    extendPagination: {
      'paginationAlign': 'center',
      'page-sizes': [10, 20]
    }
  },
  columns: [
    {
      prop: 'id',
      label: 'ID',
      width: 150,
    },
    {
      prop: 'name',
      label: 'Name',
      width: 140,
      align: 'center'
    },
    {
      prop: 'amount1',
      label: 'Amount 1',
      formatterFun: amount1Formatter,
      sortable: 'custom'
    },
    {
      prop: 'amount2',
      label: 'Amount 2',
      extendTableColumn: {
        'class-name': 'amount-2'
      },
      slotName: 'amount2',
    },
    {
      prop: 'amount3',
      label: 'Amount 3',
      slotName: 'amount3',
    },
    {
      label: '操作',
      slotName: 'tableOperation',
      component: tableOperation
    }
  ]
}

/**
 * 删除数组中的某一项
 * @param items 删除的项
 * @param arr   原数组
 * @returns {string|*}
 */
export function arrRemove(items: any[], arr: any[]): string | any {
  if (!arr || arr.length === 0) {
    return ''
  }
  if (items instanceof Array) {
    items.forEach(item => {
      const flag = arr.indexOf(item)
      if (flag > -1) {
        arr.splice(flag, 1)
      } else {
        console.log('未查找到该元素')
      }
    })
  } else {
    const flag = arr.indexOf(items)
    if (flag > -1) {
      arr.splice(flag, 1)
    } else {
      console.log('未查找到该元素')
    }
  }
  return arr
}

interface User {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number | string
}

export const tableData: User[] = [
  {
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 'https://v3.cn.vuejs.org/',
  },
  {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 'https://element-plus.gitee.io/',
  },
  {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 'https://v3.cn.vuejs.org/',
  },
  {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 'https://v3.cn.vuejs.org/',
  },
  {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 'https://element-plus.gitee.io/',
  },
  {
    id: '12987127',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 'https://element-plus.gitee.io/',
  },
  {
    id: '12987128',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 'https://element-plus.gitee.io/',
  },
  {
    id: '12987129',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 'https://element-plus.gitee.io/',
  },
  {
    id: '129871210',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 'https://element-plus.gitee.io/',
  },
  {
    id: '129871211',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 'https://v3.cn.vuejs.org/',
  },
  {
    id: '129871212',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 'https://v3.cn.vuejs.org/',
  },
  {
    id: '129871213',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 'https://v3.cn.vuejs.org/',
  },
  {
    id: '129871214',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 'https://v3.cn.vuejs.org/',
  },
  {
    id: '129871215',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 'https://v3.cn.vuejs.org/',
  },
  {
    id: '129871216',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 'https://v3.cn.vuejs.org/',
  },
]