module.exports = {
  env: { browser: true, es2020: true , node: true},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
        "react/prop-types": "off"
  },
}

//eslint-disable-next-line
//style={{ color: "red"}}
//Typing text animation : https://codepen.io/alvarotrigo/pen/ZEJgqLN
//text Animation : https://alvarotrigo.com/blog/css-text-animations/
//Button Animated : https://freefrontend.com/css-buttons/
//npm install react-awesome-reveal @emotion/react --save
//npm install @stripe/react-stripe-js @stripe/stripe-js
//https://github.com/stripe/react-stripe-js
