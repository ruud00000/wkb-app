<script setup>
import Item from './Item.vue'
import NieuwsItemIcon from './icons/IconNieuwsItem.vue'
import Foto001 from '/src/assets/nieuws/Team-Winterswijk-2-kampioen-Landelijke-Competitie-divisie-4-20232024.jpg'
import packageJson from '../../package.json'

const version = packageJson.version

</script>

<template>

<Item>
    <template #icon>
      <NieuwsItemIcon />
    </template>
    <template #heading>Landelijke competitie succes</template>
    <img :src="Foto001" width="100%">
    In de landelijke competitie (divisie 4) is Team 2 afkomstig uit Winterswijk kampioen geworden. Deze gigantische prestatie is niet onopgemerkt gebleven. Zo werden alle aanwezige spelers tijdens de ALV van de WKB op 25 maart jl. gehuldigd. Wij feliciteren het team met het bereiken van het kampioenschap!  
  </Item>

</template>
