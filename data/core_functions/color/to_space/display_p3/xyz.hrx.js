// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/display_p3/xyz.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0 0 0), xyz)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 1 1 1), xyz)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz 0.9504559271 1 1.0890577508);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.5 0.5 0.5), xyz)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz 0.2034366706 0.2140411405 0.233103163);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.2 0.4 0.8), xyz)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz 0.171095654 0.1473658922 0.6363562895);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -1 0.4 2), xyz)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz 0.5306657282 0.2557107148 5.1775335161);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -999999 0 0), xyz)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz -107482878101233.7 -50580177929992.33 0);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.4), xyz)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz 0.0281889097 0.0310017052 0.0779508635 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.0), xyz)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz 0.0281889097 0.0310017052 0.0779508635 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 none 0.2 0.3), xyz)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(xyz none 0.0287067331 0.0779508635);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 none 0.3), xyz)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(xyz 0.0193940428 none 0.0764573956);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 none), xyz)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(xyz 0.0136716827 0.0251948144 none);\n}\n',
  },
]
