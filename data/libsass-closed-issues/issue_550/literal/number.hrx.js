export default [
  {
    name: 'input.scss',
    data: '#foo {\n  a: 10.0001;\n  b: 10.01;\n  c: -10.0001;\n  d: -10.01; }\n\n#foo {\n  a: 0.0001;\n  b: 0.01;\n  c: -0.0001;\n  d: -0.01; }\n\n#foo {\n  a: .0001;\n  b: .01;\n  c: -.0001;\n  d: -.01; }\n',
  },
  {
    name: 'output.css',
    data: '#foo {\n  a: 10.0001;\n  b: 10.01;\n  c: -10.0001;\n  d: -10.01;\n}\n\n#foo {\n  a: 0.0001;\n  b: 0.01;\n  c: -0.0001;\n  d: -0.01;\n}\n\n#foo {\n  a: 0.0001;\n  b: 0.01;\n  c: -0.0001;\n  d: -0.01;\n}\n',
  },
]
