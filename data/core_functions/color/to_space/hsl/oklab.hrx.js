// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/hsl/oklab.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 0%), oklab)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklab(0% 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 100%), oklab)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklab(100% 0 0);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(0deg 0% 50%), oklab)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklab(59.8180730527% 0 0);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(80deg 30% 60%), oklab)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklab(75.0578300858% -0.0474046392 0.0717748182);\n}\n',
  },
  {
    name: 'float/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20.123456789deg 30.987654321% 60.192837465%), oklab)}\n',
  },
  {
    name: 'float/output.css',
    data: 'a {\n  b: oklab(68.4523450864% 0.0396042286 0.0440734549);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 200% -50%), oklab)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz -1.0161268876 -0.540961491 0.1515884565) 100%, black);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(20deg 999999% 50%), oklab)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz 136956388.39988744 59264689.52803929 -623200798.6169884) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.4), oklab)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklab(40.6685298895% 0.0313239056 0.0191932087 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% 30% / 0.0), oklab)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklab(40.6685298895% 0.0313239056 0.0191932087 / 0);\n}\n',
  },
  {
    name: 'missing/hue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(none 20% 30%), oklab)}\n',
  },
  {
    name: 'missing/hue/output.css',
    data: 'a {\n  b: oklab(39.5815066771% 0.0409008824 0.0142214725);\n}\n',
  },
  {
    name: 'missing/saturation/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg none 30%), oklab)}\n',
  },
  {
    name: 'missing/saturation/output.css',
    data: 'a {\n  b: oklab(41.8389440171% 0 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(hsl(10deg 20% none), oklab)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: oklab(none 0 0);\n}\n',
  },
]
