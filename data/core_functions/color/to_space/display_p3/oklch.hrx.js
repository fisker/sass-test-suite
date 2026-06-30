export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0 0 0), oklch)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: oklch(0% 0 none);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 1 1 1), oklch)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: oklch(100% 0 none);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.5 0.5 0.5), oklch)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: oklch(59.8180730527% 0 none);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.2 0.4 0.8), oklch)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: oklch(53.3960346178% 0.1812226655 258.4330329885deg);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -1 0.4 2), oklch)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: oklch(48.9249779752% 2.2901460981 195.9642812342deg);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 -999999 0 0), oklch)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz -107482878101233.56 -50580177929992.24 0.00390625) 100%, black);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.4), oklch)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: oklch(31.2751103901% 0.0635209742 244.3387965371deg / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 0.3 / 0.0), oklch)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: oklch(31.2751103901% 0.0635209742 244.3387965371deg / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 none 0.2 0.3), oklch)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: oklch(30.2321906369% 0.0801871733 230.9786313176deg);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 none 0.3), oklch)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: oklch(21.8336364432% 0.1280433567 287.983492894deg);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(display-p3 0.1 0.2 none), oklch)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: oklch(28.5078225669% 0.0988037508 135.6275962604deg);\n}\n',
  },
]
