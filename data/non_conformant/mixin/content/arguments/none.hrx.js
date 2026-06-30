// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/mixin/content/arguments/none.hrx

export default [
  {
    name: 'input.scss',
    data: '// `@content()` and `@content` should behave identically, as should\n// `@include foo` and `@include foo using ()`.\n\nno-parens {\n  @mixin mixin {\n    @content;\n  }\n\n  empty-using {\n    @include mixin using () {\n      x: y;\n    }\n  }\n\n  defaults {\n    @include mixin using ($arg1: value1, $arg2: value2) {\n      arg1: $arg1;\n      arg2: $arg2;\n    }\n  }\n}\n\nparens {\n  @mixin mixin {\n    @content();\n  }\n\n  no-using {\n    @include mixin {\n      x: y;\n    }\n  }\n\n  empty-using {\n    @include mixin using () {\n      x: y;\n    }\n  }\n\n  defaults {\n    @include mixin using ($arg1: value1, $arg2: value2) {\n      arg1: $arg1;\n      arg2: $arg2;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'no-parens empty-using {\n  x: y;\n}\nno-parens defaults {\n  arg1: value1;\n  arg2: value2;\n}\n\nparens no-using {\n  x: y;\n}\nparens empty-using {\n  x: y;\n}\nparens defaults {\n  arg1: value1;\n  arg2: value2;\n}\n',
  },
]
