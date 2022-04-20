<template>
  <div>
    <a-popconfirm title="点击退出？" ok-text="Yes" cancel-text="No">
      <span class="id">{{ username }}</span>
    </a-popconfirm>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    const username = ref("");
    console.log(document.cookie);
    username.value = document.cookie.split("=")[1];
    return {
      username,
    };
  },
});
</script>
<style  scoped>
.id {
  color: white;
  font-size: 25px;
  padding: 5px;
}
</style>