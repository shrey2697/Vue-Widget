import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import Success from "./Success";
import csc from "country-state-city";

export default {
  name: "FormComponent",
  props: ["currentActive", "quantity"],
  data() {
    var validateEmail = (rule, value, callback) => {
      let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value === "") {
        callback(new Error("Please enter your email"));
        // Validate email
      } else if (!emailRegex.test(value)) {
        callback(new Error("Please enter a valid email"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if (value.trim() === "") {
        callback(new Error("Please enter your phone number"));
      } else if (value.length !== 10) {
        callback(new Error("Please enter a valid phone number"));
      } else {
        callback();
      }
    };
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
      countriesList: [],
      stateList: [],
      rules: {
        firstname: [
          {
            required: true,
            message: "Please enter your first name",
            trigger: "blur",
          },
        ],
        lastname: [
          {
            required: true,
            message: "Please enter your last name",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            validator: validateEmail,
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            validator: validatePhone,
            trigger: "blur",
          },
        ],
        addressline1: [
          {
            required: true,
            message: "Please enter address line 1",
            trigger: "blur",
          },
        ],
        city: [
          {
            required: true,
            message: "Please enter your city",
            trigger: "blur",
          },
        ],
        state: [
          {
            required: true,
            message: "Please select your state",
            trigger: "change",
          },
        ],
        country: [
          {
            required: true,
            message: "Please select your country",
            trigger: "change",
          },
        ],
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
    this.getCountryList();
  },
  methods: {
    // Get the initial values from the url
    getInitialValues() {
      Object.entries(this.userDetails).map(([key]) => {
        this.userDetails[key] = this.$route.query[key];
      });
    },
    getCountryList() {
      this.countriesList = csc.getAllCountries();
    },
    changeCountry(e) {
      this.userDetails.country = e;
      this.userDetails.state = "";
      this.getStateList(e);
    },
    getStateList(e) {
      this.stateList = csc.getStatesOfCountry(e);
    },
  },
};
