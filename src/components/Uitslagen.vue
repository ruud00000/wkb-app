<script setup>
import Item from './Item.vue'
import HerenIcon from './icons/IconHeren.vue'
import DamesIcon from './icons/IconDames.vue'
import TeamsIcon from './icons/IconTeams.vue'
import UitslagenIcon from './icons/IconUitslagen.vue'

import competitie2023 from '/src/assets/uitslagen/competitie2023.pdf'
import ms2023klasseopen from '/src/assets/uitslagen/ms2023-klasseopen.pdf'
import ms2023klasse23 from '/src/assets/uitslagen/ms2023-klasse23.pdf'

import { ref } from 'vue'

const pdfPath = import.meta.env.VITE_PDF_ENDPOINT 


/* alle pdf's importeren:
Bron: https://discord.com/channels/937808017016119440/937973377883336704/1200214243031658536
<script setup lang="ts" target="_blank" rel="noopener">
const urls = Object.entries(import.meta.glob('/src/assets/*.pdf', { eager: true, as: 'url' })).reduce((acc, [key, value]) => {
  acc.push([key.replace('/src/assets/', ''), value])
  return acc
}, [] as [key: string, url: string][])
<script>
<template>
  <a v-for="url in urls" :key="url[0]" :href="url[1]" target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener">CHA</a>
</template>
*/
/*import { ref } from 'vue'

const fileUrl = (filename) => {
  // Use a data URL to handle the MIME type issue
  const dataUrl = `${pdfPath}${filename}`
  const anchor = document.createElement('a')
  anchor.href = dataUrl
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
}*/
</script>

<template>

  <Item>
    <template #icon>
      <HerenIcon />
    </template>
    <template #heading>Individueel heren</template>
    <template #content>
      <!--TODO: hide url-->
      Hier zijn de uitslagen voor de heren: 
      <a :href="pdfPath + 'CHA.pdf'" target="_blank" rel="noopener">klasse A</a>, 
      <a :href="pdfPath + 'CHB.pdf'" target="_blank" rel="noopener">klasse B</a>, 
      <a :href="pdfPath + 'CHC1.pdf'" target="_blank" rel="noopener">klasse C1</a>, 
      <a :href="pdfPath + 'CHC2.pdf'" target="_blank" rel="noopener">klasse C2</a>.
    </template>
  </Item>

  <Item>
    <template #icon>
      <DamesIcon />
    </template>
    <template #heading>Individueel dames</template>
    <template #content>
      Hier zijn de uitslagen voor de dames: 
      <a :href="pdfPath + 'CDA.pdf'" target="_blank" rel="noopener">klasse A</a>, 
      <a :href="pdfPath + 'CDB.pdf'" target="_blank" rel="noopener">klasse B</a>, 
      <a :href="pdfPath + 'CDC1.pdf'" target="_blank" rel="noopener">klasse C1</a>, 
      <a :href="pdfPath + 'CDC2.pdf'" target="_blank" rel="noopener">klasse C2</a>.
    </template>
  </Item>

  <Item>
    <template #icon>
      <TeamsIcon />
    </template>
    <template #heading>Teams</template>
    <template #content>
      Hier zijn de uitslagen voor de teams: 
      <a :href="pdfPath + 'CHT1.pdf'" target="_blank" rel="noopener">heren 1</a>, 
      <a :href="pdfPath + 'CHT2.pdf'" target="_blank" rel="noopener">heren 2</a>, 
      <a :href="pdfPath + 'CDT1.pdf'" target="_blank" rel="noopener">dames 1</a>, 
      <a :href="pdfPath + 'CDT2.pdf'" target="_blank" rel="noopener">dames 2</a>.
    </template>
  </Item>

  <Item>
    <template #icon>
      <UitslagenIcon />
    </template>
    <template #heading>Uitslagen vorig jaar</template>
    <template #content>
      Hier vind je de uitslagen van de 
      <a :href="competitie2023" target="_blank" rel="noopener">competitie van 2023</a>
      en van de meesterschappen: <a :href="ms2023klasseopen" target="_blank" rel="noopener">open klasse</a> en 
      <a :href="ms2023klasse23" target="_blank" rel="noopener">2e en 3e klasse</a>.
    </template>
  </Item>
</template>
