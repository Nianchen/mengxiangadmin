<template>
  <div>
    <a-button type="primary" @click="showModal">新建</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
        账号：<a-input v-model:value="inputname" placeholder="" />
          密码：<a-input v-model:value="inputword" placeholder="" />
    </a-modal>
    <a-table :columns="columns" :data-source="dataSource" bordered>
      <template #bodyCell="{ column, text, record }">
        <template v-if="['username', 'password'].includes(column.dataIndex)">
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
              <a-typography-link @click="save(record.key)"
                >保存</a-typography-link
              >
              <a-popconfirm
                title="Sure to cancel?"
                @confirm="cancel(record.key)"
              >
                <a>取消</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a @click="edit(record.key)">修改</a>
              <!-- <a @click="del(record.key,record)">删除</a> -->
            </span>
          </div>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
import { cloneDeep } from "lodash-es";
import { reactive } from "vue";
import { getUser } from "../../../vue-axios/network/user";
import { changeUser,addUser} from "../network/api";
import { ref } from "vue";

export default {
  setup() {
     const visible = ref(false);
      const inputname = ref('');
      const inputword = ref('')
    const showModal = () => {
      visible.value = true;
    };
       const handleOk = () => {
      let newUser = {
        username : inputname.value,
        password : inputword.value,
        key:dataSource.length+1
      }
      dataSource.push(newUser)
      addUser(dataSource.length,newUser)
      inputname.value=''
      inputword.value=''
      visible.value = false;
    };

    const columns = [
      {
        title: "账号",
        dataIndex: "username",
        width: "20%",
      },
      {
        title: "密码",
        dataIndex: "password",
        width: "20%",
      },
      {
        title: "操作",
        dataIndex: "operation",
      },
    ];
    const dataSource = reactive([]);
    const editableData = reactive({});
    getUser().then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        dataSource.push({
          key: res.data[i].id,
          username: res.data[i].username,
          password: res.data[i].password,
        });
      }
    });

    const edit = (key) => {
      editableData[key] = cloneDeep(
        dataSource.filter((item) => key === item.key)[0]
      );
    };

    const save = (key) => {
      Object.assign(
        dataSource.filter((item) => key === item.key)[0],
        editableData[key]
      );  
      console.log( editableData[key]);
      let data = {
        username:editableData[key].username,
        password:editableData[key].password
      }
      changeUser(key,data);
      delete editableData[key];
    
    };
    const del = (key,record) => {
     
      console.log(record);
      
      };
    const cancel = (key) => {
      delete editableData[key];
    };

    return {
      dataSource,
      columns,
      editingKey: "",
      editableData,
      visible,
      inputname,
      inputword,
      showModal,
      handleOk,
      edit,
      save,
      cancel,
      del,
    };
  },
};
</script>
<style scoped>
.editable-row-operations a {
  margin-right: 8px;
}
</style>