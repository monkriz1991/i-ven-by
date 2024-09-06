import { defineStore } from "pinia";

export const useAllDataStore = defineStore("allData", () => {
  const list = ref([]);
  const status = ref("initial");

  const requestAllData = async () => {
    status.value = "pending";
    try {
      // Запрашиваем данные
      const { data, error } = await useFetch("/api/products", {
        method: "GET",
      });

      if (error.value) {
        console.warn("Error fetching products:", error.value);
        status.value = "error";
      } else {
        list.value = data.value || [];
        status.value = "success";
      }
    } catch (err) {
      console.error("Fetch error:", err);
      status.value = "error";
    }
  };

  return {
    list,
    status,
    requestAllData,
  };
});
