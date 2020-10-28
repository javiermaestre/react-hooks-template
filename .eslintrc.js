module.exports = {
  root: true,
  extends: [
    '@javiermaestre/eslint-config/core',
    '@javiermaestre/eslint-config/react',
    '@javiermaestre/eslint-config/react-hooks',
    '@javiermaestre/eslint-config/react-typescript'
  ],
  rules: { 'react-hooks/exhaustive-deps': 'warn', radix: 'off' }
};
