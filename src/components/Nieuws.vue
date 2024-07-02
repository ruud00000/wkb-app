<script setup>
  import Item from './Item.vue'
  import NieuwsItemIcon from './icons/IconNieuwsItem.vue'
  import { ref, onMounted, computed } from 'vue'

  const imgPath = import.meta.env.VITE_IMG_ENDPOINT 
  const nieuwsEndpoint = import.meta.env.VITE_NIEUWS_ENDPOINT 

  const nieuwsItems = ref([])
  const filteredNieuwsItems = computed(() => {
      return nieuwsItems.value.filter(item => item.visibility)
    }) 
  
  async function fetchNieuws() {
    const res = await fetch(nieuwsEndpoint)
    return await res.json()
  }

  onMounted(async () => {
    const result = await fetchNieuws()
    nieuwsItems.value = result
    console.log('nieuwsItems: ', nieuwsItems.value)
    console.log('filteredNieuwsItems: ', filteredNieuwsItems.value)
  })
</script>

<template>
  <div v-if="filteredNieuwsItems">

    <Item v-for="nieuwsItem in filteredNieuwsItems">
        <template #icon>
          <NieuwsItemIcon />
        </template>
        <template #heading>{{ nieuwsItem.titel_kort }}</template>
        <template #content>
          <div v-if="nieuwsItem.foto_naam">
            <img :id="nieuwsItem._id" :src="imgPath + nieuwsItem.foto_naam" alt="Foto" width="100%">
          </div>
          <p>{{ nieuwsItem.inhoud_lang }}</p>
        </template>
    </Item>
  </div>
  <div v-else>
    <Item>
      <template #content>
        <p>Laden...</p>
      </template>
    </Item>
  </div>
</template>
