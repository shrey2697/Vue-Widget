<template>
  <div>
    <el-form-item label="Address Line 1">
      <el-input
        v-model="userDetails.addressLine1"
        placeholder="Address Line 1"
      ></el-input>
    </el-form-item>
    <el-form-item label="Address Line 2">
      <el-input
        v-model="userDetails.addressLine2"
        placeholder="Address Line 2"
      ></el-input>
    </el-form-item>
    <el-form-item label="City">
      <el-input v-model="userDetails.city" placeholder="City"></el-input>
    </el-form-item>
    <el-form-item label="State">
      <el-input v-model="userDetails.state" placeholder="State"></el-input>
    </el-form-item>
    <el-form-item label="Country">
      <el-input v-model="userDetails.country" placeholder="Country"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "AddressDetails",
  props: ["userDetails"],
};
</script>

<style></style>
