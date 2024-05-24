const Configuration = { 
    extends: ['@commitlint/config-conventional'], 
    parserPreset: 'conventional-changelog-atom',
    formatter: '@commitlint/format',
    helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',
}

export default Configuration;