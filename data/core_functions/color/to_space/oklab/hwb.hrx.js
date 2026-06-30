// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklab/hwb.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(0% 0 0), hwb)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(100% 0 0), hwb)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0 0), hwb)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: hsl(0, 0%, 38.8572859046%);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0.2 -0.3), hwb)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: hsl(280.3037190117, 185.1123146142%, 35.6118905914%);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklab(0% -2 2), $lightness: -50%), hwb)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: hsl(280.1786400518, 318.2272010349%, -118.1342753197%);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% -999999 0), hwb)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: hsl(340.1123874029, 426.4426843996%, -360093996.6269262%);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.4), hwb)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: hsla(19.0047477469, 6337.718112733%, 0.3924703093%, 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.0), hwb)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: hsla(19.0047477469, 6337.718112733%, 0.3924703093%, 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(none 0.2 0.3), hwb)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: hsl(261.4365776935, 230.0242829233%, -11.2533873127%);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% none 0.3), hwb)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: hsl(229.544295526, 280.5312491892%, -5.8764824076%);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 none), hwb)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: hsl(339.4567051743, 263.6331125505%, 4.4011033198%);\n}\n',
  },
]
