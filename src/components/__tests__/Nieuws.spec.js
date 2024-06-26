import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import Nieuws from '../Nieuws.vue';
import Item from '../Item.vue';
import NieuwsItemIcon from '../icons/IconNieuwsItem.vue'

const imgPath = import.meta.env.VITE_IMG_ENDPOINT 

// Mock the environment variables
vi.mock('import.meta', () => ({
  env: {
    VITE_IMG_ENDPOINT: 'https://viteimgendpoint',
    VITE_NIEUWS_ENDPOINT: 'https://vitenieuwsendpoint'
  }
}));

// Mock the fetch call
// Testen van sorteren zou dus moeten met cypress e2e test 
// want dat gebeurt niet in Nieuws component maar in api endpoint.
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      {
        _id: 2,
        visibility: true,
        titel_kort: 'titel 2',
        foto_naam: 'foto-bij-item-2.jpg',
        inhoud_lang: 'nieuwsitem 2'
      },
      {
        _id: 1,
        visibility: false,
        titel_kort: 'titel 1',
        foto_naam: 'foto-bij-item-1.jpg',
        inhoud_lang: 'nieuwsitem 1'
      },
      {
        _id: 3,
        visibility: true,
        titel_kort: 'titel 3',
        foto_naam: 'foto-bij-item-3.jpg',
        inhoud_lang: 'nieuwsitem 3'
      }
    ])
  })
);

describe('Nieuws.vue', () => {
  beforeEach(() => {
    fetch.mockClear()
  });

  it('renders item 2 correctly', async () => {
    const wrapper = mount(Nieuws);
    // Wait for the onMounted lifecycle hook to complete
    await flushPromises()
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(NieuwsItemIcon).exists()).toBe(true)
    expect(wrapper.text()).toContain('titel 2')
    const imgSource = wrapper.find('#2[src="' + imgPath + 'foto-bij-item-2.jpg"]');
    expect(imgSource.exists()).toBe(true)
    expect(wrapper.text()).toContain('nieuwsitem 2')
  });

  it('renders only and all items with visibility true', async () => {
    const wrapper = mount(Nieuws);
    // Wait for the onMounted lifecycle hook to complete
    await flushPromises();
    await wrapper.vm.$nextTick();
    
    // Check that only the item with visibility: true is rendered
    const items = wrapper.findAllComponents(Item);
    expect(items).toHaveLength(2);
    expect(wrapper.text()).toContain('titel 2');
    expect(wrapper.text()).toContain('titel 3');
    expect(wrapper.text()).not.toContain('titel 1');
  });
});
