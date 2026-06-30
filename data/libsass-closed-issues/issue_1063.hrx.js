export default [
  {
    name: 'input.scss',
    data: '%foo {\n  & > x { display: block; }\n}\n\na {\n  > b { @extend %foo; }\n  > b > c { @extend %foo; }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a > b > c > x, a > b > x {\n  display: block;\n}\n',
  },
]
