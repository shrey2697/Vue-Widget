<template>
  <div class="success-container">
    <img src="../../assets/success.gif" alt="" width="20%" />
    <p>
      You have successfully booked {{ quantity }}
      <strong> Geeky Glass(es) </strong>. We will send you a confirmation email
      at <strong> {{ userDetails.email }}</strong
      >. Blah.com will ensure safe and timely delivery of your product. For any
      complaints or suggestions you can write to us at
      <strong>support@blah.com</strong>. Happy Blahing...!!
    </p>
  </div>
</template>

<script>
export default {
  name: "Success",
  props: ["userDetails", "quantity"],
};
</script>

<style lang="scss">
.success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
