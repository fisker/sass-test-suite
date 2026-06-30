// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/selector/parse/selector.hrx

export default [
  {
    name: 'simple/type/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("c")}\n',
  },
  {
    name: 'simple/type/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'simple/class/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(".c")}\n',
  },
  {
    name: 'simple/class/output.css',
    data: 'a {\n  b: .c;\n}\n',
  },
  {
    name: 'simple/id/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("#c")}\n',
  },
  {
    name: 'simple/id/output.css',
    data: 'a {\n  b: #c;\n}\n',
  },
  {
    name: 'simple/placeholder/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("%c")}\n',
  },
  {
    name: 'simple/placeholder/output.css',
    data: 'a {\n  b: %c;\n}\n',
  },
  {
    name: 'simple/attribute/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("[c^=d]")}\n',
  },
  {
    name: 'simple/attribute/output.css',
    data: 'a {\n  b: [c^=d];\n}\n',
  },
  {
    name: 'simple/universal/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("*")}\n',
  },
  {
    name: 'simple/universal/output.css',
    data: 'a {\n  b: *;\n}\n',
  },
  {
    name: 'simple/pseudo/class/no_arg/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(":c")}\n',
  },
  {
    name: 'simple/pseudo/class/no_arg/output.css',
    data: 'a {\n  b: :c;\n}\n',
  },
  {
    name: 'simple/pseudo/class/arg/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse(":c(@#$)")}\n',
  },
  {
    name: 'simple/pseudo/class/arg/output.css',
    data: 'a {\n  b: :c(@#$);\n}\n',
  },
  {
    name: 'simple/pseudo/class/selector_arg/is/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\n$result: selector.parse(":is(b, c)");\na {\n  result: $result;\n  structure: $result == (list.append((), ":is(b, c)"),);\n}\n',
  },
  {
    name: 'simple/pseudo/class/selector_arg/is/output.css',
    data: 'a {\n  result: :is(b, c);\n  structure: true;\n}\n',
  },
  {
    name: 'simple/pseudo/class/selector_arg/where/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\n$result: selector.parse(":where(b, c)");\na {\n  result: $result;\n  structure: $result == (list.append((), ":where(b, c)"),);\n}\n',
  },
  {
    name: 'simple/pseudo/class/selector_arg/where/output.css',
    data: 'a {\n  result: :where(b, c);\n  structure: true;\n}\n',
  },
  {
    name: 'simple/pseudo/class/selector_arg/matches/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\n$result: selector.parse(":matches(b, c)");\na {\n  result: $result;\n  structure: $result == (list.append((), ":matches(b, c)"),);\n}\n',
  },
  {
    name: 'simple/pseudo/class/selector_arg/matches/output.css',
    data: 'a {\n  result: :matches(b, c);\n  structure: true;\n}\n',
  },
  {
    name: 'simple/pseudo/class/combined_arg/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\n$result: selector.parse(":nth-child(2n+1 of b, c)");\na {\n  result: $result;\n  structure: $result == (list.append((), ":nth-child(2n+1 of b, c)"),);\n}\n',
  },
  {
    name: 'simple/pseudo/class/combined_arg/output.css',
    data: 'a {\n  result: :nth-child(2n+1 of b, c);\n  structure: true;\n}\n',
  },
  {
    name: 'simple/pseudo/element/no_arg/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("::c")}\n',
  },
  {
    name: 'simple/pseudo/element/no_arg/output.css',
    data: 'a {\n  b: ::c;\n}\n',
  },
  {
    name: 'simple/pseudo/element/arg/input.scss',
    data: '@use "sass:selector";\na {b: selector.parse("::c(@#$)")}\n',
  },
  {
    name: 'simple/pseudo/element/arg/output.css',
    data: 'a {\n  b: ::c(@#$);\n}\n',
  },
  {
    name: 'simple/pseudo/element/selector_arg/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\n$result: selector.parse("::slotted(b, c)");\na {\n  result: $result;\n  structure: $result == (list.append((), "::slotted(b, c)"),);\n}\n',
  },
  {
    name: 'simple/pseudo/element/selector_arg/output.css',
    data: 'a {\n  result: ::slotted(b, c);\n  structure: true;\n}\n',
  },
  {
    name: 'compound/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\n$result: selector.parse("b.c:d");\na {\n  result: $result;\n  structure: $result == (list.append((), "b.c:d"),);\n}\n',
  },
  {
    name: 'compound/output.css',
    data: 'a {\n  result: b.c:d;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/descendant/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("b c d");\na {\n  result: $result;\n  structure: $result == (b c d,);\n}\n',
  },
  {
    name: 'complex/descendant/output.css',
    data: 'a {\n  result: b c d;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/sibling/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("b ~ c ~ d");\na {\n  result: $result;\n  structure: $result == (b "~" c "~" d,);\n}\n',
  },
  {
    name: 'complex/sibling/output.css',
    data: 'a {\n  result: b ~ c ~ d;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/adjacent_sibling/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("b + c + d");\na {\n  result: $result;\n  structure: $result == (b "+" c "+" d,);\n}\n',
  },
  {
    name: 'complex/adjacent_sibling/output.css',
    data: 'a {\n  result: b + c + d;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/child/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("b > c > d");\na {\n  result: $result;\n  structure: $result == (b ">" c ">" d,);\n}\n',
  },
  {
    name: 'complex/child/output.css',
    data: 'a {\n  result: b > c > d;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/bogus/leading/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("> b");\na {\n  result: $result;\n  structure: $result == (">" b,);\n}\n',
  },
  {
    name: 'complex/bogus/leading/output.css',
    data: 'a {\n  result: > b;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/bogus/trailing/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("b +");\na {\n  result: $result;\n  structure: $result == (b "+",);\n}\n',
  },
  {
    name: 'complex/bogus/trailing/output.css',
    data: 'a {\n  result: b +;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/bogus/multiple/middle/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("b + ~ c");\na {\n  result: $result;\n  structure: $result == (b "+" "~" c,);\n}\n',
  },
  {
    name: 'complex/bogus/multiple/middle/output.css',
    data: 'a {\n  result: b + ~ c;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/bogus/multiple/trailing/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("b ~~");\na {\n  result: $result;\n  structure: $result == (b "~" "~",);\n}\n',
  },
  {
    name: 'complex/bogus/multiple/trailing/output.css',
    data: 'a {\n  result: b ~ ~;\n  structure: true;\n}\n',
  },
  {
    name: 'complex/bogus/only/input.scss',
    data: '@use "sass:list";\n@use "sass:selector";\n$result: selector.parse(">");\na {\n  result: $result;\n  structure: $result == (list.append((), ">"),);\n}\n',
  },
  {
    name: 'complex/bogus/only/output.css',
    data: 'a {\n  result: >;\n  structure: true;\n}\n',
  },
  {
    name: 'list/input.scss',
    data: '@use "sass:selector";\n$result: selector.parse("b c, d e, f g");\na {\n  result: $result;\n  structure: $result == (b c, d e, f g);\n}\n',
  },
  {
    name: 'list/output.css',
    data: 'a {\n  result: b c, d e, f g;\n  structure: true;\n}\n',
  },
]
