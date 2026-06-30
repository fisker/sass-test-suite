// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/css_selector_comments.hrx

export default [
  {
    name: 'input.scss',
    data: '.foo #bar:baz(bip) {\n  a: b; }\n',
  },
  {
    name: 'output.css',
    data: '.foo #bar:baz(bip) {\n  a: b;\n}\n',
  },
]
