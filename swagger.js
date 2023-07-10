const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "ExpressJS API",
    description: "Deployed on vercel",
  },
  host: "expressjs-vercel-mu.vercel.app",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./index.js");
});
