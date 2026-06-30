export default [
  {
    name: 'black/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0 0 0), display-p3-linear)}\n',
  },
  {
    name: 'black/output.css',
    data: 'a {\n  b: color(display-p3-linear 0 0 0);\n}\n',
  },
  {
    name: 'white/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 1 1 1), display-p3-linear)}\n',
  },
  {
    name: 'white/output.css',
    data: 'a {\n  b: color(display-p3-linear 1 1 1);\n}\n',
  },
  {
    name: 'gray/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.5 0.5 0.5), display-p3-linear)}\n',
  },
  {
    name: 'gray/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.2140411405 0.2140411405 0.2140411405);\n}\n',
  },
  {
    name: 'middle/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.2 0.4 0.8), display-p3-linear)}\n',
  },
  {
    name: 'middle/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0508165917 0.1295567503 0.5599816684);\n}\n',
  },
  {
    name: 'out_of_range/near/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -1 0.4 2), display-p3-linear)}\n',
  },
  {
    name: 'out_of_range/near/output.css',
    data: 'a {\n  b: color(display-p3-linear -0.7988727885 0.0952636652 4.5031119758);\n}\n',
  },
  {
    name: 'out_of_range/far/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb -999999 0 0), display-p3-linear)}\n',
  },
  {
    name: 'out_of_range/far/output.css',
    data: 'a {\n  b: color(display-p3-linear -181680759551756.2 -7332554561011.1875 -3773530500634.1445);\n}\n',
  },
  {
    name: 'alpha/partial/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.4), display-p3-linear)}\n',
  },
  {
    name: 'alpha/partial/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0141207479 0.03233858 0.0692534455 / 0.4);\n}\n',
  },
  {
    name: 'alpha/transparent/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 0.3 / 0.0), display-p3-linear)}\n',
  },
  {
    name: 'alpha/transparent/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0141207479 0.03233858 0.0692534455 / 0);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb none 0.2 0.3), display-p3-linear)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: color(display-p3-linear none 0.0320058804 0.0690822293);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 none 0.3), display-p3-linear)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0082433929 none 0.0668567451);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: '@use "sass:color";\na {b: color.to-space(color(srgb 0.1 0.2 none), display-p3-linear)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: color(display-p3-linear 0.0141207479 0.03233858 none);\n}\n',
  },
]
