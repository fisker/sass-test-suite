// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/14_imports.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "a.scss";\n\nfoo {\n  blah: blah;\n  goo {\n    blee: blee;\n    @import "../14_imports/b.scss";\n    hello: world;\n  }\n  @import "sub/c.scss";\n}',
  },
  {
    name: 'a.scss',
    data: 'div {\n  span {\n    moo: goo;\n  }\n}\n\n$x: boo;',
  },
  {
    name: 'b.scss',
    data: 'hoo {\n  mux: scooba-dee-doo;\n  flux: gooboo $x;\n  @import "d.scss";\n}',
  },
  {
    name: 'd.scss',
    data: 'd {\n  inside: d now;\n}',
  },
  {
    name: 'sub/c.scss',
    data: 'blux {\n  hey: another thing;\n  ho: will this work;\n}',
  },
  {
    name: 'output.css',
    data: 'div span {\n  moo: goo;\n}\n\nfoo {\n  blah: blah;\n}\nfoo goo {\n  blee: blee;\n}\nfoo goo hoo {\n  mux: scooba-dee-doo;\n  flux: gooboo boo;\n}\nfoo goo hoo d {\n  inside: d now;\n}\nfoo goo {\n  hello: world;\n}\nfoo blux {\n  hey: another thing;\n  ho: will this work;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n1 | @import "a.scss";\n  |         ^^^^^^^^\n  \'\n    input.scss 1:9  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n7 |     @import "../14_imports/b.scss";\n  |             ^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 7:13  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n   ,\n10 |   @import "sub/c.scss";\n   |           ^^^^^^^^^^^^\n   \'\n    input.scss 10:11  root stylesheet\n\nDEPRECATION WARNING [import]: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.\n\nMore info and automated migrator: https://sass-lang.com/d/import\n\n  ,\n4 |   @import "d.scss";\n  |           ^^^^^^^^\n  \'\n    b.scss 4:11      @import\n    input.scss 7:13  root stylesheet\n',
  },
]
