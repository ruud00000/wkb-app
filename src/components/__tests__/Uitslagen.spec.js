// Import necessary Vitest functions
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref, onmounted } from 'vue';

// Import the components to be tested
import Uitslagen from '../Uitslagen.vue'
import Item from '../Item.vue'

import competitie2023 from '/src/assets/uitslagen/competitie2023.pdf'
import ms2023klasseopen from '/src/assets/uitslagen/ms2023-klasseopen.pdf'
import ms2023klasse23 from '/src/assets/uitslagen/ms2023-klasse23.pdf'

// Start writing your test suites
/* test('Uitslagen renders correctly', () => {
  // Mount the component
  const wrapper = mount(Uitslagen);

  // Your assertions go here
  // Example: Assert that the component contains certain elements or text
  const links = wrapper.findAll('a')
  assert.equal(links.length, 15, 'Should have 15 links');
}); */

/* test('Uitslagen logic test', () => {
  // Mount the component
  const wrapper = mount(Uitslagen);

  // Access component properties and test their values
  assert.equal(wrapper.instance.pdfPath, import.meta.env.VITE_PDF_ENDPOINT, 'pdfPath should match environment variable');

  // Example: Simulate a change in the environment variable and check if the component updates
  import.meta.env.VITE_PDF_ENDPOINT = 'new/pdf/path';
  wrapper.update();
  assert.equal(wrapper.instance.pdfPath, 'new/pdf/path', 'pdfPath should update with environment variable change');
}); */



  describe('Uitslagen.vue', () => {
    it('renders 4 Item components', async () => {
      // Create Vite app instance
      const app = await mount(Uitslagen)
  
      // Access the rendered component
      const component = app.getComponent(Uitslagen)
  
      // Check if there are four links in the component
      expect(component.findAllComponents(Item)).toHaveLength(4);     

    })

    it('renders hrefs correctly', async () => {
        // Create Vite app instance
        const app = await mount(Uitslagen)
    
        // Access the rendered component
        const component = app.getComponent(Uitslagen)
    
        // Check if there are 15 links in the component
        expect(component.findAll('a')).toHaveLength(15);

        // Further assertions for each link's href
        const links = component.findAll('a')
          
        const pdfPath = import.meta.env.VITE_PDF_ENDPOINT 

        // Assuming pdfPath is a prop passed to Uitslagen component
        expect(links[0].attributes('href')).toContain(pdfPath + 'CHA.pdf')
        expect(links[1].attributes('href')).toContain(pdfPath + 'CHB.pdf')
        expect(links[2].attributes('href')).toContain(pdfPath + 'CHC1.pdf')
        expect(links[3].attributes('href')).toContain(pdfPath + 'CHC2.pdf')

        expect(links[4].attributes('href')).toContain(pdfPath + 'CDA.pdf')
        expect(links[5].attributes('href')).toContain(pdfPath + 'CDB.pdf')
        expect(links[6].attributes('href')).toContain(pdfPath + 'CDC1.pdf')
        expect(links[7].attributes('href')).toContain(pdfPath + 'CDC2.pdf')
        
        expect(links[8].attributes('href')).toContain(pdfPath + 'CHT1.pdf')
        expect(links[9].attributes('href')).toContain(pdfPath + 'CHT2.pdf')
        expect(links[10].attributes('href')).toContain(pdfPath + 'CDT1.pdf')
        expect(links[11].attributes('href')).toContain(pdfPath + 'CDT2.pdf')
        
        expect(links[12].attributes('href')).toContain(competitie2023)
        expect(links[13].attributes('href')).toContain(ms2023klasseopen)
        expect(links[14].attributes('href')).toContain(ms2023klasse23)

        expect(links[0].text()).toBe('klasse A')
        expect(links[1].text()).toBe('klasse B')
        expect(links[2].text()).toBe('klasse C1')
        expect(links[3].text()).toBe('klasse C2')

        expect(links[4].text()).toBe('klasse A')
        expect(links[5].text()).toBe('klasse B')
        expect(links[6].text()).toBe('klasse C1')
        expect(links[7].text()).toBe('klasse C2')

        expect(links[8].text()).toBe('heren 1')
        expect(links[9].text()).toBe('heren 2')
        expect(links[10].text()).toBe('dames 1')
        expect(links[11].text()).toBe('dames 2')

        expect(links[12].text()).toBe('competitie van 2023')
        expect(links[13].text()).toBe('open klasse')
        expect(links[14].text()).toBe('2e en 3e klasse')
   
      })

  })

