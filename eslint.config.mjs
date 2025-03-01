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
      // Disable warnings about missing dependencies in useEffect
      "react-hooks/exhaustive-deps": "off",
      
      // Disable errors for using var (not recommended)
      "no-var": "off",
      
      // Disable TypeScript's "any" type errors (not recommended)
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@next/next/no-img-element": "off",
      "prefer-const": "off",
    },
  },
];

export default eslintConfig;
