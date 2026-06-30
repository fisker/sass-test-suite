// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2140.hrx

export default [
  {
    name: 'input.scss',
    data: '$red: red;\n$foo: red;\n\n:root {\n  --red: #f00;\n  // --red: $red;\n  // --red: $foo;\n}\n\na { content: var(--red) }\na { content: var(--$red) }\na { content: var(--$foo) }\n\nb { content: (- red) }\nb { content: (- $red) }\nb { content: (- $foo) }\n\nc { content: (+- red) }\nc { content: (+- $red) }\nc { content: (+- $foo) }\n\nd { content: (-red) }\nd { content: (-$red) }\nd { content: (-$foo) }\n\ne { content: (+ red) }\ne { content: (+ $red) }\ne { content: (+ $foo) }',
  },
  {
    name: 'output.css',
    data: ':root {\n  --red: #f00;\n}\n\na {\n  content: var(--red);\n}\n\na {\n  content: var(-- red);\n}\n\na {\n  content: var(-- red);\n}\n\nb {\n  content: -red;\n}\n\nb {\n  content: -red;\n}\n\nb {\n  content: -red;\n}\n\nc {\n  content: +-red;\n}\n\nc {\n  content: +-red;\n}\n\nc {\n  content: +-red;\n}\n\nd {\n  content: -red;\n}\n\nd {\n  content: -red;\n}\n\nd {\n  content: -red;\n}\n\ne {\n  content: +red;\n}\n\ne {\n  content: +red;\n}\n\ne {\n  content: +red;\n}\n',
  },
]
