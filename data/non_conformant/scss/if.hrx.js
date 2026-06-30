// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/if.hrx

export default [
  {
    name: 'input.scss',
    data: '@if false {\n  div {\n    color: red;\n  }\n}\n@else if true {\n  span {\n    color: blue;\n  }\n}\n\ndiv {\n  @if true {\n    color: green;\n  }\n  @if false {\n    height: 10px;\n  }\n  @else if false {\n    height: 20px;\n  }\n  @else if false {\n    height: 30px;\n  }\n  @else {\n    height: 40px;\n  }\n}',
  },
  {
    name: 'output.css',
    data: 'span {\n  color: blue;\n}\n\ndiv {\n  color: green;\n  height: 40px;\n}\n',
  },
]
