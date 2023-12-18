<script setup>
// const { data } = await useFetch("/api/hello");

const queryAll = useColl(`produtos`);

const querySnapshot = await getDocs(queryAll);

const produtos = querySnapshot.docs.map((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // doc.id, " => ", doc.data();
  return doc.data();
});
</script>

<template>
  <pre>{{ produtos }}</pre>
</template>
