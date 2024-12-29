<script setup>
import Item from './Item.vue'
import AgendaCompetitieIcon from './icons/IconAgendaCompetitie.vue'
import AgendaLandelijkeCompetitieIcon from './icons/IconAgendaLandelijkeCompetitie.vue'
import AgendaCompetitie from '/src/assets/agenda/Competitie-2025.pdf'
import Agenda50pluskegelen from '/src/assets/agenda/50plus-kegeltoernooi-2025.pdf'
import AgendaBedrijfskegelen from '/src/assets/agenda/Bedrijfskegelen-groepsindeling-2025.pdf'
import AgendaCompetitieLandelijk from '/src/assets/agenda/Landelijke-competitie-schema-2024-2025.pdf'
import packageJson from '../../package.json'

const version = packageJson.version

</script>

<template>

  <Item>
    <template #icon>
      <AgendaCompetitieIcon />
    </template>
    <template #heading>50-plus kegeltoernooi 10-12 januari 2025</template>
    <template #content>
      Hier vind je de  
      <a :href="Agenda50pluskegelen" target="_blank" rel="noopener">uitnodiging </a> 
      voor het 50-plus kegeltoernooi op 10, 11 en 12 januari 2025.    
    </template>
  </Item>

    <Item>
    <template #icon>
      <AgendaCompetitieIcon />
    </template>
    <template #heading>Competitiedata</template>
    <template #content>
      De data en baanindeling voor de zes rondes van de WKB competitie van 2025 vind je  
      <a :href="AgendaCompetitie" target="_blank" rel="noopener">hier</a>.    
    </template>
  </Item>

  <Item>
    <template #icon>
      <AgendaCompetitieIcon />
    </template>
    <template #heading>Bedrijfskegelen</template>
    <template #content>
      Hier is het  
      <a :href="AgendaBedrijfskegelen" target="_blank" rel="noopener">schema</a> 
      voor het bedrijfskegelen voor 2025.    
    </template>
  </Item>

  <Item>
    <template #icon>
      <AgendaLandelijkeCompetitieIcon />
    </template>
    <template #heading>Landelijke competitie</template>
    <template #content>
      Hier is het <a :href="AgendaCompetitieLandelijk" target="_blank" rel="noopener">gooischema</a> voor de landelijke competitie 2024-2025.
    </template>
  </Item>

</template>
