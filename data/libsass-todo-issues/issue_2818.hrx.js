export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n@use "sass:meta";\n$map: ("lightness": 10%, "saturation": 10%);\n$base: meta.call(meta.get-function(\'scale\', $module: \'color\'), #dedede, $map...);\ntest { color: $base; }\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  color: rgb(228.27, 222.33, 222.33);\n}\n',
  },
]
