<template>
  <div class="footer">
    <el-button type="primary" @click="previous">
      Previous
    </el-button>
    <el-button type="primary" @click="next">
      Next
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["previous", "next"],
};
</script>

<style></style>
