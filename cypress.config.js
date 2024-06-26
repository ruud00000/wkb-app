import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173', 
    setupNodeEvents(on, config) {
      const environment = config.env.environment || 'dev'
      config.env = { ...config.env, ...config.env[environment] }
      return config
    }
  },
  env: {
    dev: {
      hrefRonde5: '/src/assets/agenda/Rooster-5e-ronde-WKB-competitie.pdf', 
      hrefRonde6: '/src/assets/agenda/Rooster-6e-ronde-WKB-competitie.pdf', 
      hrefGooischema: '/src/assets/agenda/Landelijke-competitie-schema-2024-2025.pdf',
      hrefProducteisen: '/src/assets/producteisen.pdf',
      hrefCompetitie: '/src/assets/uitslagen/competitie2023.pdf',
      hrefMsklasseopen: '/src/assets/uitslagen/ms2023-klasseopen.pdf',
      hrefMsklase23: '/src/assets/uitslagen/ms2023-klasse23.pdf'
    },
    prod: {
      hrefRonde5: '/assets/Rooster-5e-ronde-WKB-competitie-BlIfG3Aj.pdf', 
      hrefRonde6: '/assets/Rooster-6e-ronde-WKB-competitie-CRYDtl7e.pdf', 
      hrefGooischema: '/assets/Landelijke-competitie-schema-2024-2025-BIoSgmIA.pdf', 
      hrefProducteisen: '/assets/producteisen-C5odOMfO.pdf',
      hrefCompetitie: '/assets/competitie2023-BgZl3W8e.pdf', 
      hrefMsklasseopen: '/assets/ms2023-klasseopen-Bk3wKqKF.pdf',
      hrefMsklase23: '/assets/ms2023-klasse23-Bn8uP8xj.pdf'
    }
  }  
})
