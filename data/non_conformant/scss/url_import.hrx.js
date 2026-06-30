// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/url_import.hrx

export default [
  {
    name: 'input.scss',
    data: '@import url(fonts.sass);',
  },
  {
    name: 'output.css',
    data: '@import url(fonts.sass);\n',
  },
]
