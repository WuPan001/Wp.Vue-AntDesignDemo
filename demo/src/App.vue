<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <div class="logo" />
      <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
        <a-menu-item
          v-for="nav in navigations"
          :key="nav.name"
          @click="currentNav = nav"
          >{{ nav.name }}</a-menu-item
        >
        <a-sub-menu>
          <span slot="title"><a-icon type="team" /><span>Test</span></span>
          <a-menu-item
            v-for="test in tests"
            :key="test.name"
            @click="currentNav = test"
            >{{ test.name }}</a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 16px">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb> -->
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '760px' }"
        >
          <component v-bind:is="currentNav.template"></component>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import UserMgt from "./components/UserMgt.vue";
import AboutUs from "./components/AboutUs.vue";
import Main from "./components/Main.vue";
import Test from "./components/Test.vue";
import TestEChart from "./components/TestEChart.vue";
var $navigations = [
  {
    name: "UserMgt",
    template: UserMgt,
  },
  {
    name: "AboutUs",
    template: AboutUs,
  },
];
var $tests = [
  {
    name: "Test",
    template: Test,
  },
  {
    name: "Main",
    template: Main,
  },
  {
    name: "TestEChart",
    template: TestEChart,
  },
];
export default {
  name: "app",
  components: {
    HelloWorld,
  },
  data: function name(params) {
    return {
      collapsed: false,
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
      items: [1, 2, 3, 4, 5],
      navigations: $navigations,
      tests: $tests,
      currentNav: $navigations[0],
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
