<template>
  <div class="container cotain-style">
    <p v-if="errors.length">
      <b>Qeyid olunan sefleri duzeldin</b>
      <ul class="error-list mt-4 mb-4">
        <li class="error-list__item" v-for="(error, index) in errors" :key='index'>{{ error }}</li>
      </ul>
    </p>
    <form v-on:submit.prevent="onSubmit">
      <div class="row">
        <div class="form-group col-md-12">
          <label>Email</label>
          <input
            type="text"
            class="form-control"
            placeholder="Ad"
            v-model.trim="name"
          />
        </div>
        <div class="form-group col-md-12">
          <label>Password</label>
          <input
            type="text"
            class="form-control"
            placeholder="Soyad"
            v-model.trim="surname"
          />
        </div>
        <div class="form-group col-md-12">
          <label>Password</label>
          <input
            type="number"
            class="form-control"
            placeholder="Yaş"
            v-model.trim="age"
          />
        </div>
        <div class="form-group col-md-12 position-relative">
          <div class="pop-up position-absolute" ref="pop-up">Əlavə olundu</div>
          <button class="btn btn-success mr-4">Əlavə et</button>
          <router-link to="/"
            ><button class="btn btn-dark">Geri qayıd</button></router-link
          >
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "add-user",
  data() {
    return {
      name: null,
      surname: null,
      age: null,
      users: [],
      errors: [],
    };
  },
  mounted() {
    let vm = this
    window.addEventListener("scroll", function () {
      const popUp = vm.$refs["pop-up"];
      if (popUp) {
        const popUpSize = popUp.getBoundingClientRect();
        let popUpTop = popUpSize.height / popUpSize.top;

        if (popUpTop < 0) {
          popUp.style.top = "50px";
        }
      }
    });
  },
  methods: {
    onSubmit() {
      if (this.name && this.surname && this.age) {
        const newUser = {
          id: Date.now(),
          name: this.name,
          surname: this.surname,
          age: this.age,
        };

        if (localStorage.getItem("users")) {
          this.users = JSON.parse(localStorage.getItem("users"));
        }

        this.users.push(newUser);
        localStorage.setItem("users", JSON.stringify(this.users));

        this.errors = [];
        this.name = null;
        this.surname = null;
        this.age = null;

        this.popUp();
      } else {
        this.errors = [];

        if (!this.name) {
          this.errors.push("Adivizi qeid elememisiniz");
        }
        if (!this.surname) {
          this.errors.push("Soyadivizi qeid elememisiniz");
        }
        if (!this.age) {
          this.errors.push("Yaşivi qeid elememisiniz");
        }
      }
    },
    popUp() {
      const popUp = document.querySelector(".pop-up");
      popUp.classList.add("anime");

      setTimeout(() => {
        popUp.classList.remove("anime");
      }, 5000);
    },
  },
};
</script>

<style scoped>
.error-list {
  color: red;
}
.cotain-style {
  max-width: 500px;
  width: 100%;
  height: 100%;
  padding-top: 150px;
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