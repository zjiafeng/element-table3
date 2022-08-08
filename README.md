<p align="center">
    element-form2
</p>
<p align="center">
  <a href="https://github.com/vuejs/core/">
    <img src="https://img.shields.io/badge/vue3-3.2.31-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://github.com/element-plus/element-plus/">
    <img src="https://img.shields.io/badge/element--plus-2.2.0-brightgreen.svg" alt="element-plus">
  </a>
</p>

## 简介

使用 [vue3](https://github.com/vuejs/core) 和 [element-plus](https://github.com/element-plus/element-plus/) 实现
可通过配置json文件生成table表格

## 功能

```
1.根据配置文件动态生成表格和分页
2.通过配置显示序号和复选框
3.支持自定义插槽对表格文本进行操作
4.分页处理、多行操作
5.表格行合并等
```
## 接口
### 表格参数

| 参数             | 说明                         | 类型         | 可选值 | 默认值 |
| ---------------- | ---------------------------- | ------------ | ------ | ------ |
| tableData        | 表格数据                     | Array\<item> |        |        |
| tableConfig      | 表格配置项                   | Object       |        |        |
| handleRowClick   | 当某一行发生变化的时候会触发 | Function()   |        |        |
| handleRowDbClick | 当某一行被双击时会触发该事件 | Function()   |        |        |
| total            | 总条目数                     | Number       |        |        |
| current          | 当前页数                     | Number       |        |        |
| pageSize         | 每页显示条目个数             | Number       |        |        |

### 表格事件

| 事件名称    | 说明         | 参数               |
| ----------- | ------------ | ------------------ |
| tableChange | 翻页时候触发 | 当前页，当前页条数 |



##### tableConfig参数

| 参数                         | 说明                                | 类型                                    | 可选值                                                       | 默认值 |
| :--------------------------- | :---------------------------------- | --------------------------------------- | ------------------------------------------------------------ | ------ |
| parameter                    | 配置相关                            | Object                                  |                                                              |        |
| parameter.selection          | 是否显示复选框                      | Boolean                                 | true/false                                                   | false  |
| parameter.index              | 是否显示序号                        | Boolean                                 | true/false                                                   | false  |
| parameter.pagination         | 是否显示分页                        | Boolean                                 | true/false                                                   | false  |
| parameter.defaultSort        | 默认排序规则                        | Object                                  | { prop: '', order: 'descending' }                            |        |
| parameter.extendTable        | 表格配置扩展项，同el-table          | Object                                  | {'header-cell-style': { background: '#18A058', color: 'rgba(0, 0, 0, 0.85)', padding: '8px 0px' },...} |        |
| parameter.extendPagination   | 分页配置扩展项，同el-pagination     | Object                                  | {'paginationAlign': 'center','page-sizes': [10, 20],...}     |        |
| columns                      | 表格列                              | Array\<item>                            |                                                              |        |
| columns[0].prop              | 同接口字段                          | String                                  |                                                              |        |
| columns[0].label             | 表头展示文字                        | String                                  |                                                              |        |
| columns[0].width             | 列的宽度                            | Number                                  |                                                              |        |
| columns[0].align             | 列是否居中                          | String                                  | left/center/right                                            | left   |
| columns[0].formatterFun      | 格式化列的值                        | function(row, column, cellValue, index) |                                                              |        |
| columns[0].sortable          | 支持全局排序，填入custom即可        | String                                  | custom                                                       |        |
| columns[0].slotName          | 具名插槽名称                        | String                                  |                                                              |        |
| columns[0].component         | 引入的外部组件                      |                                         |                                                              |        |
| columns[0].extendTableColumn | 表格列配置扩展项，同el-table-column | Object                                  | {'class-name': 'amount-2',...}                               |        |

