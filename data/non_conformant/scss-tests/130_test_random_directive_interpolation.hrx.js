export default [
  {
    name: 'input.scss',
    data: "$domain: \"sass-lang.com\";\n@foo url(https://#{$domain}/),\n     #{domain($domain)},\n     \"foo#{'ba' + 'r'}baz\",\n     foo#{'ba' + 'r'}baz {\n  .foo {a: b}\n}\n",
  },
  {
    name: 'output.css',
    data: '@foo url(https://sass-lang.com/),\n     domain("sass-lang.com"),\n     "foobarbaz",\n     foobarbaz {\n  .foo {\n    a: b;\n  }\n}\n',
  },
]
