export default [
  {
    name: 'input.scss',
    data: 'no-space-before-using {\n  @mixin mixin {\n    @content(value1, value2);\n  }\n\n  @include mixin()using ($arg1, $arg2) {\n    arg1: $arg1;\n    arg2: $arg2;\n  }\n}\n\nno-space-after-using {\n  @mixin mixin {\n    @content(value1, value2);\n  }\n\n  @include mixin using($arg1, $arg2) {\n    arg1: $arg1;\n    arg2: $arg2;\n  }\n}\n\nno-space-after-arglist {\n  @mixin mixin {\n    @content(value1, value2);\n  }\n\n  @include mixin using($arg1, $arg2){\n    arg1: $arg1;\n    arg2: $arg2;\n  }\n}\n\nspace-after-content {\n  @mixin mixin {\n    @content (value1, value2);\n  }\n\n  @include mixin using ($arg1, $arg2) {\n    arg1: $arg1;\n    arg2: $arg2;\n  }\n}\n\ncase-insensitive-using {\n  @mixin mixin {\n    @content(value1, value2);\n  }\n\n  @include mixin UsInG ($arg1, $arg2) {\n    arg1: $arg1;\n    arg2: $arg2;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'no-space-before-using {\n  arg1: value1;\n  arg2: value2;\n}\n\nno-space-after-using {\n  arg1: value1;\n  arg2: value2;\n}\n\nno-space-after-arglist {\n  arg1: value1;\n  arg2: value2;\n}\n\nspace-after-content {\n  arg1: value1;\n  arg2: value2;\n}\n\ncase-insensitive-using {\n  arg1: value1;\n  arg2: value2;\n}\n',
  },
]
