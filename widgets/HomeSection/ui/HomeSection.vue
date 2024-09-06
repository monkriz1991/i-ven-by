<script setup>
import { List } from "@/entities/List";
import { useAllDataStore } from "~/stores/main";
import "./home-section.scss";

const title = ref("Stor");
const allDataStore = useAllDataStore();
await allDataStore.requestAllData();
const { list } = storeToRefs(allDataStore);
</script>

<template>
  <section class="home">
    <div class="_container"></div>
    <div class="home__container _container">
      <div class="home__list">
        <h1 class="home__title heading_h1">{{ title }}</h1>
        <List v-for="(job, index) in list" :key="index" :itemJob="job" />
      </div>
    </div>
  </section>
</template>
