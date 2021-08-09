<template>
  <div class="container">
    <div class="header d-flex mt-5">
      <h1 class="header__title">Istifadəçilər</h1>
      <router-link to="/add-user"><button class="btn btn-success mt-2">Əlavə et</button></router-link>
    </div>
    <hr />
    <table class="table table-dark mt-5">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Ad</th>
          <th scope="col">Soyad</th>
          <th scope="col">Yaş</th>
          <th scope="col">Əməliyat</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) of userInfo" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.surname }}</td>
          <td>{{ user.age }}</td>
          <td>
            <button type="button" class="btn btn-success mr-5">Redakt</button>
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="removeUser(index)"
            >
              &times;
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userInfo: [],
    };
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("users"));

    setTimeout(() => {
      console.log(localStorage.key(0));
    }, 1000);
  },
  methods: {
    removeUser(id) {
      this.userInfo.splice(id, 1);
      this.replaceUser();
    },
    replaceUser() {
      let user = JSON.stringify(this.userInfo);
      localStorage.setItem("users", user);
    },
  },
};
</script>

<style scoped>
.header {
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
}
.header__title {
  letter-spacing: 3px;
}
</style>