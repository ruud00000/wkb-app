<script setup>
  import Item from './Item.vue'
  import NieuwsItemIcon from './icons/IconNieuwsItem.vue'
  import { ref, onMounted } from 'vue'

  const imgPath = import.meta.env.VITE_IMG_ENDPOINT 
  const nieuwsEndpoint = import.meta.env.VITE_NIEUWS_ENDPOINT 

  const nieuwsItems = ref(null)

  async function fetchNieuws() {
    const res = await fetch(nieuwsEndpoint)
    return await res.json()
  }

  onMounted(async () => {
    const result = await fetchNieuws()
    nieuwsItems.value = result 
  })
</script>

<template>
  <div v-if="nieuwsItems">
    <Item v-for="nieuwsItem in nieuwsItems">
      <template #icon>
        <NieuwsItemIcon />
      </template>
      <template #heading>{{ nieuwsItem.titel_kort }}</template>
      <img :src="imgPath + nieuwsItem.foto_naam" alt="Foto" width="100%">
      <p>{{ nieuwsItem.inhoud_lang }}</p>
    </Item>
  </div>
  <div v-else>
    <Item>
      <p>Laden...</p>
    </Item>
  </div>
</template>
