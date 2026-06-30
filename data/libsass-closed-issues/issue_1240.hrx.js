export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$var: 1;\n$list: 2, 3;\n$new-list: list.append($var, $list);\n$nested-list: $var $list;\n@debug($var);\n@debug($list);\n@debug($new-list);\n@debug($nested-list);\ndiv {\n a: $var;\n a: $list;\n a: $new-list;\n a: $nested-list;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  a: 1;\n  a: 2, 3;\n  a: 1 2, 3;\n  a: 1 2, 3;\n}\n',
  },
  {
    name: 'warning',
    data: 'input.scss:6 DEBUG: 1\ninput.scss:7 DEBUG: 2, 3\ninput.scss:8 DEBUG: 1 (2, 3)\ninput.scss:9 DEBUG: 1 (2, 3)\n',
  },
]
