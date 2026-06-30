export default [
  {
    name: 'default/variable_use/input.scss',
    data: '@use "other";\n\na {b: other.$member}\n',
  },
  {
    name: 'default/variable_use/other.scss',
    data: '$member: value;\n',
  },
  {
    name: 'default/variable_use/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'default/variable_assignment/top_level/input.scss',
    data: '@use "other";\n\nother.$member: new value;\n\na {b: other.get-member()};\n',
  },
  {
    name: 'default/variable_assignment/top_level/other.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'default/variable_assignment/top_level/output.css',
    data: 'a {\n  b: new value;\n}\n',
  },
  {
    name: 'default/variable_assignment/nested/input.scss',
    data: '@use "other";\n\na {\n  // Namespaced assignments always assign to the other module\'s variable, even\n  // if they\'re nested in a block scope.\n  other.$member: new value;\n\n  b: other.get-member();\n}\n',
  },
  {
    name: 'default/variable_assignment/nested/other.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'default/variable_assignment/nested/output.css',
    data: 'a {\n  b: new value;\n}\n',
  },
  {
    name: 'default/variable_assignment/in_function/input.scss',
    data: '@use "other";\n\n@function a() {\n  // Test assignments within a function specially, because functions disallow\n  // property declarations and variable assignments need to be disambiguated\n  // with those.\n  other.$member: new value;\n\n  @return other.get-member();\n}\n\nb {c: a()}\n',
  },
  {
    name: 'default/variable_assignment/in_function/other.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'default/variable_assignment/in_function/output.css',
    data: 'b {\n  c: new value;\n}\n',
  },
  {
    name: 'default/variable_assignment/in_declaration/input.scss',
    data: '@use "other";\n\na {\n  b: {\n    // Test assignments within a declaration specially, because declarations\n    // disallow style rules and variable assignments need to be disambiguated\n    // with those.\n    other.$member: new value;\n\n    c: other.get-member();\n  }\n}\n',
  },
  {
    name: 'default/variable_assignment/in_declaration/other.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'default/variable_assignment/in_declaration/output.css',
    data: 'a {\n  b-c: new value;\n}\n',
  },
  {
    name: 'default/function/input.scss',
    data: '@use "other";\n\na {b: other.member()}\n',
  },
  {
    name: 'default/function/other.scss',
    data: '@function member() {@return value}\n',
  },
  {
    name: 'default/function/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'default/mixin/input.scss',
    data: '@use "other";\n\n@include other.member;\n',
  },
  {
    name: 'default/mixin/other.scss',
    data: '@mixin member() {a {b: c}}\n',
  },
  {
    name: 'default/mixin/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'default/basename/input.scss',
    data: '// Only the basename of the URL is used for the namespace. Previous components\n// are discarded.\n@use "foo/bar/../baz/qux/other";\n\na {b: other.$variable}\n',
  },
  {
    name: 'default/basename/foo/baz/qux/other.scss',
    data: '$variable: value;\n',
  },
  {
    name: 'default/basename/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'default/without_extensions/input.scss',
    data: '// All extensions on the URL are discarded before determining the namespace.\n@use "other.foo.bar.baz.scss";\n\na {b: other.$variable}\n',
  },
  {
    name: 'default/without_extensions/other.foo.bar.baz.scss',
    data: '$variable: value;\n',
  },
  {
    name: 'default/without_extensions/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'default/without_underscore/input.scss',
    data: '// A single leading underscore is removed before determining the namespace.\n@use "_other";\n\na {b: other.$variable}\n',
  },
  {
    name: 'default/without_underscore/_other.scss',
    data: '$variable: value;\n',
  },
  {
    name: 'default/without_underscore/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'explicit/variable_use/input.scss',
    data: '@use "other" as o;\n\na {b: o.$member}\n',
  },
  {
    name: 'explicit/variable_use/other.scss',
    data: '$member: value;\n',
  },
  {
    name: 'explicit/variable_use/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'explicit/variable_assignment/input.scss',
    data: '@use "other" as o;\n\no.$member: new value;\n\na {b: o.get-member()}\n',
  },
  {
    name: 'explicit/variable_assignment/other.scss',
    data: '$member: value;\n\n@function get-member() {@return $member}\n',
  },
  {
    name: 'explicit/variable_assignment/output.css',
    data: 'a {\n  b: new value;\n}\n',
  },
  {
    name: 'explicit/function/input.scss',
    data: '@use "other" as o;\n\na {b: o.member()}\n',
  },
  {
    name: 'explicit/function/other.scss',
    data: '@function member() {@return value}\n',
  },
  {
    name: 'explicit/function/output.css',
    data: 'a {\n  b: value;\n}\n',
  },
  {
    name: 'explicit/mixin/input.scss',
    data: '@use "other" as o;\n\n@include o.member;\n',
  },
  {
    name: 'explicit/mixin/other.scss',
    data: '@mixin member() {a {b: c}}\n',
  },
  {
    name: 'explicit/mixin/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
]
