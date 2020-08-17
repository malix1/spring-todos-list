<template>
  <b-alert
    :show="dismissCountDown"
    dismissible
    variant="success"
    @dismissed="dismissCountDown=0"
    @dismiss-count-down="countDownChanged"
  >{{status.message}}</b-alert>
</template>

<script>
export default {
  name: "Alert",
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0
    };
  },
  props: {
    status: {
      type: Object,
      required: true
    },
    alertStatus: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    alertStatus: function(newVal) {
      console.log("alert changed")
      if (newVal) {
        this.showAlert();
      }
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;

    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  }
};
</script>

<style scoped>
</style>
