// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/member/global.hrx

export default [
  {
    name: 'variable_use/input.scss',
    data: '@use "other" as *;\n\na {b: $member}\n',
  },
  {
    name: 'variable_use/other.scss',
    data: '$member: value;\n',
  },
  {
    name: 'variable_use/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'variable_assignment/top_level/input.scss',
    data: '@use "other" as *;\n\n$member: new value;\n\na {b: get-member()}\n',
  },
  {
    name: 'variable_assignment/top_level/other.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'variable_assignment/top_level/output.css',
    data: 'a {\n  b: new value;\n}\n',
  },
  {
    name: 'variable_assignment/nested/local/input.scss',
    data: '@use "other" as *;\n\na {\n  // A nested variable assignment that doesn\'t have a namespace and isn\'t\n  // !global creates a new local variable rather than assigning to a variable\n  // imported from a module.\n  $member: new value;\n\n  b: get-member();\n}\n',
  },
  {
    name: 'variable_assignment/nested/local/other.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'variable_assignment/nested/local/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'variable_assignment/nested/global/input.scss',
    data: '@use "other" as *;\n\na {\n  // A nested variable assignment that doesn\'t have a namespace but is !global\n  // assigns to a global module\'s variable if one exists.\n  $member: new value !global;\n\n  b: get-member();\n}\n',
  },
  {
    name: 'variable_assignment/nested/global/other.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'variable_assignment/nested/global/output.css',
    data: 'a {\n  b: new value;\n}\n',
  },
  {
    name: 'function/input.scss',
    data: '@use "other" as *;\n\na {b: member()}\n',
  },
  {
    name: 'function/other.scss',
    data: '@function member() {@return value}\n',
  },
  {
    name: 'function/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'mixin/input.scss',
    data: '@use "other" as *;\n\n@include member;\n',
  },
  {
    name: 'mixin/other.scss',
    data: '@mixin member() {a {b: c}}\n',
  },
  {
    name: 'mixin/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: '@use "left" as *;\n@use "right" as *;\n\na {\n  left: $left;\n  right: $right;\n}\n',
  },
  {
    name: 'multiple/left.scss',
    data: '$left: left;\n',
  },
  {
    name: 'multiple/right.scss',
    data: '$right: right;\n',
  },
  {
    name: 'multiple/output.css',
    data: 'a {\n  left: left;\n  right: right;\n}\n',
  },
  {
    name: 'no_conflict/variable/input.scss',
    data: '@use "other" as *;\n@use "other" as *;\n\na {b: $c}\n',
  },
  {
    name: 'no_conflict/variable/_other.scss',
    data: '$c: d;\n',
  },
  {
    name: 'no_conflict/variable/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'no_conflict/function/input.scss',
    data: '@use "other" as *;\n@use "other" as *;\n\na {b: c()}\n',
  },
  {
    name: 'no_conflict/function/_other.scss',
    data: '@function c() {@return d}\n',
  },
  {
    name: 'no_conflict/function/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'no_conflict/mixin/input.scss',
    data: '@use "other" as *;\n@use "other" as *;\n\na {@include b}\n',
  },
  {
    name: 'no_conflict/mixin/_other.scss',
    data: '@mixin b {c: d}\n',
  },
  {
    name: 'no_conflict/mixin/output.css',
    data: 'a {\n  c: d;\n}\n',
  },
]
