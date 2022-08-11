<template>
  <h1>Hello world!</h1>
  <button @click="goToTodosPage">Go to todos</button>
</template>

<script>
export default {
  name: "SignUpPage",
  methods: {
    goToTodosPage() {
      this.$router.push("/todos");
    },
  },
};
</script>
