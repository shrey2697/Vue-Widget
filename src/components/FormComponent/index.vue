<template>
  <el-form ref="userDetails" :model="userDetails" :rules="rules">
    <PersonalDetails v-if="currentActive === 1" :userDetails="userDetails" />
    <AddressDetails
      v-if="currentActive === 2"
      :userDetails="userDetails"
      :countriesList="countriesList"
      :stateList="stateList"
      :changeCountry="changeCountry"
    />
    <Success
      v-if="currentActive === 3"
      :userDetails="userDetails"
      :quantity="quantity"
    />
  </el-form>
</template>

<script src="./script.js"></script>

<style></style>
