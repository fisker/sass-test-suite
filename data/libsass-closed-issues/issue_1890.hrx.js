export default [
  {
    name: 'input.scss',
    data: '.wrap {\n  @media (min-width: 480px) { \n    display: block;\n    @at-root (without: media){ \n      .box { \n        display: inline-block;\n      }\n    } \n  }\n}',
  },
  {
    name: 'output.css',
    data: '@media (min-width: 480px) {\n  .wrap {\n    display: block;\n  }\n}\n.wrap .box {\n  display: inline-block;\n}\n',
  },
]
