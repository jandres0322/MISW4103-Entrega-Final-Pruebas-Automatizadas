module.exports = {
  e2e: {
    setupNodeEvents(on, config) {},
    env: {
      apiUrl: "http://localhost:2368/ghost",
      ghostVersionReleaseCandidate: "5.98.1",
      ghostVersionBase: "4.5.0",
    },
  },
};
