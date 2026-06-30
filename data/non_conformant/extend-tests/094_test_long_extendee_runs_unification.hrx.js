export default [
  {
    name: 'input.scss',
    data: 'ns|*.foo.bar {a: b}\na.baz {@extend .foo.bar}\n',
  },
  {
    name: 'error',
    data: "Error: compound selectors may no longer be extended.\nConsider `@extend .foo, .bar` instead.\nSee https://sass-lang.com/d/extend-compound for details.\n\n  ,\n2 | a.baz {@extend .foo.bar}\n  |                ^^^^^^^^\n  '\n  input.scss 2:16  root stylesheet\n",
  },
]
