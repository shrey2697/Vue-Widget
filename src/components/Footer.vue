<template>
  <div class="footer">
    <div v-if="currentActive !== 3">
      <el-button
        type="primary"
        @click="previous"
        :disabled="currentActive === 1"
      >
        Previous
      </el-button>
      <el-button type="primary" @click="next">
        Next
      </el-button>
    </div>
    <el-button v-if="currentActive === 3" type="primary" @click="close">
      Close
    </el-button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["previous", "next", "currentActive"],
  methods: {
    close() {
      window.close();
    },
  },
};
</script>

<style lang="scss"></style>
