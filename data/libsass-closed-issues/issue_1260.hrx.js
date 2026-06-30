export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$EQ-Selectors: ();\n\n.el {\n    $EQ-Selectors: list.append($EQ-Selectors, &, \'comma\') !global;\n}\n\nhtml:before {\n  content: "#{$EQ-Selectors}";\n}',
  },
  {
    name: 'output.css',
    data: 'html:before {\n  content: ".el";\n}\n',
  },
]
