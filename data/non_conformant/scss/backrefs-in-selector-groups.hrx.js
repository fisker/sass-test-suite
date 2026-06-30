export default [
  {
    name: 'input.scss',
    data: 'a {\n  &:c, & d {\n    hey: ho;\n  }\n}\n\na b {\n  &:c, & d {\n    hey: ho;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'a:c, a d {\n  hey: ho;\n}\n\na b:c, a b d {\n  hey: ho;\n}\n',
  },
]
