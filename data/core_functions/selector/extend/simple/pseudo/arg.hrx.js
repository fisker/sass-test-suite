export default [
  {
    name: 'class/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":c(@#$)", ":c(@#$)", "e")}\n',
  },
  {
    name: 'class/equal/output.css',
    data: 'a {\n  b: :c(@#$), e;\n}\n',
  },
  {
    name: 'class/unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":c(@#$)", ":d(@#$)", "e")}\n',
  },
  {
    name: 'class/unequal/name/output.css',
    data: 'a {\n  b: :c(@#$);\n}\n',
  },
  {
    name: 'class/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":c(@#$)", ":c(*&^)", "e")}\n',
  },
  {
    name: 'class/unequal/argument/output.css',
    data: 'a {\n  b: :c(@#$);\n}\n',
  },
  {
    name: 'class/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend(":c(@#$)", ":c", "e")}\n',
  },
  {
    name: 'class/unequal/has_argument/output.css',
    data: 'a {\n  b: :c(@#$);\n}\n',
  },
  {
    name: 'element/equal/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::c(@#$)", "::c(@#$)", "e")}\n',
  },
  {
    name: 'element/equal/output.css',
    data: 'a {\n  b: ::c(@#$), e;\n}\n',
  },
  {
    name: 'element/unequal/name/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::c(@#$)", ":d(@#$)", "e")}\n',
  },
  {
    name: 'element/unequal/name/output.css',
    data: 'a {\n  b: ::c(@#$);\n}\n',
  },
  {
    name: 'element/unequal/argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::c(@#$)", "::c(*&^)", "e")}\n',
  },
  {
    name: 'element/unequal/argument/output.css',
    data: 'a {\n  b: ::c(@#$);\n}\n',
  },
  {
    name: 'element/unequal/has_argument/input.scss',
    data: '@use "sass:selector";\na {b: selector.extend("::c(@#$)", "::c", "e")}\n',
  },
  {
    name: 'element/unequal/has_argument/output.css',
    data: 'a {\n  b: ::c(@#$);\n}\n',
  },
]
