<template>
  <div>
    <h1>Formulário</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Nome:</label>
      <input type="text" id="name" v-model="formData.name" />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" />

      <label for="message">Mensagem:</label>
      <textarea id="message" rows="4" v-model="formData.message"></textarea>

      <button type="submit">Enviar</button>
    </form>

    <!-- Mostrar os dados do formulário após o envio -->
    <div v-if="formSubmitted">
      <h2>Dados do formulário enviado:</h2>
      <p>Nome: {{ formData.name }}</p>
      <p>Email: {{ formData.email }}</p>
      <p>Mensagem: {{ formData.message }}</p>
    </div>

    <h2>{{ formData }}</h2>
    <h3>{{ formSubmitted }}</h3>
  </div>
</template>
    
  <script setup>
const formData = ref({
  name: "",
  email: "",
  message: "",
});

const formSubmitted = ref(false);
function submitForm() {
  console.log("vamos");
  formSubmitted.value = true;
}
</script>
  
  