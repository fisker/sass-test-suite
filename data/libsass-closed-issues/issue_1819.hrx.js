export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@use "sass:selector";\nfoo {\n  bar: meta.type-of(selector.unify(\'p\', \'a\'));\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  bar: null;\n}\n',
  },
]
