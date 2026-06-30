export default [
  {
    name: 'options.yml',
    data: ':warning_todo:\n  - libsass\n',
  },
  {
    name: 'input.scss',
    data: '@use "sass:color";\n.container {\n  @for $i from 1 through 3 {\n    @at-root .box-#{$i} {\n      color: color.adjust(red,$lightness: -($i * 5%));\n    }\n  }\n\n // Control\n @at-root .outside-child {\n   background-color: blue;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.box-1 {\n  color: rgb(229.5, 0, 0);\n}\n\n.box-2 {\n  color: #cc0000;\n}\n\n.box-3 {\n  color: rgb(178.5, 0, 0);\n}\n\n.outside-child {\n  background-color: blue;\n}\n',
  },
]
