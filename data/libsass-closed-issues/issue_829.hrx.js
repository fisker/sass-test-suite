export default [
  {
    name: 'input.scss',
    data: '.foo {\n    @media (foo: bar), (bar: baz) {\n        foo: bar;\n\n        @media (foo: bar) {\n            bar: baz;\n        }\n\n        .bar {\n            baz: bam;\n        }\n    }\n }\n\n',
  },
  {
    name: 'output.css',
    data: '@media (foo: bar), (bar: baz) {\n  .foo {\n    foo: bar;\n  }\n}\n@media (foo: bar) and (foo: bar), (bar: baz) and (foo: bar) {\n  .foo {\n    bar: baz;\n  }\n}\n@media (foo: bar), (bar: baz) {\n  .foo .bar {\n    baz: bam;\n  }\n}\n',
  },
]
