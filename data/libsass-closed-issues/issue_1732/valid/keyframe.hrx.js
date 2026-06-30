export default [
  {
    name: 'input.scss',
    data: '@keyframes baz {\n  0% { top: 0; bottom: 100; }\n  100% { top: 100; bottom: 0; }\n}',
  },
  {
    name: 'output.css',
    data: '@keyframes baz {\n  0% {\n    top: 0;\n    bottom: 100;\n  }\n  100% {\n    top: 100;\n    bottom: 0;\n  }\n}\n',
  },
]
