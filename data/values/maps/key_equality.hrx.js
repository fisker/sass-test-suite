export default [
  {
    name: 'nan/input.scss',
    data: '@use "sass:map";\n@use "sass:math";\n@use "sass:meta";\n\na {b: meta.inspect(map.get((math.div(0, 0): b), math.div(0, 0)))}\n',
  },
  {
    name: 'nan/output.css',
    data: 'a {\n  b: null;\n}\n',
  },
  {
    name: 'infinity/positive/input.scss',
    data: '@use "sass:map";\n@use "sass:math";\n@use "sass:meta";\n\na {b: meta.inspect(map.get(((math.div(1, 0)): b), math.div(1, 0)))}\n',
  },
  {
    name: 'infinity/positive/output.css',
    data: 'a {\n  b: b;\n}\n',
  },
  {
    name: 'infinity/negative/input.scss',
    data: '@use "sass:map";\n@use "sass:math";\n@use "sass:meta";\n\na {b: meta.inspect(map.get(((math.div(-1, 0)): b), math.div(-1, 0)))}\n',
  },
  {
    name: 'infinity/negative/output.css',
    data: 'a {\n  b: b;\n}\n',
  },
]
