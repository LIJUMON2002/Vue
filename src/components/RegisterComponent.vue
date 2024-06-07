<template>
  <div class="container">
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div class="input-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <div class="login-button">
        <button type="submit">Register</button>
      </div>
      <div>
        <p class="error-msg">{{ error }}</p>
      </div>
      <div class="login-button">
        <button @click="login">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterComponent',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      };
      await this.$store.dispatch('register', user);
      this.$router.push('/login');
    },
    login() {
      this.$router.push('/login'); // Redirect to login page
    }
  }
};
</script>

<style scoped>
.container {
    width: 350px;
    margin: 40px auto;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
h1 {
    text-align: center;
    margin-bottom: 20px;
}
.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="password"],
input[type="email"] {
    width: 95%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 50px;
}

input[type="file"] {
    width: 95%;
    padding: 15px;
}

.login-button {
    display: flex;
    justify-content: center;
}

button {
    width: 98%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}

button:hover {
    color: black;
    background-color: rgba(255, 255, 255, 0.5);
}
</style>
