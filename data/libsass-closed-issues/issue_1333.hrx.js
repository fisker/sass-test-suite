export default [
  {
    name: 'input.scss',
    data: "@function baz() {\n    @return 'baz';\n}\n\nfoo {\n    bar: baz()#{' !important'};\n    bar: baz() #{' !important'};\n}\n\n",
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: "baz"  !important;\n  bar: "baz"  !important;\n}\n',
  },
]
