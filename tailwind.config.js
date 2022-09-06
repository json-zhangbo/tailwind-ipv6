module.exports = {
  content: [],
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
    },
  },
  configureWebpack:{
    resolve: {
      alias: {
        // vue$: 'vue/dist/vue.esm.js',
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
         '@': './src',
      },
    },
  },
  plugins: [],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px', 
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  }
}
