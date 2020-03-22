module.exports = {
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsConfigFIle: "tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/test/**/*.test.(ts|js)"]
};
