// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/error/member.hrx

export default [
  {
    name: 'README.md',
    data: 'Members from modules loaded by `load-css` are not avaialable in the loading\nmodule.\n',
  },
  {
    name: 'global/input.scss',
    data: '@use "sass:meta";\n@meta.load-css("other");\n\na {b: $c}\n',
  },
  {
    name: 'global/_other.scss',
    data: '$c: d;\n',
  },
  {
    name: 'global/error',
    data: "Error: Undefined variable.\n  ,\n4 | a {b: $c}\n  |       ^^\n  '\n  input.scss 4:7  root stylesheet\n",
  },
  {
    name: 'namespace/input.scss',
    data: '@use "sass:meta";\n@meta.load-css("other");\n\na {b: other.$c}\n',
  },
  {
    name: 'namespace/_other.scss',
    data: '$c: d;\n',
  },
  {
    name: 'namespace/error',
    data: 'Error: There is no module with the namespace "other".\n  ,\n4 | a {b: other.$c}\n  |       ^^^^^^^^\n  \'\n  input.scss 4:7  root stylesheet\n',
  },
]
