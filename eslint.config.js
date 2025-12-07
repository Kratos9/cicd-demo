// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({})

export default [
  // Reglas recomendadas
  ...compat.extends("eslint:recommended"),

  {
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    }
  }
];
