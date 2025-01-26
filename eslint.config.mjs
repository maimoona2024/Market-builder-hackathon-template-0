import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Ignore unused variables and imports
      "import/no-anonymous-default-export": "off", // Ignore anonymous default export warnings
    },
    overrides: [
      {
        files: ["./src/app/components/header.tsx"], // Apply rule changes only to the header component
        rules: {
          "@typescript-eslint/no-unused-vars": "off",
        },
      },
      {
        files: ["./src/sanity/schemaTypes/product.ts"], // Apply rule changes only to the product schema
        rules: {
          "import/no-anonymous-default-export": "off",
        },
      },
    ],
  },
];

export default eslintConfig;
