<script setup>
import Item from './Item.vue'
import AgendaCompetitieIcon from './icons/IconAgendaCompetitie.vue'
import AgendaLandelijkeCompetitieIcon from './icons/IconAgendaLandelijkeCompetitie.vue'
import AgendaCompetitieRonde5 from '/src/assets/agenda/Rooster-5e-ronde-WKB-competitie.pdf'
import AgendaCompetitieRonde6 from '/src/assets/agenda/Rooster-6e-ronde-WKB-competitie.pdf'
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
    <template #heading>Bedrijfskegelen</template>
    <template #content>
      Hier is het  
      <a :href="AgendaBedrijfskegelen" target="_blank" rel="noopener">schema</a> 
      voor het bedrijfskegelen voor 2025.    
    </template>
  </Item>

  <!--<Item>
    <template #icon>
      <AgendaCompetitieIcon />
    </template>
    <template #heading>Competitiedata</template>
    <template #content>
      Er zijn nog twee rondes te gaan in de competitie van 2024: 
      <a :href="AgendaCompetitieRonde5" target="_blank" rel="noopener">ronde 5</a> en 
      <a :href="AgendaCompetitieRonde6" target="_blank" rel="noopener">ronde 6</a>.    
    </template>
  </Item>-->

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
