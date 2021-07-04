module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: [
    'html' // 此插件用来识别.html 和 .vue文件中的js代码
  ],
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/typescript/recommended', '@vue/prettier', '@vue/prettier/@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-unused-vars': 'warn',
    'vue/no-unused-vars': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    semi: 0, //关闭结尾不能有分号
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
