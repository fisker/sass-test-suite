export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @if true {\n    foo: true;\n  } @elseif true {\n    foo: false;\n  } @else {\n    foo: false;\n  }\n\n  @if true {\n    bar: true;\n  } @else if true {\n    bar: false;\n  } @else {\n    bar: false;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  foo: true;\n  bar: true;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [elseif]: @elseif is deprecated and will not be supported in future Sass versions.\n\nRecommendation: @else if\n\n  ,\n4 |   } @elseif true {\n  |     ^^^^^^^\n  '\n    input.scss 4:5  root stylesheet\n",
  },
]
