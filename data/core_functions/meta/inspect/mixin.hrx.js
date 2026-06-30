export default [
  {
    name: 'user_defined/input.scss',
    data: '@use "sass:meta";\n@mixin a() {}\na {b: meta.inspect(meta.get-mixin(a))};\n',
  },
  {
    name: 'user_defined/output.css',
    data: 'a {\n  b: get-mixin("a");\n}\n',
  },
  {
    name: 'builtin/input.scss',
    data: '@use "sass:meta";\na {b: meta.inspect(meta.get-mixin(load-css, meta))};\n',
  },
  {
    name: 'builtin/output.css',
    data: 'a {\n  b: get-mixin("load-css");\n}\n',
  },
]
