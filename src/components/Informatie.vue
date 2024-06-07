<script setup>
import Item from './Item.vue'
import BestuurIcon from './icons/IconBestuur.vue'
import WKBIcon from './icons/IconWKB.vue'
import DevIcon from './icons/IconDev.vue'
import Producteisen from '/src/assets/producteisen.pdf'
import packageJson from '../../package.json'

const version = packageJson.version

</script>

<template>

<Item>
    <template #icon>
      <BestuurIcon />
    </template>
    <template #heading>WKB bestuur</template>
    Voorzitter: Gerrit Hendriksen<br>
    Secretaris:  Marissa Tervoert<br>
    Penningmeester: Jo Kimmels<br>

    Bestuursleden: Bennie Berenschot, Marion Derksen, Mark Langewouters (vicevoorzitter), Jan ten Pas<br><br>
    
    <span><font-awesome-icon :icon="['fa', 'phone']" /></span>
    <a class="link" href="tel:+31(0)6 51 35 53 56">+31(0)6 51 35 53 56</a><br>
    <span><font-awesome-icon :icon="['fa', 'envelope']" /></span>
    <a class="link" href="mailto:secretariaatwkb@gmail.com">secretariaatwkb@gmail.com</a>
  </Item>

  <Item>
    <template #icon>
      <WKBIcon />
    </template>
    <template #heading>Over de WKB</template>

    De Winterswijkse Kegelbond (WKB) is opgericht op 27 april 1981 (K.v.K 103042) · Aangesloten bij de Koninklijke Nederlandse Kegel Bond · Aangesloten bij NOC/NSF · Kegelbond gevestigd in Winterswijk.
  </Item>

  <Item>
    <template #icon>
      <DevIcon />
    </template>
    <template #heading>Over de site</template>

    Onder het motto 'het kan altijd beter' zijn er producteisen geformuleerd voor de website. Die kun je <a :href="Producteisen" target="_blank" rel="noopener">hier</a> vinden.
    Dit is versie {{ version }}.
  </Item>

</template>

<style>
.svg-inline--fa {
  margin-right: 5px;
}
</style>