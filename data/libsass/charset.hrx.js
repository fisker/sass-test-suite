// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/charset.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\ndiv {\n  content: string.to-upper-case("øáéíóúüñ¿éàŤǅǂɊɱʭʬѪ҈ݓ");\n}\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\ndiv {\n  content: "øáéíóúüñ¿éàŤǅǂɊɱʭʬѪ҈ݓ";\n}\n',
  },
]
