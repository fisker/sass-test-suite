export default [
  {
    name: 'newlines/function/after_paren/scss/input.scss',
    data: '@function a(\n  $b, $c){}\n',
  },
  {
    name: 'newlines/function/after_paren/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_paren/sass/input.sass',
    data: '@function a(\n  $b, $c)\n',
  },
  {
    name: 'newlines/function/after_paren/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_arg/scss/input.scss',
    data: '@function a($b\n  , $c){}\n',
  },
  {
    name: 'newlines/function/after_arg/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_arg/sass/input.sass',
    data: '@function a($b\n  , $c)\n',
  },
  {
    name: 'newlines/function/after_arg/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_comma/scss/input.scss',
    data: '@function a($b,\n  $c){}\n',
  },
  {
    name: 'newlines/function/after_comma/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_comma/sass/input.sass',
    data: '@function a($b,\n  $c)\n',
  },
  {
    name: 'newlines/function/after_comma/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/before_colon/scss/input.scss',
    data: '@function a($b, $c\n    :d){}\n',
  },
  {
    name: 'newlines/function/before_colon/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/before_colon/sass/input.sass',
    data: '@function a($b, $c\n    :d)\n',
  },
  {
    name: 'newlines/function/before_colon/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_colon/scss/input.scss',
    data: '@function a($b, $c:\n    d){}\n',
  },
  {
    name: 'newlines/function/after_colon/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_colon/sass/input.sass',
    data: '@function a($b, $c:\n    d)\n',
  },
  {
    name: 'newlines/function/after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/space_after_colon/sass/input.sass',
    data: '@function a($b, $c: d\n    e)\n',
  },
  {
    name: 'newlines/function/space_after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/before_paren/scss/input.scss',
    data: '@function a($b, $c\n  ){}\n',
  },
  {
    name: 'newlines/function/before_paren/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/before_paren/sass/input.sass',
    data: '@function a($b, $c\n  )\n',
  },
  {
    name: 'newlines/function/before_paren/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/before_list_arg/scss/input.scss',
    data: '@function a(\n  $b...){}\n',
  },
  {
    name: 'newlines/function/before_list_arg/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/before_list_arg/sass/input.sass',
    data: '@function a(\n  $b...)\n',
  },
  {
    name: 'newlines/function/before_list_arg/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/before_list/scss/input.scss',
    data: '@function a($b\n  ...){}\n',
  },
  {
    name: 'newlines/function/before_list/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/before_list/sass/input.sass',
    data: '@function a($b\n  ...)\n',
  },
  {
    name: 'newlines/function/before_list/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_list/scss/input.scss',
    data: '@function a($b...\n  ){}\n',
  },
  {
    name: 'newlines/function/after_list/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function/after_list/sass/input.sass',
    data: '@function a($b...\n  )\n',
  },
  {
    name: 'newlines/function/after_list/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_paren/scss/input.scss',
    data: '@function a($b, $c){@return null}\n$d: a(\n  e, f)',
  },
  {
    name: 'newlines/function_invocation/after_paren/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_paren/sass/input.sass',
    data: '@function a($b, $c)\n  @return null\n$d: a(\n  e, f)\n',
  },
  {
    name: 'newlines/function_invocation/after_paren/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_arg/scss/input.scss',
    data: '@function a($b, $c){@return null}\n$d: a(e\n  , f)\n',
  },
  {
    name: 'newlines/function_invocation/after_arg/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_arg/sass/input.sass',
    data: '@function a($b, $c)\n  @return null\n$d: a(e\n  , f)\n',
  },
  {
    name: 'newlines/function_invocation/after_arg/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_comma/scss/input.scss',
    data: '@function a($b, $c){@return null}\n$d: a(e,\n  f)\n',
  },
  {
    name: 'newlines/function_invocation/after_comma/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_comma/sass/input.sass',
    data: '@function a($b, $c)\n  @return null\n$d: a(e,\n  f)\n',
  },
  {
    name: 'newlines/function_invocation/after_comma/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/before_colon/scss/input.scss',
    data: '@function a($b, $c:d){@return null}\n$e: a(f, $c\n  :g)\n',
  },
  {
    name: 'newlines/function_invocation/before_colon/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/before_colon/sass/input.sass',
    data: '@function a($b, $c:d)\n  @return null\n$e: a(f, $c\n  :g)\n',
  },
  {
    name: 'newlines/function_invocation/before_colon/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_colon/scss/input.scss',
    data: '@function a($b, $c:d){@return null}\n$e: a(f, $c:\n  g)\n',
  },
  {
    name: 'newlines/function_invocation/after_colon/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_colon/sass/input.sass',
    data: '@function a($b, $c:d)\n  @return null\n$e: a(f, $c:\n  g)\n',
  },
  {
    name: 'newlines/function_invocation/after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/space_after_colon/sass/input.sass',
    data: '@function a($b, $c:d)\n  @return null\n$e: a(f, $c: g\n  h)\n',
  },
  {
    name: 'newlines/function_invocation/space_after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/before_paren/scss/input.scss',
    data: '@function a($b, $c:d){@return null}\n$e: a(f, $c: g\n  )\n',
  },
  {
    name: 'newlines/function_invocation/before_paren/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/before_paren/sass/input.sass',
    data: '@function a($b, $c:d)\n  @return null\n$e: a(f, $c: g\n  )\n',
  },
  {
    name: 'newlines/function_invocation/before_paren/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/before_list_arg/scss/input.scss',
    data: '@function a($b, $c){@return null}\n$d: e f;\n$g: a(\n  $d...)\n',
  },
  {
    name: 'newlines/function_invocation/before_list_arg/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/before_list_arg/sass/input.sass',
    data: '@function a($b, $c)\n  @return null\n$d: e, f\n$g: a(\n  $d...)\n',
  },
  {
    name: 'newlines/function_invocation/before_list_arg/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/before_list/scss/input.scss',
    data: '@function a($b, $c){@return null}\n$d: e f;\n$g: a($d\n  ...)\n',
  },
  {
    name: 'newlines/function_invocation/before_list/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/before_list/sass/input.sass',
    data: '@function a($b, $c)\n  @return null\n$d: e, f\n$g: a($d\n  ...)\n',
  },
  {
    name: 'newlines/function_invocation/before_list/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_list/scss/input.scss',
    data: '@function a($b, $c){@return null}\n$d: e f;\n$g: a($d...\n  )\n',
  },
  {
    name: 'newlines/function_invocation/after_list/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/function_invocation/after_list/sass/input.sass',
    data: '@function a($b, $c)\n  @return null\n$d: e, f\n$g: a($d...\n  )\n',
  },
  {
    name: 'newlines/function_invocation/after_list/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_paren/scss/input.scss',
    data: '@mixin a(\n  $b, $c){}\n',
  },
  {
    name: 'newlines/mixin/after_paren/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_paren/sass/input.sass',
    data: '@mixin a(\n  $b, $c)\n',
  },
  {
    name: 'newlines/mixin/after_paren/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_arg/scss/input.scss',
    data: '@mixin a($b\n  , $c){}\n',
  },
  {
    name: 'newlines/mixin/after_arg/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_arg/sass/input.sass',
    data: '@mixin a($b\n  , $c)\n',
  },
  {
    name: 'newlines/mixin/after_arg/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_comma/scss/input.scss',
    data: '@mixin a($b,\n  $c){}\n',
  },
  {
    name: 'newlines/mixin/after_comma/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_comma/sass/input.sass',
    data: '@mixin a($b,\n  $c)\n',
  },
  {
    name: 'newlines/mixin/after_comma/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/before_colon/scss/input.scss',
    data: '@mixin a($b, $c\n    :d){}\n',
  },
  {
    name: 'newlines/mixin/before_colon/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/before_colon/sass/input.sass',
    data: '@mixin a($b, $c\n    :d)\n',
  },
  {
    name: 'newlines/mixin/before_colon/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_colon/scss/input.scss',
    data: '@mixin a($b, $c:\n    d){}\n',
  },
  {
    name: 'newlines/mixin/after_colon/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_colon/sass/input.sass',
    data: '@mixin a($b, $c:\n    d)\n',
  },
  {
    name: 'newlines/mixin/after_colon/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/before_paren/scss/input.scss',
    data: '@mixin a($b, $c\n  ){}\n',
  },
  {
    name: 'newlines/mixin/before_paren/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/before_paren/sass/input.sass',
    data: '@mixin a($b, $c\n  )\n',
  },
  {
    name: 'newlines/mixin/before_paren/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/before_list_arg/scss/input.scss',
    data: '@mixin a(\n  $b...){}\n',
  },
  {
    name: 'newlines/mixin/before_list_arg/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/before_list_arg/sass/input.sass',
    data: '@mixin a(\n  $b...)\n',
  },
  {
    name: 'newlines/mixin/before_list_arg/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/before_list/scss/input.scss',
    data: '@mixin a($b\n  ...){}\n',
  },
  {
    name: 'newlines/mixin/before_list/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/before_list/sass/input.sass',
    data: '@mixin a($b\n  ...)\n',
  },
  {
    name: 'newlines/mixin/before_list/sass/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_list/scss/input.scss',
    data: '@mixin a($b...\n  ){}\n',
  },
  {
    name: 'newlines/mixin/after_list/scss/output.css',
    data: '',
  },
  {
    name: 'newlines/mixin/after_list/sass/input.sass',
    data: '@mixin a($b...\n  )\n',
  },
  {
    name: 'newlines/mixin/after_list/sass/output.css',
    data: '',
  },
]
