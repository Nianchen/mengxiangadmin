<template>
<div>
    <a-popconfirm title="Are you sure？" ok-text="Yes" cancel-text="No">
      <a-avatar :size="40">
    <template #icon>
      <AntDesignOutlined />
    </template>
  </a-avatar>
  </a-popconfirm>
   
</div>

</template>
<script>
import { AntDesignOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    AntDesignOutlined,
  },
});
</script>
<style  scoped>
    span{
        color:white
    }
</style>