export default [
  {
    name: 'input.scss',
    data: '\n$query-string: "(min-width: 0) and (max-width: 599px),  (min-width: 600px) and (max-width: 899px)";\n@media #{$query-string} {\n  .foo {\n    content: bar;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (min-width: 0) and (max-width: 599px), (min-width: 600px) and (max-width: 899px) {\n  .foo {\n    content: bar;\n  }\n}\n',
  },
]
