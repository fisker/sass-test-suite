// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/is_superselector/simple/pseudo/arg.hrx

export default [
  {
    name: 'class/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":c(@#$)", ":c(@#$)")}\n',
  },
  {
    name: 'class/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'class/unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":c(@#$)", ":d(@#$)")}\n',
  },
  {
    name: 'class/unequal/name/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'class/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":c(@#$)", ":c(*&^)")}\n',
  },
  {
    name: 'class/unequal/argument/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'class/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector(":c(@#$)", ":c")}\n',
  },
  {
    name: 'class/unequal/has_argument/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'element/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::c(@#$)", "::c(@#$)")}\n',
  },
  {
    name: 'element/equal/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'element/unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::c(@#$)", ":d(@#$)")}\n',
  },
  {
    name: 'element/unequal/name/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'element/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::c(@#$)", "::c(*&^)")}\n',
  },
  {
    name: 'element/unequal/argument/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'element/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.is-superselector("::c(@#$)", "::c")}\n',
  },
  {
    name: 'element/unequal/has_argument/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
