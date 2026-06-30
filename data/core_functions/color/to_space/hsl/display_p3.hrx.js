// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hsl/display_p3.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 0%), display-p3)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(display-p3 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 100%), display-p3)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(display-p3 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 50%), display-p3)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(display-p3 0.5 0.5 0.5);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(80deg 30% 60%), display-p3)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(display-p3 0.655133397 0.7175281483 0.505602812);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20.123456789deg 30.987654321% 60.192837465%), display-p3)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(display-p3 0.6997472063 0.5677618984 0.490693255);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 200% -50%), display-p3)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(display-p3 -1.3795832908 -0.3608862783 0.4233635373);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 999999% 50%), display-p3)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(display-p3 4579.6059857545 -1251.0810767168 -4781.6821693604);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.4), display-p3)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(display-p3 0.3447505085 0.2640504184 0.244140094 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.0), display-p3)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(display-p3 0.3447505085 0.2640504184 0.244140094 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(none 20% 30%), display-p3)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(display-p3 0.3423085422 0.2451135243 0.2426469173);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg none 30%), display-p3)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: color(display-p3 0.3 0.3 0.3);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% none), display-p3)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(display-p3 0 0 0);\n}\n',
  },
]
