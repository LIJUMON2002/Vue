<template>
  <div class="container">
    <h1>Arithmetic Operations</h1>
    <div class="input-group">
      <label for="number1">Number 1:</label>
      <input type="number" v-model="number1" id="number1" />
    </div>
    <div class="input-group">
      <label for="number2">Number 2:</label>
      <input type="number" v-model="number2" id="number2" />
    </div>
    <div class="button-group">
      <button @click="add">Add</button>
      <button @click="subtract">Subtract</button>
      <button @click="multiply">Multiply</button>
      <button @click="divide">Divide</button>
    </div>
    <div class="result">
      <h2>Result: {{ result }}</h2>
    </div>
    <div class="logout-button">
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArithmeticComponent',
  data() {
    return {
      number1: 0,
      number2: 0,
      result: 0
    };
  },
  methods: {
    add() {
      this.result = this.number1 + this.number2;
    },
    subtract() {
      this.result = this.number1 - this.number2;
    },
    multiply() {
      this.result = this.number1 * this.number2;
    },
    divide() {
      if (this.number2 !== 0) {
        this.result = this.number1 / this.number2;
      } else {
        this.result = 'Error: Division by zero';
      }
    },
    logout() {
      this.$store.dispatch('logout'); // Dispatch logout action
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

input[type="number"] {
    width: 95%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 50px;
}

.button-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

button {
    width: 23%;
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

.result {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}

.logout-button {
    display: flex;
    justify-content: center;
}
</style>
