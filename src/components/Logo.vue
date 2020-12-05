<template>
  <div class="logo">
    <span>b</span>
    <span>l</span>
    <span>a</span>
    <span>h</span>
    .com
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss">
.logo {
  color: white;
}
.logo span {
  font-size: 4rem;
  font-weight: 900;
}
.logo span:nth-child(1) {
  color: #4b3f72;
}
.logo span:nth-child(2) {
  color: #ffc857;
}
.logo span:nth-child(3) {
  color: #119da4;
}
.logo span:nth-child(4) {
  color: #19647e;
}
</style>
