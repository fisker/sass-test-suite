export default [
  {
    name: 'inspect/input.scss',
    data: '@use "sass:meta";\n\na {b: meta.inspect(meta.get-function(lighten))};\n',
  },
  {
    name: 'inspect/output.css',
    data: 'a {\n  b: get-function("lighten");\n}\n',
  },
  {
    name: 'type_of/input.scss',
    data: '@use "sass:meta";\n\na {b: meta.type-of(meta.get-function(lighten))};\n',
  },
  {
    name: 'type_of/output.css',
    data: 'a {\n  b: function;\n}\n',
  },
]
