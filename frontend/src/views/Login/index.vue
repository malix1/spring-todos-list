<template>
  <div class="form">
    <b-card title="Login Page">
      <label class="error" v-if="error.message!==''">{{error.message}}</label>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1" class="form-item">
          <b-form-input id="input-1" v-model="user.username" required placeholder="Enter username"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password:" label-for="input-2" class="form-item">
          <b-form-input
            id="input-2"
            type="password"
            v-model="user.password"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  computed: mapGetters({
    error: "users/getError"
  }),
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.login(this.user);
    },
    ...mapActions({
      login: "users/login"
    })
  }
};
</script>

<style scoped>
.form {
  margin: 5% auto;
  width: 45%;
}
.form-item {
  margin: 3% auto;
  width: 70%;
}
.error {
  color: red;
}
</style>
