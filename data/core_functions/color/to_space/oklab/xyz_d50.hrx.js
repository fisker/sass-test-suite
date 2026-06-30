// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_space/oklab/xyz_d50.hrx

export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(0% 0 0), xyz-d50)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(xyz-d50 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(100% 0 0), xyz-d50)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(xyz-d50 0.9642956764 1 0.8251046025);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0 0), xyz-d50)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(xyz-d50 0.1205369596 0.125 0.1031380753);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% 0.2 -0.3), xyz-d50)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(xyz-d50 0.249501196 0.0755678759 0.7361680016);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color.change(oklab(0% -2 2), $lightness: -50%), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(xyz-d50 -6.0144157075 2.1214431252 -29.0650672101);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(50% -999999 0), xyz-d50)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(xyz-d50 -80704145963694512 1378316536921807 4824362248731981);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.4), xyz-d50)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0125260876 0.0027519424 -0.0349334425 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 0.3 / 0.0), xyz-d50)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0125260876 0.0027519424 -0.0349334425 / 0);\n}\n',
  },
  {
    name: 'missing/lightness/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(none 0.2 0.3), xyz-d50)}\n',
  },
  {
    name: 'missing/lightness/output.css',
    data: 'a {\n  b: color(xyz-d50 -0.0103407369 0.0059005421 -0.0794063222);\n}\n',
  },
  {
    name: 'missing/a/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% none 0.3), xyz-d50)}\n',
  },
  {
    name: 'missing/a/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0004044954 0.0026981824 -0.0287165964);\n}\n',
  },
  {
    name: 'missing/b/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(oklab(10% 0.2 none), xyz-d50)}\n',
  },
  {
    name: 'missing/b/output.css',
    data: 'a {\n  b: color(xyz-d50 0.0072778126 0.0004719736 0.0001138228);\n}\n',
  },
]
