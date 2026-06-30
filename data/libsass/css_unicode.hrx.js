// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/css_unicode.hrx

export default [
  {
    name: 'input.scss',
    data: '@charset "UTF-8";\nfoo {\n  bar: föö bâr; }\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\nfoo {\n  bar: föö bâr;\n}\n',
  },
]
