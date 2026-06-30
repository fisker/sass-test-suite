// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/sass/selectors.hrx

export default [
  {
    name: 'input.sass',
    data: '.test\r\n  foo: bar\r\n  ~\r\n    tilde: true\r\n  +\r\n    adjancent: true\r\n  >\r\n    child: true\r\n  *\r\n    universal: true\r\n  [foo]\r\n    attribute: true\r\n\r\n@mixin selector-2()\r\n  foo: bar\r\n\r\n.selector-0\r\n  + .selector-1\r\n    color: rebeccapurple\r\n  = selector-2\r\n    color: yellow\r\n\r\nmultiple, lines,\r\nseparated by,\r\ncommas\r\n  and,\r\n  indented\r\n    x: y\r\n',
  },
  {
    name: 'output.css',
    data: '.test {\n  foo: bar;\n}\n.test * {\n  universal: true;\n}\n.test [foo] {\n  attribute: true;\n}\n\n.selector-0 + .selector-1 {\n  color: rebeccapurple;\n}\n\nmultiple and,\nmultiple indented, lines and,\nlines indented,\nseparated by and,\nseparated by indented,\ncommas and,\ncommas indented {\n  x: y;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [bogus-combinators]: The selector ".test ~" is only valid for nesting and shouldn\'t\nhave children other than style rules. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n3 |   ~\r\n  |   ^ invalid selector\n4 |     tilde: true\r\n  |     =========== this is not a style rule\n  \'\n    input.sass 3:3  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector ".test +" is only valid for nesting and shouldn\'t\nhave children other than style rules. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n5 |   +\r\n  |   ^ invalid selector\n6 |     adjancent: true\r\n  |     =============== this is not a style rule\n  \'\n    input.sass 5:3  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector ".test >" is only valid for nesting and shouldn\'t\nhave children other than style rules. It will be omitted from the generated CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n7 |   >\r\n  |   ^ invalid selector\n8 |     child: true\r\n  |     =========== this is not a style rule\n  \'\n    input.sass 7:3  root stylesheet\n',
  },
]
