<template>
  <a-layout class="home">
    <a-layout-header class="header">
      <div class="User">
        <User></User>
      </div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          :model:openKeys="openKeys"
          :model:selectedKeys="selectedKeys"
          mode="inline"
          :inline-collapsed="collapsed"
        >
          <a-menu-item key="1" @click="GoTo" id="Yibiao">
            <template #icon>
              <PieChartOutlined />
            </template>
            <span>仪表盘</span>
          </a-menu-item>
          <a-menu-item key="2" @click="GoTo" id="User">
            <template #icon>
              <DesktopOutlined />
            </template>
            <span>用户管理</span>
          </a-menu-item>
          <a-menu-item key="3" @click="GoTo" id="Aricle">
            <template #icon>
              <InboxOutlined />
            </template>
            <span>文章管理</span>
          </a-menu-item>
          <a-menu-item key="4" @click="GoTo" id="Notice">
            <template #icon>
              <InboxOutlined />
            </template>
            <span>公告管理</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
             overflow: 'scroll'
          }"
        >
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { defineComponent, reactive, toRefs, watch } from "vue";
import { useRouter } from "vue-router";
import User from "../components/User.vue";
import {
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    PieChartOutlined,
    User,
    DesktopOutlined,
    InboxOutlined,
  },

  setup() {
    const router = useRouter();
    const state = reactive({
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"],
    });
    watch(
      () => state.openKeys,
      (_val, oldVal) => {
        state.preOpenKeys = oldVal;
      }
    );
    const GoTo = ($event) => {
      let id = "/home/" + $event.currentTarget.id;
      router.push({
        path: id,
      });
    };
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return { ...toRefs(state), toggleCollapsed, GoTo };
  },
});
</script>
<style>
.home {
  height: 100vh;
}
#components-layout-demo-top-side-2 {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.User {
  position: absolute;
  right: 10%;
}
.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>