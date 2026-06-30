// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/env.hrx

export default [
  {
    name: 'input.scss',
    data: '$x: 0;\n\ndiv {\n  /* 0 */\n  font: $x;\n  $x: 1 !global;\n  /* 1 */\n  font: $x;\n  span {\n    $x: 2 !global;\n    /* 2 */\n    font: $x;\n  }\n  /* 2 */\n  font: $x;\n  p {\n    /* 2 */\n    font: $x;\n  }\n}\n\ndiv {\n  @foo {\n    $y: 2;\n    font: $y;\n  }\n  @bar {\n    $y: 3;\n    font: $y;\n  }\n}\n\n@mixin foo() {\n  content: "foo";\n  @content;\n}\n\ndiv {\n  $z: "whatever";\n  @include foo() {\n    $z: "block for foo!";\n    font: fudge;\n  }\n  width: $z;\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  /* 0 */\n  font: 0;\n  /* 1 */\n  font: 1;\n}\ndiv span {\n  /* 2 */\n  font: 2;\n}\ndiv {\n  /* 2 */\n  font: 2;\n}\ndiv p {\n  /* 2 */\n  font: 2;\n}\n\n@foo {\n  div {\n    font: 2;\n  }\n}\n@bar {\n  div {\n    font: 3;\n  }\n}\n\ndiv {\n  content: "foo";\n  font: fudge;\n  width: "block for foo!";\n}\n',
  },
]
