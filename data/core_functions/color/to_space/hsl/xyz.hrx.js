// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hsl/xyz.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 0%), xyz)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 100%), xyz)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz 0.9504559271 1 1.0890577508);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 50%), xyz)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz 0.2034366706 0.2140411405 0.233103163);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(80deg 30% 60%), xyz)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz 0.3573899014 0.4333755032 0.2502538283);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20.123456789deg 30.987654321% 60.192837465%), xyz)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: color(xyz 0.333515343 0.3140043025 0.2272909419);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 200% -50%), xyz)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz -1.0161268876 -0.540961491 0.1515884565);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 999999% 50%), xyz)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz 136956388.39988744 59264689.52803937 -623200798.6169885);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.4), xyz)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz 0.0720689624 0.0653589105 0.0532528168 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.0), xyz)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz 0.0720689624 0.0653589105 0.0532528168 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(none 20% 30%), xyz)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: color(xyz 0.0692055944 0.0596321744 0.0522983607);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg none 30%), xyz)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: color(xyz 0.0696103997 0.0732389559 0.0797614526);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% none), xyz)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(xyz 0 0 0);\n}\n',
  },
]
