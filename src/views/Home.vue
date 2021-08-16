<template>
  <div class="container">
    <div class="header d-flex mt-5">
      <h1 class="header__title">Istifadəçilər</h1>
      <router-link to="/add-user"
        ><button class="btn btn-success mt-2">Əlavə et</button></router-link
      >
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
            <button
              type="button"
              class="btn btn-success mr-5"
              v-on:click="redaktFrom(index, user)"
            >
              Redakt
            </button>
            <button
              type="button"
              class="btn btn-danger btn-js position-absolute"
              v-on:click="openModal(index)"
            >
              &times;
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="form-replace position-absolute" ref="form">
      <b>Dəqiq silmek isteyrsiz?</b>
      <div class="form-replace__btn-group mt-3 mb-2">
        <button
          class="btn btn-danger form-replace__btn mr-4 yes-js"
          v-on:click="removeUser"
        >
          Hə
        </button>
        <button
          class="btn btn-success form-replace__btn no-js"
          v-on:click="closeForm"
        >
          Yox
        </button>
      </div>
    </div>
    <form-modal :user="selectUsers" v-on:edit-tabs="editTabs" v-show="formModalOpen" v-on:modal-close="formModalClose"></form-modal>
  </div>
</template>

<script>
// import { use } from 'vue/types/umd';
import FormModal from "..//components/ModalForm.vue";
export default {
  name: "Home",
  components: {
    FormModal,
  },
  data() {
    return {
      userInfo: [],
      formReplaceModal: false,
      indexUser: null,
      selectUsers: {},
      formModalOpen: false,
    };
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("users"));
  },
  methods: {
    async openModal(index) {
      this.indexUser = index;
      // this.formReplaceModal = true;
      let replaceBtn = this.$refs["form"];
      replaceBtn.style.display = "block";

      let replaceLeft =
        event.target.getBoundingClientRect().left -
        replaceBtn.getBoundingClientRect().width / 2.5;
      console.log(event.target.offsetTop);
      console.log(replaceBtn.getBoundingClientRect());
      let replaceTop =
        event.target.offsetTop -
        replaceBtn.getBoundingClientRect().height / 0.9;
      replaceBtn.style.left = replaceLeft + "px";
      replaceBtn.style.top = replaceTop + "px";
    },
    removeUser() {
      this.userInfo.splice(this.indexUser, 1);
      // this.formReplaceModal = false;
      let replaceBtn = this.$refs["form"];
      replaceBtn.style.display = "none";
      this.replaceUser();
    },
    closeForm() {
      let replaceBtn = this.$refs["form"];
      replaceBtn.style.display = "none";
      // this.formReplaceModal = false;
    },
    replaceUser() {
      let user = JSON.stringify(this.userInfo);
      localStorage.setItem("users", user);
    },
    redaktFrom(index, user) {
      this.selectUsers = { data: user, index: index };
      this.formModalOpen = true;
    },
    editTabs(user) {
      this.userInfo[user.index] = user.data;
      this.userInfo = JSON.parse(JSON.stringify(this.userInfo));

      localStorage.setItem("users", JSON.stringify(this.userInfo));
      this.formModalOpen = false;

    },
    formModalClose() {
      this.formModalOpen = false;
    }
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
.form-replace {
  display: none;
  background: rgb(148, 131, 131);
  padding: 20px;
}
.form-replace__btn-group {
  text-align: center;
}
</style>