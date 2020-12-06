<template>
  <div class="home">
    <Header />
    <div class="body">
      <Stepper :currentActive="currentActive" />
      <!-- Form Component  -->
      <div class="form">
        <div class="form-container">
          <FormComponent
            :currentActive="currentActive"
            :quantity="quantity"
            ref="form"
          />
        </div>
        <div class="product-container">
          <ProductComponent
            :quantity="quantity"
            :increaseQuan="increaseQuan"
            :decreaseQuan="decreaseQuan"
            :currentActive="currentActive"
          />
        </div>
      </div>
    </div>
    <Footer :previous="previous" :next="next" :currentActive="currentActive" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Stepper from "@/components/Stepper";
import FormComponent from "../components/FormComponent/index";
import ProductComponent from "../components/ProductComponent";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  data() {
    return {
      currentActive: 1,
      quantity: 1,
    };
  },
  methods: {
    next() {
      if (this.currentActive < 3) {
        this.$refs.form.$refs.userDetails.validate((valid) => {
          if (valid) {
            this.currentActive += 1;
          } else {
            this.$notify.error({
              title: "Details are incomplete",
              duration: 3000,
              offset: 80,
            });
            return false;
          }
        });
      }
    },
    previous() {
      if (this.currentActive > 1) {
        this.currentActive -= 1;
      }
    },
    increaseQuan() {
      this.quantity += 1;
    },
    decreaseQuan() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },
  components: {
    Header,
    Stepper,
    FormComponent,
    Footer,
    ProductComponent,
  },
};
</script>

<style lang="scss">
@import "style.scss";
</style>
