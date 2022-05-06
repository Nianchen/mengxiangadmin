<template>
  <div class="login">
    <vue-particles
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1.5"
      :lineLinked="true"
      :lineOpacity="0.5"
      :linesDistance="120"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    <div class="loginForm">
      <img class="img2019" src="../images/2019.jpg" alt="" />
      <div style="margin: 20px 0"></div>
      <div class="formDiv" style="">
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
        >
          <a-form-item
            label="Username"
            name="username"
            :rules="[
              { required: true, message: 'Please input your username!' },
            ]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit" @click="cLogin"
              >Submit</a-button
            >
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { Login } from "../network/api.js";
import { userTextStore } from "../store/index";
export default defineComponent({
  setup() {
    const userstore = userTextStore();
    const formState = reactive({
      username: "",
      password: "",
      remember: true,
    });
    const router = useRouter();
    const cLogin = () => {
      Login(formState.username).then((res) => {
        if (res.data.length == 1) {
          if (formState.password == res.data[0].password) {
            alert("登录成功");
            userstore.status = true;
            document.cookie = "state=true";
            router.push({
              path: "/home/Yibiao",
            });
          } else {
            alert("登录失败");
          }
        } else {
          alert("登录失败");
        }
      });
    };

    return {
      formState,
      cLogin,
    };
  },
});
</script>

<style scoped>
.login {
  position: absolute;
  background-image: url("../images/xingkong.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}

.loginForm {
  position: absolute;
  
  border-radius: 10px;
  z-index: 2;
  left: 0;
  right: 0;
  margin: auto;
  top: -20%;
  bottom: 0;
  padding: 30px 40px 10px 35px;
  opacity: 0.8;
  background-color: white;
  width: 500px;
  height: 600px;
}

.img2019 {
  width: 100%;
}

.formDiv {
  opacity: 1;
  font-family: "微软雅黑";

  width: 100%;
}
</style>