// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hsl/display_p3_linear.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 0%), display-p3-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(display-p3-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 100%), display-p3-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(display-p3-linear 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 50%), display-p3-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2140411405 0.2140411405 0.2140411405);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(80deg 30% 60%), display-p3-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.3867318559 0.4733566112 0.2192637055);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20.123456789deg 30.987654321% 60.192837465%), display-p3-linear)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.4476285012 0.2822064776 0.2055278611);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 200% -50%), display-p3-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(display-p3-linear -2.0909128919 -0.1070861035 0.1498350654);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 999999% 50%), display-p3-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(display-p3-linear 537271853.0796515 -23862998.295472123 -595936217.097023);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.4), display-p3-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0973840331 0.0566834742 0.0485616236 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.0), display-p3-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0973840331 0.0566834742 0.0485616236 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(none 20% 30%), display-p3-linear)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0959623916 0.0489417459 0.0479818988);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg none 30%), display-p3-linear)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0732389559 0.0732389559 0.0732389559);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% none), display-p3-linear)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(display-p3-linear 0 0 0);\n}\n',
  },
]
