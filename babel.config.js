module.exports = api => {
  api.cache(false)

  return {
    presets: [
      '@babel/preset-react',
      // '@emotion/babel-preset-css-prop',
      '@xstyled/babel-preset-emotion-css-prop',
    ],
  }
}
