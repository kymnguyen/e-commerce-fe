const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    token:"sqp_4284602be497db5c09246b01776ca63bc896c1f0",
    options: {
      "sonar.sources": "./src",
    },
  },
  () => process.exit()
);