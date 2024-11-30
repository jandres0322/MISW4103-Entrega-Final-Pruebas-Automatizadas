module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true, // Activa la grabación de videos
    videoUploadOnPasses: false, // Guarda los videos incluso si las pruebas pasan
    videosFolder: 'cypress/videos', // Carpeta donde se guardan los videos
    screenshotsFolder: 'cypress/screenshots', // Carpeta donde se guardan las capturas de pantalla
    screenshotOnRunFailure: true, // Captura pantalla automáticamente en fallos
  },
};
