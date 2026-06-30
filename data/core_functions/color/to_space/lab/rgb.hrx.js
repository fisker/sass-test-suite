// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/lab/rgb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(0% 0 0), rgb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(100% 0 0), rgb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 0 0), rgb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: rgb(118.9132853673, 118.9132853673, 118.9132853673);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% 50 -75), rgb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: rgb(140.9956907717, 86.2404630336, 249.7700164402);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(lab(0% -150 150), $lightness: -50%), rgb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(289.8791142497, 47.7721599837%, -30.374201454%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(50% -999999 0), rgb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(329.5753543003, 419.147137703%, -324.1554346051%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.4), rgb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: hsla(28.3698264077, 277.3239474447%, 5.9154081349%, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 30 / 0.0), rgb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: hsla(28.3698264077, 277.3239474447%, 5.9154081349%, 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(none 20 30), rgb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: hsl(17.5913578322, 6051.6428880588%, 0.2688304082%);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% none 30), rgb)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: hsl(49.7972674498, 639.4765067331%, 2.0005058387%);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(lab(10% 20 none), rgb)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: rgb(50.8524583137, 14.2717063113, 28.2183712056);\n}\n',
  },
]
