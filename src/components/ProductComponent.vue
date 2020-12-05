<template>
  <div>
    <img src="../assets/prod.jpg" alt="" width="100%" />
    <div class="product-row">
      <strong>Product Name:</strong>
      <div>Geeky Glasses</div>
    </div>
    <div class="product-row">
      <strong>Quantity:</strong>
      <div>
        <button :disabled="currentActive === 3" @click="decreaseQuan">-</button>
        {{ quantity }}
        <button :disabled="currentActive === 3" @click="increaseQuan">+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductComponent",
  props: ["quantity", "increaseQuan", "decreaseQuan", "currentActive"],
};
</script>

<style lang="scss">
.product-row {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 50%;
  }
}
strong {
  width: 50%;
}
button {
  outline: none;
  cursor: pointer;
  border: solid 1px grey;
  border-radius: 10px;
  padding: 0px 10px;
  font-size: 20px;
  background-color: white;
}
button:disabled {
  cursor: default;
}
</style>
