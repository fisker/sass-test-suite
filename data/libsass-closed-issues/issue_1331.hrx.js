export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n$m: (foo: 1px, null: 2px, false: 3px, true: 4px);\n\n@debug $m;\n@debug map.get($m, foo);\n@debug map.get($m, null);\n@debug map.get($m, false);\n@debug map.get($m, true);\n',
  },
  {
    name: 'output.css',
    data: '',
  },
  {
    name: 'warning',
    data: 'input.scss:4 DEBUG: (foo: 1px, null: 2px, false: 3px, true: 4px)\ninput.scss:5 DEBUG: 1px\ninput.scss:6 DEBUG: 2px\ninput.scss:7 DEBUG: 3px\ninput.scss:8 DEBUG: 4px\n',
  },
]
