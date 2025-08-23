import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import unusedImports from 'eslint-plugin-unused-imports'
import prettier from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Next.js + TypeScript rules
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Prettier (must be last to disable conflicting rules)
  prettier,

  // Custom rules
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      '@next/next/no-img-element': 'off',
    },
  },
]

export default eslintConfig
