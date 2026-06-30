export default [
  {
    name: 'input.scss',
    data: '@media (retained: before) {\n  a {b: c}\n  @media (a: b) {\n    x {y: z}\n  }\n}\n\n// Regression test for sass/dart-sass#453\n@media (retained: after) {\n  @media (a: b) {\n    x {y: z}\n  }\n  a {b: c}\n}\n',
  },
  {
    name: 'output.css',
    data: '@media (retained: before) {\n  a {\n    b: c;\n  }\n}\n@media (retained: before) and (a: b) {\n  x {\n    y: z;\n  }\n}\n\n@media (retained: after) and (a: b) {\n  x {\n    y: z;\n  }\n}\n@media (retained: after) {\n  a {\n    b: c;\n  }\n}\n',
  },
]
