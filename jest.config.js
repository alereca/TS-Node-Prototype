module.export = {
  globals: {
    "ts-jest": {
      tsConfigFIle: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/test/**/*.test.(ts|js"],
  testEnvironment: "node"
};

// It's a sequence, first code is compiled from ts to js, then the test are executed
// in a node environment
