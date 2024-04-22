import eslintPluginAstro from 'eslint-plugin-astro'
export default [
  {
    extends: ['prettier', ...eslintPluginAstro.configs['flat/recommended']],
    files: ['*.astro', '*.ts', '*.tsx'],
    ignores: ['eslint.config.js', '.vscode/', 'node_modules/', 'dist/'],
  },
]
