import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Informatie from '../Informatie.vue'
import packageJson from '../../../package.json'
import BestuurIcon from '../icons/IconBestuur.vue'
import WKBIcon from '../icons/IconWKB.vue'
import DevIcon from '../icons/IconDev.vue'

describe('Informatie.vue', () => {
  it('renders WKB bestuur correctly', async () => {
    const wrapper = mount(Informatie)
    expect(wrapper.findComponent(BestuurIcon).exists()).toBe(true)
    expect(wrapper.text()).toContain('WKB bestuur')
    expect(wrapper.text()).toContain('Voorzitter: Gerrit Hendriksen')
    expect(wrapper.text()).toContain('Secretaris: Marissa Tervoert')
    expect(wrapper.text()).toContain('Penningmeester: Jo Kimmels')
    expect(wrapper.text()).toContain('Bestuursleden: Bennie Berenschot, Marion Derksen, Mark Langewouters (vicevoorzitter), Jan ten Pas')
    expect(wrapper.find('#tel').attributes('href')).toBe('tel:+31(0)6 51 35 53 56')
    expect(wrapper.find('#email').attributes('href')).toBe('mailto:secretariaatwkb@gmail.com')
  })
  
  it('renders Over de WKB correctly', async () => {
    const wrapper = mount(Informatie)
    expect(wrapper.findComponent(WKBIcon).exists()).toBe(true)
    expect(wrapper.text()).toContain('Over de WKB')
    expect(wrapper.text()).toContain('De Winterswijkse Kegelbond (WKB) is opgericht op 27 april 1981 (K.v.K 103042) · Aangesloten bij de Koninklijke Nederlandse Kegel Bond · Aangesloten bij NOC/NSF · Kegelbond gevestigd in Winterswijk.')
  })

  it('renders Over de site correctly', async () => {
    const wrapper = mount(Informatie)
    expect(wrapper.findComponent(DevIcon).exists()).toBe(true)
    expect(wrapper.text()).toContain('Over de site')
    expect(wrapper.text()).toContain(`Onder het motto 'het kan altijd beter' zijn er producteisen geformuleerd voor de website. Die kun je hier vinden. Dit is versie`)
    expect(wrapper.find('#producteisen').attributes('href')).toBe('/src/assets/producteisen.pdf')
    expect(wrapper.text()).toContain(`Dit is versie ${packageJson.version}`)
  })
})
