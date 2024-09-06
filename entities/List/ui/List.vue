<script setup>
import "./list-style.scss";
const props = defineProps({
  itemJob: { type: Object, required: true },
});
const isModalVisible = ref(false);

const product = computed(() => props.itemJob);

const openModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<template>
  <div class="product-card">
    <div class="product-card__title">
      <nuxt-link :to="`/p/${product.uri.slice(0, -5)}`">
        <strong>{{ product.name }}</strong></nuxt-link
      >
    </div>
    <div class="product-card__description">
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>
