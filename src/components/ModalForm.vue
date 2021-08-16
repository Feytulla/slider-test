<template>
  <div class="wrapper">
    <div class="modal-redakt">
      <div class="modal-redakt__form m-5 p-5">
        <h2>Redakt elə qaqa</h2>
        <form v-on:submit.prevent="onSubmit">
          <div class="row">
            <div class="form-group col-md-12">
              <label>Ad</label>
              <input
                type="text"
                class="form-control"
                ref="form-name"
                placeholder="Ad"
                value=""
                v-model.trim="name"
              />
            </div>
            <div class="form-group col-md-12">
              <label>Soyad</label>
              <input
                type="text"
                class="form-control"
                ref="form-surname"
                placeholder="Soyad"
                value=""
                v-model.trim="surnames"
              />
            </div>
            <div class="form-group col-md-12">
              <label>Yaş</label>
              <input
                type="number"
                ref="form-age"
                class="form-control from-age"
                placeholder="Yaş"
                value=""
                v-model.trim="age"
              />
            </div>
            <div class="form-group col-md-12 position-relative">
              <div class="pop-up position-absolute" ref="pop-up">
                Əlavə olundu
              </div>
              <button class="btn btn-success mr-4">Əlavə et</button>
              <router-link to="/"
                ><button class="btn btn-dark" type="button" v-on:click="formModalClose">
                  Baqla
                </button></router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      name: null,
      surnames: null,
      age: null,
    };
  },
  methods: {
    editUser() {
      if (this.user) {
        const user = this.user.data;
        this.name = user.name;
        this.surnames = user.surname;
        this.age = user.age;
      }
    },
    onSubmit() {
      const user = this.user.data;

      let userData = {
        id: user.id,
        name: this.name,
        surname: this.surnames,
        age: this.age,
      };

      this.$emit("edit-tabs", { data: userData, index: this.user.index });
    },
    formModalClose() {
      this.$emit('modal-close');
    }
  },
  watch: {
    user() {
      this.editUser();
    },
    surname() {
      this.editUser();
    },
  },
  

};
</script>

<style scoped>
.wrapper {

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0,.5);
}
.modal-redakt {
  max-width: 600px;
  background: rgb(233, 226, 226);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%,-30%);
  
}
.modal-redakt__form {
  max-width: 500px;
}
.pop-up {
  width: 120px;
  height: 30px;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  border-radius: 10px;
  top: -40px;
  left: 0px;
  background: rgb(99, 189, 99);
  transition: all 0.5s ease-in;
}
.anime {
  visibility: visible;
  opacity: 1;
  animation-name: anime;
  animation-delay: 0.5s;
}
@keyframes anime {
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
}
</style>