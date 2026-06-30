// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2246.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:math\";\n@mixin foo($option: 'foo') {\n     // Create a unique, random placeholder to store styles\n    $placeholder : $option + math.random(9999);\n\n    // Store the styles in the placeholder\n    @at-root %#{$placeholder} {\n        content: 'foo';\n    }\n\n    @at-root {\n        .bar {\n            @extend %#{$placeholder};\n        }\n    }\n}\n\n@mixin bar($option) {\n    @include foo($option);\n}\n\n.foo {\n    @include bar('baz');\n}",
  },
  {
    name: 'output.css',
    data: '.bar {\n  content: "foo";\n}\n',
  },
]
