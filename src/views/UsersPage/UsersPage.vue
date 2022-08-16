<template>
  <div class="container">
    <inputRegular
      class="inputFieldContainer"
      inputFieldClass="inputField"
      label="Search name"
      :placeholder="capitalize(placeholder)"
      v-model.trim="search"
      type="text"
    />
    <div>
      <div v-if="loading">Loading...</div>
      <div class="text-red-700" v-if="!loading && error">{{error}}</div>
      <ul v-if="!loading && users?.length" >
        <li v-for="user in searchResult" v-bind:key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed} from "vue";
import inputRegular from "../../components/inputRegular.vue";
import {useFetch} from "@/use/fetch";

const placeholder = "enter name to search";
const search = ref("");
const users = ref([]);
const usersUrl = "https://jsonplaceholder.typicode.com/users";


const {data, error, loading, request} = useFetch(usersUrl);

const loadUsers = async () => {
  await request(usersUrl);

  users.value = data.value;
  };

onMounted(()=> {
  loadUsers();
});


const searchResult = computed(() => {
  if (search.value) {
    return users.value.filter((item) => {
      return search.value
        .toLowerCase()
        .split(" ")
        .every((v) => item.name.toLowerCase().includes(v));
    });
  } else {
    return users.value;
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
