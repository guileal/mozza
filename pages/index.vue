<script setup>
// Data
const produtos = ref([]);

const queryCollection = useColl(`produtos`);
const querySnapshot = await getDocs(queryCollection);

// 🚀 Actions
function getProducts() {
  querySnapshot.docs.forEach((doc) => {
    produtos.value.push({ ...doc.data(), amount: 0 });
  });
}

function changeAmountItem(product, action) {
  if (action === "increase") {
    product.amount++;
  } else if (action === "decrease" && product.amount > 0) {
    product.amount--;
  }
  // chamar função calcular total
  calcTotal();
}
const totalSum = ref(0);

function calcTotal() {
  let total = 0;

  produtos.value.forEach((produto) => {
    if (produto.valor && produto.amount) {
      total += Number(produto.valor) * Number(produto.amount);
    }
  });

  totalSum.value = total;
}

// 🔄 Lifeciycle
onMounted(() => {
  getProducts();
});
</script>

<template>
  <div>{{ produtos }}</div>
  <div v-for="(produto, index) in produtos" :key="index">
    <h2>{{ produto.nome }}</h2>
    <p>{{ produto.descricao }}</p>
    <p>{{ produto.valor }}</p>
    <b>
      quantidade:
      {{ produto.amount }}
    </b>

    <button @click="changeAmountItem(produto, 'increase')">+</button>
    <button @click="changeAmountItem(produto, 'decrease')">-</button>
  </div>
  <h2>total {{ totalSum }}</h2>
</template>

<style scoped>
</style>
