import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Agenda from '../Agenda.vue'
import Item from '../Item.vue'
import AgendaCompetitieIcon from '../icons/IconAgendaCompetitie.vue'
import AgendaLandelijkeCompetitieIcon from '../icons/IconAgendaLandelijkeCompetitie.vue'

describe('Agenda.vue', () => {
  let wrapper

  beforeEach(() => {
    // Mount the component before each test
    wrapper = mount(Agenda)
  })

  it('renders all links', async () => {
    const links = wrapper.findAll('a');
    expect(links).toHaveLength(3);
  })

  it('renders Competitiedata correctly', async () => {
    expect(wrapper.findComponent(AgendaCompetitieIcon).exists()).toBe(true)
    expect(wrapper.text()).toContain('Competitiedata')
    expect(wrapper.text()).toContain('Er zijn nog twee rondes te gaan in de competitie van 2024: ronde 5 en ronde 6.')
    
    const ronde5Link = wrapper.find('a[href="/src/assets/agenda/Rooster-5e-ronde-WKB-competitie.pdf"]');
    expect(ronde5Link.exists()).toBe(true);

    const ronde6Link = wrapper.find('a[href="/src/assets/agenda/Rooster-6e-ronde-WKB-competitie.pdf"]');
    expect(ronde6Link.exists()).toBe(true);  })
  
  it('renders Landelijke competitie correctly', async () => {
    expect(wrapper.findComponent(AgendaLandelijkeCompetitieIcon).exists()).toBe(true)
    expect(wrapper.text()).toContain('Landelijke competitie')
    expect(wrapper.text()).toContain('Hier is het gooischema voor de landelijke competitie 2024-2025.')
    
    const gooischemaLink = wrapper.find('a[href="/src/assets/agenda/Landelijke-competitie-schema-2024-2025.pdf"]');
    expect(gooischemaLink.exists()).toBe(true);
   })

})
