// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/extend-tests/escaped_selector.hrx

export default [
  {
    name: 'input.scss',
    data: "// Escapes in selectors' identifiers should be normalized before `@extend` is\n// applied.\n.foo {escape: none}\n\\.foo {escape: slash dot}\n\\2E foo {escape: hex}\n\n.bar {@extend \\02e foo}\n",
  },
  {
    name: 'output.css',
    data: '.foo {\n  escape: none;\n}\n\n\\.foo, .bar {\n  escape: slash dot;\n}\n\n\\.foo, .bar {\n  escape: hex;\n}\n',
  },
]
