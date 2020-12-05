<template>
  <el-form ref="userDetails" :model="userDetails">
    <PersonalDetails v-if="currentActive === 1" :userDetails="userDetails" />
    <AddressDetails v-if="currentActive === 2" :userDetails="userDetails" />
    <Success
      v-if="currentActive === 3"
      :userDetails="userDetails"
      :quantity="quantity"
    />
    <!-- <PersonalDetails v-if="currentActive === 1" :userDetails="userDetails" /> -->
  </el-form>
</template>

<script>
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import Success from "./Success";
export default {
  name: "FormComponent",
  props: ["currentActive", "quantity"],
  data() {
    return {
      userDetails: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        addressline1: "",
        addressline2: "",
        city: "",
        state: "",
        country: "",
      },
    };
  },
  components: {
    PersonalDetails,
    AddressDetails,
    Success,
  },
  mounted() {
    this.getInitialValues();
  },
  methods: {
    // Get the initial values from the url
    getInitialValues() {
      Object.entries(this.userDetails).map(([key]) => {
        this.userDetails[key] = this.$route.query[key];
      });
    },
  },
};
</script>

<style></style>
