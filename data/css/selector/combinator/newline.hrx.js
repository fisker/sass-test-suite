export default [
  {
    name: 'child/before/input.sass',
    data: 'a \n> b\n  c: d\n',
  },
  {
    name: 'child/before/output.css',
    data: '> b {\n  c: d;\n}\n',
  },
  {
    name: 'child/before/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | a \n  | ^^\n  '\n    input.sass 1:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector \"> b\" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | > b\n  | ^^^\n  '\n    input.sass 2:1  root stylesheet\n",
  },
  {
    name: 'child/after/input.sass',
    data: 'a >\nb\n  c: d\n',
  },
  {
    name: 'child/after/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'child/after/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | a >\n  | ^^^\n  '\n    input.sass 1:1  root stylesheet\n",
  },
  {
    name: 'next_sibling/before/input.sass',
    data: 'a \n+ b\n  c: d\n',
  },
  {
    name: 'next_sibling/before/output.css',
    data: '+ b {\n  c: d;\n}\n',
  },
  {
    name: 'next_sibling/before/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | a \n  | ^^\n  '\n    input.sass 1:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector \"+ b\" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | + b\n  | ^^^\n  '\n    input.sass 2:1  root stylesheet\n",
  },
  {
    name: 'next_sibling/after/input.sass',
    data: 'a +\nb\n  c: d\n',
  },
  {
    name: 'next_sibling/after/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'next_sibling/after/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | a +\n  | ^^^\n  '\n    input.sass 1:1  root stylesheet\n",
  },
  {
    name: 'subsequent_sibling/before/input.sass',
    data: 'a \n~ b\n  c: d\n',
  },
  {
    name: 'subsequent_sibling/before/output.css',
    data: '~ b {\n  c: d;\n}\n',
  },
  {
    name: 'subsequent_sibling/before/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | a \n  | ^^\n  '\n    input.sass 1:1  root stylesheet\n\nDEPRECATION WARNING [bogus-combinators]: The selector \"~ b\" is invalid CSS.\nThis will be an error in Dart Sass 2.0.0.\n\nMore info: https://sass-lang.com/d/bogus-combinators\n\n  ,\n2 | ~ b\n  | ^^^\n  '\n    input.sass 2:1  root stylesheet\n",
  },
  {
    name: 'subsequent_sibling/after/input.sass',
    data: 'a ~\nb\n  c: d\n',
  },
  {
    name: 'subsequent_sibling/after/output.css',
    data: 'b {\n  c: d;\n}\n',
  },
  {
    name: 'subsequent_sibling/after/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n1 | a ~\n  | ^^^\n  '\n    input.sass 1:1  root stylesheet\n",
  },
]
