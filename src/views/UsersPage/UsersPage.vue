<template>
  <div class="container">
    <label>Select user</label>
    <inputRegular
      class="inputFieldContainer"
      inputFieldClass="inputField"
      label="Search name"
      :placeholder="capitalize(placeholder)"
      v-model.trim="search"
      type="text"
    />
    <ul v-for="user in searchResult" v-bind:key="user.id">
      <li>{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import inputRegular from "../../components/inputRegular.vue";

const search = ref("");
const placeholder = "enter name to search";
const users = [
  { id: 1, name: "john", email: "john@xyz.com" },
  { id: 2, name: "lee min", email: "leemin@xyz.com" },
  { id: 3, name: "alexa", email: "alexa@xyz.com" },
  { id: 4, name: "rosy", email: "rosy@xyz.com" },
  { id: 5, name: "joy", email: "joy@xyz.com" },
  { id: 6, name: "john", email: "john@vue.com" },
];

const searchResult = computed(() => {
  if (search.value) {
    return users.filter((item) => {
      return search.value
        .toLowerCase()
        .split(" ")
        .every((v) => item.name.toLowerCase().includes(v));
    });
  } else {
    return users;
  }
});

const capitalize = (value) => {
  if (!value) {
    return "";
  }
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 50px;
}

.inputFieldContainer {
  width: 200px;
  margin-bottom: 8px;
  font-size: 13px;
  line-height: 20px;
}

::v-deep .inputField {
  height: 36px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #cfd6de;
  border-radius: 4px;
}
</style>
