export default [
  {
    name: 'complex/input.scss',
    data: 'a b {\n  a: b;\n}\nc {\n  @extend a b;\n}\n',
  },
  {
    name: 'complex/error',
    data: "Error: complex selectors may not be extended.\n  ,\n5 |   @extend a b;\n  |           ^^^\n  '\n  input.scss 5:11  root stylesheet\n",
  },
  {
    name: 'compound/input.scss',
    data: 'a:hover {\n  a: b;\n}\nb {\n  @extend a:hover;\n}\n',
  },
  {
    name: 'compound/error',
    data: "Error: compound selectors may no longer be extended.\nConsider `@extend a, :hover` instead.\nSee https://sass-lang.com/d/extend-compound for details.\n\n  ,\n5 |   @extend a:hover;\n  |           ^^^^^^^\n  '\n  input.scss 5:11  root stylesheet\n",
  },
  {
    name: 'no_selector/input.scss',
    data: 'a {@extend}\n',
  },
  {
    name: 'no_selector/error',
    data: "Error: expected selector.\n  ,\n1 | a {@extend}\n  |           ^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
]
