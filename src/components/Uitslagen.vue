<script setup>
import Item from './Item.vue'
import HerenIcon from './icons/IconHeren.vue'
import DamesIcon from './icons/IconDames.vue'
import TeamsIcon from './icons/IconTeams.vue'
import UitslagenIcon from './icons/IconUitslagen.vue'
import CHA from '/src/assets/uitslagen/CHA.pdf'
import CHB from '/src/assets/uitslagen/CHB.pdf'
import CHC1 from '/src/assets/uitslagen/CHC1.pdf'
import CHC2 from '/src/assets/uitslagen/CHC2.pdf'
import CDA from '/src/assets/uitslagen/CDA.pdf'
import CDB from '/src/assets/uitslagen/CDB.pdf'
import CDC1 from '/src/assets/uitslagen/CDC1.pdf'
import CDC2 from '/src/assets/uitslagen/CDC2.pdf'
import CHT1 from '/src/assets/uitslagen/CHT1.pdf'
import CHT2 from '/src/assets/uitslagen/CHT2.pdf'
import CDT1 from '/src/assets/uitslagen/CDT1.pdf'
import CDT2 from '/src/assets/uitslagen/CDT2.pdf'
import competitie2023 from '/src/assets/uitslagen/competitie2023.pdf'
import ms2023klasseopen from '/src/assets/uitslagen/ms2023-klasseopen.pdf'
import ms2023klasse23 from '/src/assets/uitslagen/ms2023-klasse23.pdf'

</script>

<template>

  <Item>
    <template #icon>
      <HerenIcon />
    </template>
    <template #heading>Individueel heren</template>

    Hier zijn de uitslagen voor de heren: 
    <a :href="CHA">klasse A</a>, 
    <a :href="CHB">klasse B</a>, 
    <a :href="CHC1">klasse C1</a>, 
    <a :href="CHC2">klasse C2</a>.
  </Item>

  <Item>
    <template #icon>
      <DamesIcon />
    </template>
    <template #heading>Individueel dames</template>

    Hier zijn de uitslagen voor de dames: 
    <a :href="CDA">klasse A</a>, 
    <a :href="CDB">klasse B</a>, 
    <a :href="CDC1">klasse C1</a>, 
    <a :href="CDC2">klasse C2</a>.
  </Item>

  <Item>
    <template #icon>
      <TeamsIcon />
    </template>
    <template #heading>Teams</template>

    Hier zijn de uitslagen voor de teams: 
    <a :href="CHT1">heren 1</a>, 
    <a :href="CDT1">dames 1</a>, 
    <a :href="CHT2">heren 2</a>, 
    <a :href="CDT2">dames 2</a>.
  </Item>

  <Item>
    <template #icon>
      <UitslagenIcon />
    </template>
    <template #heading>Uitslagen vorig jaar</template>

    Hier vind je de uitslagen van de 
    <a :href="competitie2023">competitie van 2023</a>
    en van de meesterschappen: <a :href="ms2023klasseopen">open klasse</a> en 
    <a :href="ms2023klasse23">2e en 3e klasse</a>.
    <!-- target="_blank" rel="noopener" -->
  </Item>
</template>
