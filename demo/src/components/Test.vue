<template>
  <div>
    <div>This is Test</div>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="echartDemo" style="width: 600px; height: 400px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    initEchart();
  },
  methods: {
    initEchart() {
      //初始化echart实例，获取dom
      var echartDemo = this.$echarts.init(
        document.getElementById("echartDemo")
      );
      option = {
        color: ["#618FC8"],
        backgroundColor: "#F8F8F8",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: 20,
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["Decade Ⅰ", "Decade Ⅱ", "Decade Ⅲ"],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 1600,
            max: 2100,
            interval: 50,
          },
        ],
        series: [
          {
            name: "新增订单",
            type: "bar",
            barWidth: "40%",
            data: [1770, 1852, 2000],
          },
        ],
      };
      echartDemo.setOption(option);
    },
  },
  components: {},
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
