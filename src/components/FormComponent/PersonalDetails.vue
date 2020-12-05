<template>
  <div>
    <el-form-item label="First Name">
      <el-input
        v-model="userDetails.firstname"
        placeholder="First Name"
      ></el-input>
    </el-form-item>
    <el-form-item label="Last Name">
      <el-input
        v-model="userDetails.lastname"
        placeholder="Last Name"
      ></el-input>
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model="userDetails.email" placeholder="Email"></el-input>
    </el-form-item>
    <el-form-item label="Phone">
      <el-input v-model="userDetails.phone" placeholder="Phone"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "PersonalDetails",
  props: ["userDetails"],
};
</script>

<style></style>
