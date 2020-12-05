<template>
  <div class="stepper" :style="{ backgroundImage: getBackgroundColor() }">
    <div :style="{ color: getTextColor(1) }">
      <span>
        <el-icon class="el-icon-user-solid"></el-icon>
      </span>
      Personal Details
    </div>
    <div :style="{ color: getTextColor(2) }">
      <span>
        <el-icon class="el-icon-s-home"></el-icon>
      </span>
      Address Details
    </div>
    <div :style="{ color: getTextColor(3) }">
      <span>
        <el-icon class="el-icon-success"></el-icon>
      </span>
      Success
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: ["currentActive"],
  methods: {
    getTextColor(index) {
      return this.currentActive === index ? "white" : "black";
    },
    getBackgroundColor() {
      if (this.currentActive === 1) {
        return "linear-gradient(90deg, #4b3f72 , #119da4, white 35%)";
      }
      if (this.currentActive === 2) {
        return "linear-gradient(90deg, #4b3f72 ,#4b3f72, #119da4, white 70%)";
      }
      if (this.currentActive === 3) {
        return "linear-gradient(90deg, #4b3f72, #119da4)";
      }
    },
  },
};
</script>

<style lang="scss">
.stepper {
  margin-top: 97px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  transition: all 1s;
  border-radius: 10px;
  box-shadow: 5px 5px 5px #4b3f72;
  div {
    width: 33.3%;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
