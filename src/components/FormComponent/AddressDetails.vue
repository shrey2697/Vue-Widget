<template>
  <div>
    <el-form-item label="Address Line 1" prop="addressline1">
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
    <el-form-item label="Country" prop="country" label-position="top">
      <el-select
        filterable
        v-model="userDetails.country"
        placeholder="Country"
        @change="changeCountry"
      >
        <el-option
          v-for="country in countriesList"
          :key="country.id"
          :label="country.name"
          :value="country.id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="State" prop="city">
      <el-select v-model="userDetails.state" placeholder="State">
        <el-option
          v-for="state in stateList"
          :key="state.id"
          :label="state.name"
          :value="state.id"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="City" prop="city">
      <el-input v-model="userDetails.city" placeholder="City"></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: "AddressDetails",
  props: ["userDetails", "countriesList", "stateList", "changeCountry"],
};
</script>

<style lang="scss">
.el-select {
  width: 100%;
}
</style>
