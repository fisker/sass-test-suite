// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/variable-scoping/defaults-global-null.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  $foo: null !default !global;\n  $foo: inner !default !global;\n  $foo: null !default !global;\n  $foo: lexical;\n  inner { foo: $foo; }\n}\n\n$foo: null !default !global;\n$foo: outer !default !global;\n$foo: null !default !global;\nouter { foo: $foo; }\n\ndiv {\n  $foo: null !default !global;\n  $foo: footer !default !global;\n  $foo: null !default !global;\n  $foo: lexical;\n  inner { foo: $foo; }\n}\n',
  },
  {
    name: 'output.css',
    data: 'div inner {\n  foo: lexical;\n}\n\nouter {\n  foo: inner;\n}\n\ndiv inner {\n  foo: lexical;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [new-global]: As of Dart Sass 2.0.0, !global assignments won't be able to declare new variables.\n\nRecommendation: add `$foo: null` at the stylesheet root.\n\n  ,\n2 |   $foo: null !default !global;\n  |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:3  root stylesheet\n",
  },
]
