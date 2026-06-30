// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/warn.hrx

export default [
  {
    name: 'position/top_level/input.scss',
    data: '@warn "w";\n',
  },
  {
    name: 'position/top_level/output.css',
    data: '',
  },
  {
    name: 'position/top_level/warning',
    data: 'WARNING: w\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'position/ruleset/input.scss',
    data: 'a {\n  @warn "w";\n  b: c;\n}\n',
  },
  {
    name: 'position/ruleset/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'position/ruleset/warning',
    data: 'WARNING: w\n    input.scss 2:3  root stylesheet\n',
  },
  {
    name: 'position/property/input.scss',
    data: 'a {\n  b: {\n    @warn "w";\n    c: d;\n  }\n}\n',
  },
  {
    name: 'position/property/output.css',
    data: 'a {\n  b-c: d;\n}\n',
  },
  {
    name: 'position/property/warning',
    data: 'WARNING: w\n    input.scss 3:5  root stylesheet\n',
  },
  {
    name: 'position/mixin/input.scss',
    data: '@mixin b() {\n  @warn test;\n  c: d;\n}\n\na {\n  @include b();\n}\n',
  },
  {
    name: 'position/mixin/output.css',
    data: 'a {\n  c: d;\n}\n',
  },
  {
    name: 'position/mixin/warning',
    data: 'WARNING: test\n    input.scss 2:3  b()\n    input.scss 7:3  root stylesheet\n',
  },
  {
    name: 'position/function/input.scss',
    data: '@function c() {\n  @warn test;\n  @return d;\n}\n\na {\n  b: c();\n}\n',
  },
  {
    name: 'position/function/output.css',
    data: 'a {\n  b: d;\n}\n',
  },
  {
    name: 'position/function/warning',
    data: 'WARNING: test\n    input.scss 2:3  c()\n    input.scss 7:6  root stylesheet\n',
  },
  {
    name: 'escaped/input.scss',
    data: '@w\\61rn warning;\na {b: c}\n',
  },
  {
    name: 'escaped/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'escaped/warning',
    data: 'WARNING: warning\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'functions_in_stack/input.scss',
    data: '@use "sass:meta";\n\n@function issues-warning($a) {\n  @warn "From function: #{meta.inspect($a)}";\n  @return $a;\n}\n\n@mixin calls-function-that-warns($a) {\n  warned: issues-warning($a);\n}\n\n.test {\n  @include calls-function-that-warns(testing);\n}\n',
  },
  {
    name: 'functions_in_stack/output.css',
    data: '.test {\n  warned: testing;\n}\n',
  },
  {
    name: 'functions_in_stack/warning',
    data: 'WARNING: From function: testing\n    input.scss 4:3   issues-warning()\n    input.scss 9:11  calls-function-that-warns()\n    input.scss 13:3  root stylesheet\n',
  },
  {
    name: 'comment/before_expression/loud/input.scss',
    data: '@warn /**/ a\n',
  },
  {
    name: 'comment/before_expression/loud/output.css',
    data: '',
  },
  {
    name: 'comment/before_expression/loud/warning',
    data: 'WARNING: a\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'comment/before_expression/silent/input.scss',
    data: '@warn //\n  a\n',
  },
  {
    name: 'comment/before_expression/silent/output.css',
    data: '',
  },
  {
    name: 'comment/before_expression/silent/warning',
    data: 'WARNING: a\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'comment/after_expression/loud/input.scss',
    data: '@warn a /**/\n',
  },
  {
    name: 'comment/after_expression/loud/output.css',
    data: '',
  },
  {
    name: 'comment/after_expression/loud/warning',
    data: 'WARNING: a\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'comment/after_expression/silent/input.scss',
    data: '@warn a //\n',
  },
  {
    name: 'comment/after_expression/silent/output.css',
    data: '',
  },
  {
    name: 'comment/after_expression/silent/warning',
    data: 'WARNING: a\n    input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'sass/semicolon/input.sass',
    data: '@warn a;\n',
  },
  {
    name: 'sass/semicolon/output.css',
    data: '',
  },
  {
    name: 'sass/semicolon/warning',
    data: 'WARNING: a\n    input.sass 1:1  root stylesheet\n',
  },
  {
    name: 'sass/multiline/input.sass',
    data: '@warn\na\n',
  },
  {
    name: 'sass/multiline/output.css',
    data: '',
  },
  {
    name: 'sass/multiline/warning',
    data: 'WARNING: a\n    input.sass 1:1  root stylesheet\n',
  },
]
