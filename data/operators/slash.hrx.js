export default [
  {
    name: 'namespaced_variables/input.scss',
    data: '@use "other";\na {b: other.$a / other.$b}\n',
  },
  {
    name: 'namespaced_variables/other.scss',
    data: '$a: 1;\n$b: 2;\n',
  },
  {
    name: 'namespaced_variables/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'namespaced_variables/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(other.$a, other.$b) or calc(other.$a / other.$b)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | a {b: other.$a / other.$b}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'separator/calculation/simplified/left/input.scss',
    data: 'a {b: calc(1)/2}\n',
  },
  {
    name: 'separator/calculation/simplified/left/output.css',
    data: 'a {\n  b: 1/2;\n}\n',
  },
  {
    name: 'separator/calculation/simplified/right/input.scss',
    data: 'a {b: 1/calc(2)}\n',
  },
  {
    name: 'separator/calculation/simplified/right/output.css',
    data: 'a {\n  b: 1/2;\n}\n',
  },
  {
    name: 'separator/calculation/simplified/both/input.scss',
    data: 'a {b: calc(1)/calc(2)}\n',
  },
  {
    name: 'separator/calculation/simplified/both/output.css',
    data: 'a {\n  b: 1/2;\n}\n',
  },
  {
    name: 'separator/calculation/preserved/left/input.scss',
    data: 'a {b: calc(1px + 1%)/2}\n',
  },
  {
    name: 'separator/calculation/preserved/left/output.css',
    data: 'a {\n  b: calc(1px + 1%)/2;\n}\n',
  },
  {
    name: 'separator/calculation/preserved/right/input.scss',
    data: 'a {b: 2/calc(1px + 1%)}\n',
  },
  {
    name: 'separator/calculation/preserved/right/output.css',
    data: 'a {\n  b: 2/calc(1px + 1%);\n}\n',
  },
  {
    name: 'separator/calculation/preserved/both/input.scss',
    data: 'a {b: calc(1px + 1%)/calc(2px + 2%)}\n',
  },
  {
    name: 'separator/calculation/preserved/both/output.css',
    data: 'a {\n  b: calc(1px + 1%)/calc(2px + 2%);\n}\n',
  },
  {
    name: 'without_intermediate/whitespace/input.scss',
    data: 'a {b: 1/ / /bar}\n',
  },
  {
    name: 'without_intermediate/whitespace/output.css',
    data: 'a {\n  b: 1///bar;\n}\n',
  },
]
