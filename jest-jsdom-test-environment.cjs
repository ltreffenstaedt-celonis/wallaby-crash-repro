const { TestEnvironment: JSDOMEnvironment } = require("jest-environment-jsdom");

module.exports = class CustomJSDOMEnvironment extends JSDOMEnvironment {
  constructor(...args) {
    super(...args);

    this.global.structuredClone = structuredClone;
  }
};
