<template>
  <div>
    <a-popconfirm title="点击退出？" ok-text="Yes" cancel-text="No" @confirm='confirm'>
      <span class="id">{{ username }}</span>
    </a-popconfirm>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  setup() {
    const username = ref("");
    console.log(document.cookie);
    const router = useRouter();
    username.value = document.cookie.split("=")[1];
    const confirm = () =>{
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      router.push({
        path:'/'
      })
    }
    return {
      username,
      confirm
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