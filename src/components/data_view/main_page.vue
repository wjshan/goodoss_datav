<template>
  <dv-full-screen-container class="data-view">
    <div class="view-col top-view" style="width: 25%">
      <dv-decoration-8/>
      <div style="position: absolute;left: 20px;top: 60px;">日期、星期、温度、湿度</div>
    </div>
    <div class="view-col top-view" style="width: 50%">
      <dv-decoration-5/>
      <div class="center-title">监控大屏标题</div>
    </div>
    <div class="view-col top-view" style="width: 25%;">
      <dv-decoration-8 :reverse="true"/>
      <div style="position: absolute;right: 20px;top: 60px;">设置、系统按钮</div>
    </div>
    <div class="view-flex view-col">
      <div style="height: calc(100%/3);width: 100%;">
        <dv-border-box-11 title="服务之星">
          <div class="view-card-content">
            客服中心服务之星（周评比） (图片+评分)
          </div>
        </dv-border-box-11>
      </div>
      <div style="height: calc(100%/3);width: 100%;">
        <dv-border-box-11 title="服务之星">
          <div class="view-card-content">客服中心人员组成概况(文字+数字)
            钉钉打卡情况（出勤率、准时率）（饼状图）
            健康打卡情况（打卡率）（未打卡提示）
            设计二级屏
          </div>
        </dv-border-box-11>
      </div>
      <div style="height: calc(100%/3);width: 100%;">
        <dv-border-box-11 title="服务之星">
          <div class="view-card-content">客服中心人员组成概况(文字+数字)
            钉钉打卡情况（出勤率、准时率）（饼状图）
            健康打卡情况（打卡率）（未打卡提示）
            设计二级屏
          </div>
          95598工单统计（柱状图）
          抢修工单统计（柱状图）
          稽查工单统计（柱状图）
        </dv-border-box-11>

      </div>
    </div>
    <div class="view-flex view-col">
      <div style="height: 50%;width: 100%;">
        <dv-border-box-1>
          <div class="view-card-content">
            客服中心人员出勤地图及位置实时展示（地图+定位）设计二级屏
          </div>
        </dv-border-box-1>
      </div>
      <div style="height: 50%;width: 100%;">
        <dv-border-box-1>
          <div class="view-card-content">业扩服务工作计划展示设计二级屏</div>
        </dv-border-box-1>
      </div>
    </div>
    <div class="view-flex view-col">
      <div style="height: calc(100%/3);width: 100%;">
        <dv-border-box-11 title="储备库项目情况"><div class="view-card-content">储备库项目情况设计二级屏</div></dv-border-box-11></div>
      <div style="height: calc(100%/3);width: 100%;">
        <dv-border-box-11 title="重点项目进展情况"><div class="view-card-content">重点项目进展情况设计二级屏</div></dv-border-box-11></div>
      <div style="height: calc(100%/3);width: 100%;">
        <dv-border-box-11 title="工程调整单情况"><div class="view-card-content">工程调整单情况（指标管控二级屏入口）</div></dv-border-box-11></div>
    </div>
  </dv-full-screen-container>
</template>

<script>
export default {
  name: "main_page",
  components: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  props: {},
}
</script>

<style scoped>
.data-view {
  background-color: #030409;
  color: #fff;
  background-image: url("../../assets/bg.837e99ea.png");
  background-size: 100% 100%;
  box-shadow: 0 0 3px blue;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.view-flex {
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 100px);
}

.view-col {
  width: 33.3%;
}

.top-view {
  height: 100px;
}

.center-title {
  position: absolute;
  font-size: 30px;
  font-weight: bold;
  left: 50%;
  top: 15px;
  transform: translateX(-50%);
}

.view-card-content {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}
</style>