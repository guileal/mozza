<template>
  <div>
    <h1>Formulário</h1>
    <form v-if="!formSubmitted" @submit.prevent="submitForm" class="formulario">
      <!-- Name -->
      <div>
        <label for="name">Nome</label>
        <input type="text" id="name" v-model="formData.name" />
      </div>

      <!-- Type -->
      <div>
        <label for="type">Tipo</label>
        <select type="text" id="type" v-model="formData.type">
          <option value="opcao1">a</option>
          <option value="opcao1">b</option>
        </select>
      </div>

      <!-- Price -->
      <div>
        <label for="price">Preço</label>
        <input type="number" id="price" v-model="formData.price" />
      </div>

      <!-- Amount -->
      <div>
        <label for="amount">Quantidade</label>
        <input type="number" id="amount" v-model="formData.amount" />
      </div>

      <input type="submit" value="Cadastrar" />
    </form>

    <div v-else>Form enviado com sucesso</div>
  </div>
</template>

<script setup>
const formSubmitted = ref(false);

// todo: transformar produtos em algo variavel
const formData = ref({
  collection: "produtos",
  name: "",
  type: "",
  price: "",
  amount: "",
});

function submitForm() {
  const { collection, name, type, price, amount } = formData.value;
  const data = {
    name: name,
    type: type,
    price: price,
    amount: amount,
  };

  createDoc(collection, data).then(() => {
    console.log("Then");
    formSubmitted.value = true;
  });
}
</script>

<style lang="sass" scoped>
.formulario
  display: flex
  flex-direction: column
</style>
