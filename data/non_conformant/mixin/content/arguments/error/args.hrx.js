export default [
  {
    name: 'none_passed/input.scss',
    data: "// It's an error to pass no arguments to a content block that requires them.\n@mixin mixin {\n  @content;\n}\n\n@include mixin using ($arg1, $arg2) {}\n",
  },
  {
    name: 'none_passed/error',
    data: "Error: Missing argument $arg1.\n    ,\n3   |   @content;\n    |   ^^^^^^^^ invocation\n... |\n6   | @include mixin using ($arg1, $arg2) {}\n    |                ==================== declaration\n    '\n  input.scss 3:3  @content\n  input.scss 3:3  mixin()\n  input.scss 6:1  root stylesheet\n",
  },
  {
    name: 'none_expected/input.scss',
    data: "// It's an error to pass argments to a content block that doesn't take them.\n@mixin mixin {\n  @content(value);\n}\n\n@include mixin {}\n",
  },
  {
    name: 'none_expected/error',
    data: "Error: Only 0 arguments allowed, but 1 was passed.\n    ,\n3   |   @content(value);\n    |   ^^^^^^^^^^^^^^^ invocation\n... |\n6   | @include mixin {}\n    |          ===== declaration\n    '\n  input.scss 3:3  @content\n  input.scss 3:3  mixin()\n  input.scss 6:1  root stylesheet\n",
  },
  {
    name: 'named/input.scss',
    data: "// It's an error to pass a named argument that doesn't exist.\n@mixin mixin {\n  @content($invalid: value);\n}\n\n@include mixin using ($valid: value) {}\n",
  },
  {
    name: 'named/error',
    data: "Error: No parameter named $invalid.\n    ,\n3   |   @content($invalid: value);\n    |   ^^^^^^^^^^^^^^^^^^^^^^^^^ invocation\n... |\n6   | @include mixin using ($valid: value) {}\n    |                ===================== declaration\n    '\n  input.scss 3:3  @content\n  input.scss 3:3  mixin()\n  input.scss 6:1  root stylesheet\n",
  },
  {
    name: 'too_few/input.scss',
    data: "// It's an error to pass fewer positional arguments than are required.\n@mixin mixin {\n  @content(1);\n}\n\n@include mixin using ($arg1, $arg2) {}\n",
  },
  {
    name: 'too_few/error',
    data: "Error: Missing argument $arg2.\n    ,\n3   |   @content(1);\n    |   ^^^^^^^^^^^ invocation\n... |\n6   | @include mixin using ($arg1, $arg2) {}\n    |                ==================== declaration\n    '\n  input.scss 3:3  @content\n  input.scss 3:3  mixin()\n  input.scss 6:1  root stylesheet\n",
  },
  {
    name: 'too_many/input.scss',
    data: "// It's an error to pass more positional arguments than are required.\n@mixin mixin {\n  @content(1, 2, 3);\n}\n\n@include mixin using ($arg1, $arg2) {}\n",
  },
  {
    name: 'too_many/error',
    data: "Error: Only 2 arguments allowed, but 3 were passed.\n    ,\n3   |   @content(1, 2, 3);\n    |   ^^^^^^^^^^^^^^^^^ invocation\n... |\n6   | @include mixin using ($arg1, $arg2) {}\n    |                ==================== declaration\n    '\n  input.scss 3:3  @content\n  input.scss 3:3  mixin()\n  input.scss 6:1  root stylesheet\n",
  },
]
