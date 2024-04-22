import cfg from '@commitlint/config-lerna-scopes'

export default {
  extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'header-max-length': [2, 'always', '100'],
    'type-enum': [2, 'always', ['chore', 'ci', 'feat', 'fix', 'refactor', 'revert']],
    'scope-enum': async (ctx) => {
      return [1, 'always', [...(await cfg.utils.getPackages(ctx)), 'many']]
    },
  },
}
