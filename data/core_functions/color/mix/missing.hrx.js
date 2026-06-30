export default [
  {
    name: 'explicit/same/legacy/color1/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgb(none 100 200), rgb(200 100 0), $method: rgb)}\n',
  },
  {
    name: 'explicit/same/legacy/color1/output.css',
    data: 'a {\n  b: #c86464;\n}\n',
  },
  {
    name: 'explicit/same/legacy/color2/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgb(0 100 200), rgb(200 none 0), $method: rgb)}\n',
  },
  {
    name: 'explicit/same/legacy/color2/output.css',
    data: 'a {\n  b: #646464;\n}\n',
  },
  {
    name: 'explicit/same/legacy/both/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgb(0 none 200), rgb(200 none 0), $method: rgb)}\n',
  },
  {
    name: 'explicit/same/legacy/both/output.css',
    data: 'a {\n  b: rgb(100 none 100);\n}\n',
  },
  {
    name: 'explicit/same/modern/color1/input.scss',
    data: '@use "sass:color";\na {\n  b: color.mix(\n    color(srgb none 0.1 0.2),\n    color(srgb 0.1 0.2 0.3),\n    $method: srgb\n  );\n}\n',
  },
  {
    name: 'explicit/same/modern/color1/output.css',
    data: 'a {\n  b: color(srgb 0.1 0.15 0.25);\n}\n',
  },
  {
    name: 'explicit/same/modern/color2/input.scss',
    data: '@use "sass:color";\na {\n  b: color.mix(\n    color(srgb 0.1 0.2 0.3),\n    color(srgb 0.1 none 0.2),\n    $method: srgb\n  );\n}\n',
  },
  {
    name: 'explicit/same/modern/color2/output.css',
    data: 'a {\n  b: color(srgb 0.1 0.2 0.25);\n}\n',
  },
  {
    name: 'explicit/same/modern/both/input.scss',
    data: '@use "sass:color";\na {\n  b: color.mix(\n    color(srgb 0.1 0.2 none),\n    color(srgb 0.3 0.2 none),\n    $method: srgb\n  );\n}\n',
  },
  {
    name: 'explicit/same/modern/both/output.css',
    data: 'a {\n  b: color(srgb 0.2 0.2 none);\n}\n',
  },
  {
    name: 'explicit/analogous/legacy/color1/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgb(none 100 200), rgb(200 100 0), $method: rec2020)}\n',
  },
  {
    name: 'explicit/analogous/legacy/color1/output.css',
    data: 'a {\n  b: rgb(199.7671172587, 91.8239078594, 117.7284104313);\n}\n',
  },
  {
    name: 'explicit/analogous/legacy/color2/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgb(0 100 200), rgb(200 none 0), $method: rec2020)}\n',
  },
  {
    name: 'explicit/analogous/legacy/color2/output.css',
    data: 'a {\n  b: rgb(128.6114294932, 95.678836923, 112.8090426091);\n}\n',
  },
  {
    name: 'explicit/analogous/legacy/both/input.scss',
    data: '@use "sass:color";\na {b: color.mix(rgb(0 none 200), rgb(200 none 0), $method: rec2020)}\n',
  },
  {
    name: 'explicit/analogous/legacy/both/output.css',
    data: 'a {\n  b: rgb(129.0248146672, 0, 115.9531222724);\n}\n',
  },
  {
    name: 'explicit/analogous/modern/color1/input.scss',
    data: '@use "sass:color";\na {\n  b: color.mix(\n    color(srgb none 0.1 0.2),\n    color(srgb 0.1 0.2 0.3),\n    $method: rec2020\n  );\n}\n',
  },
  {
    name: 'explicit/analogous/modern/color1/output.css',
    data: 'a {\n  b: color(srgb 0.146201736 0.1492595622 0.2497768167);\n}\n',
  },
  {
    name: 'explicit/analogous/modern/color2/input.scss',
    data: '@use "sass:color";\na {\n  b: color.mix(\n    color(srgb 0.1 0.2 0.3),\n    color(srgb 0.1 none 0.2),\n    $method: rec2020\n  );\n}\n',
  },
  {
    name: 'explicit/analogous/modern/color2/output.css',
    data: 'a {\n  b: color(srgb 0.0134568276 0.2030946777 0.2456679982);\n}\n',
  },
  {
    name: 'explicit/analogous/modern/both/input.scss',
    data: '@use "sass:color";\na {\n  b: color.mix(\n    color(srgb 0.1 0.2 none),\n    color(srgb 0.3 0.2 none),\n    $method: rec2020\n  );\n}\n',
  },
  {
    name: 'explicit/analogous/modern/both/output.css',
    data: 'a {\n  b: color(srgb 0.2110804397 0.2012136757 none);\n}\n',
  },
  {
    name: 'powerless/legacy/color1/input.scss',
    data: '@use "sass:color";\na {b: color.mix(hsl(0deg 0% 30%), hsl(120deg 50% 50%), $method: lch)}\n',
  },
  {
    name: 'powerless/legacy/color1/output.css',
    data: 'a {\n  b: hsl(113.4583259264, 28.061366187%, 40.5877359835%);\n}\n',
  },
  {
    name: 'powerless/legacy/color2/input.scss',
    data: '@use "sass:color";\na {b: color.mix(hsl(120deg 50% 50%), hsl(0deg 0% 30%), $method: lch)}\n',
  },
  {
    name: 'powerless/legacy/color2/output.css',
    data: 'a {\n  b: hsl(113.4583259264, 28.061366187%, 40.5877359835%);\n}\n',
  },
  {
    name: 'powerless/legacy/both/input.scss',
    data: '@use "sass:color";\na {b: color.mix(hsl(120deg 0% 50%), hsl(0deg 0% 30%), $method: lch)}\n',
  },
  {
    name: 'powerless/legacy/both/output.css',
    data: 'a {\n  b: hsl(0, 0%, 39.7779408276%);\n}\n',
  },
  {
    name: 'powerless/modern/color1/input.scss',
    data: '@use "sass:color";\na {b: color.mix(lch(30% 0% 0deg), lch(50% 10% 120deg), $method: hsl)}\n',
  },
  {
    name: 'powerless/modern/color1/output.css',
    data: 'a {\n  b: lch(39.8551054023% 6.455971398 120.4338354849deg);\n}\n',
  },
  {
    name: 'powerless/modern/color2/input.scss',
    data: '@use "sass:color";\na {b: color.mix(lch(50% 10% 120deg), lch(30% 0% 0deg), $method: hsl)}\n',
  },
  {
    name: 'powerless/modern/color2/output.css',
    data: 'a {\n  b: lch(39.8551054023% 6.455971398 120.4338354849deg);\n}\n',
  },
  {
    name: 'powerless/modern/both/input.scss',
    data: '@use "sass:color";\na {b: color.mix(lch(50% 0% 120deg), lch(30% 0% 0deg), $method: hsl)}\n',
  },
  {
    name: 'powerless/modern/both/output.css',
    data: 'a {\n  b: lch(40.2238896861% 0 none);\n}\n',
  },
]
