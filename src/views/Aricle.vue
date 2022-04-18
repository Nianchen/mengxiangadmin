<template>
<div> <a-button type="primary">新建</a-button>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #bodyCell="{ column, text, record }">
      <template v-if="['title','author'].includes(column.dataIndex)">
        <div>
          <a-input
            v-if="editableData[record.key]"
            v-model:value="editableData[record.key][column.dataIndex]"
            style="margin: -5px 0"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <div class="editable-row-operations">
          <span v-if="editableData[record.key]">
            <a-typography-link @click="save(record.key)">保存</a-typography-link>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel(record.key)">
              <a>取消</a>
            </a-popconfirm>
          </span>
          <span v-else>
          <a @click="edit(record.key)">修改</a>
            <a @click="del(record.key)">删除</a>
          </span>
        </div>
      </template>
    </template>
  </a-table>

</div>
   
</template>
<script>
import { cloneDeep } from 'lodash-es';
import { defineComponent, reactive } from 'vue';
const columns = [{
  title: '标题',
  dataIndex: 'title',
  width: '40%',
}, {
  title: '作者',
  dataIndex: 'author',
  width: '35%',
}, {
  title: '操作',
  dataIndex: 'operation',
}
];

import {getWen} from '../network/api'
export default defineComponent({

  setup() {

    const dataSource = reactive([]);
    const editableData = reactive({});
     getWen().then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        dataSource.push({
          key: res.data[i].id,
          title: res.data[i].title,
          author: res.data[i].author,
        });
      }
    });
    const edit = key => {
      editableData[key] = cloneDeep(dataSource.filter(item => key === item.key)[0]);
    };
     const del = (key) => {
      console.log(key);
    };
    const save = key => {
      Object.assign(dataSource.filter(item => key === item.key)[0], editableData[key]);
      delete editableData[key];
    };

    const cancel = key => {
      delete editableData[key];
    };

    return {
      dataSource,
      columns,
      editingKey: '',
      editableData,
      edit,
      save,
      cancel,
      del
    };
  },

});
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>