export default [
  {
    name: 'css_function/zero_argument/empty/input.scss',
    data: 'a {b: var()}\n',
  },
  {
    name: 'css_function/zero_argument/empty/output.css',
    data: 'a {\n  b: var();\n}\n',
  },
  {
    name: 'css_function/single_argument/expression/input.scss',
    data: 'a {b: var(--c)}\n',
  },
  {
    name: 'css_function/single_argument/expression/output.css',
    data: 'a {\n  b: var(--c);\n}\n',
  },
  {
    name: 'css_function/single_argument/rest/input.scss',
    data: '$name: --c;\na {b: var($name...)}\n',
  },
  {
    name: 'css_function/single_argument/rest/output.css',
    data: 'a {\n  b: var(--c);\n}\n',
  },
  {
    name: 'css_function/two_argument/expressions/input.scss',
    data: 'a {b: var(--c, d)}\n',
  },
  {
    name: 'css_function/two_argument/expressions/output.css',
    data: 'a {\n  b: var(--c, d);\n}\n',
  },
  {
    name: 'css_function/two_argument/dynamic/input.scss',
    data: 'a {b: var(--c, 1 + 2)}\n',
  },
  {
    name: 'css_function/two_argument/dynamic/output.css',
    data: 'a {\n  b: var(--c, 3);\n}\n',
  },
  {
    name: 'css_function/two_argument/rest/input.scss',
    data: '$args: --c, d;\na {b: var($args...)}\n',
  },
  {
    name: 'css_function/two_argument/rest/output.css',
    data: 'a {\n  b: var(--c, d);\n}\n',
  },
  {
    name: 'css_function/two_argument/empty/whitespace_around/input.scss',
    data: 'a {b: var(--c , )}\n',
  },
  {
    name: 'css_function/two_argument/empty/whitespace_around/output.css',
    data: 'a {\n  b: var(--c, );\n}\n',
  },
  {
    name: 'css_function/two_argument/empty/whitespace_before/input.scss',
    data: 'a {b: var(--c ,)}\n',
  },
  {
    name: 'css_function/two_argument/empty/whitespace_before/output.css',
    data: 'a {\n  b: var(--c, );\n}\n',
  },
  {
    name: 'css_function/two_argument/empty/whitespace_after/input.scss',
    data: 'a {b: var(--c, )}\n',
  },
  {
    name: 'css_function/two_argument/empty/whitespace_after/output.css',
    data: 'a {\n  b: var(--c, );\n}\n',
  },
  {
    name: 'css_function/two_argument/empty/no_whitespace/input.scss',
    data: 'a {b: var(--c,)}\n',
  },
  {
    name: 'css_function/two_argument/empty/no_whitespace/output.css',
    data: 'a {\n  b: var(--c, );\n}\n',
  },
  {
    name: 'css_function/two_argument/empty/case_insensitive/input.scss',
    data: 'a {b: VaR(--c,)}\n',
  },
  {
    name: 'css_function/two_argument/empty/case_insensitive/output.css',
    data: 'a {\n  b: VaR(--c, );\n}\n',
  },
  {
    name: 'css_function/three_argument/input.scss',
    data: 'a {b: var(--c, d, e)}\n',
  },
  {
    name: 'css_function/three_argument/output.css',
    data: 'a {\n  b: var(--c, d, e);\n}\n',
  },
  {
    name: 'sass_function/_list-info.scss',
    data: "@use 'sass:list';\n@use 'sass:meta';\n@use 'sass:string';\n\n@function _is-quoted($string) {\n  @return meta.inspect($string) == meta.inspect(string.quote($string));\n}\n\n// A mixin that provides information about the structure of a list of strings.\n@mixin list-info($list) {\n  $quoted: [];\n  $is-quoted: [];\n  @each $element in $list {\n    $quoted: list.join($quoted, string.quote($element), $separator: comma);\n    $is-quoted: list.join($is-quoted, _is-quoted($element), $separator: comma);\n  }\n  quoted: $quoted;\n  is-quoted: $is-quoted;\n}\n",
  },
  {
    name: 'sass_function/zero_argument/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($args...) {@return $args}\na {@include list-info(var())}\n",
  },
  {
    name: 'sass_function/zero_argument/output.css',
    data: 'a {\n  quoted: [];\n  is-quoted: [];\n}\n',
  },
  {
    name: 'sass_function/single_argument/expression/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($args...) {@return $args}\na {@include list-info(var(--c))}\n",
  },
  {
    name: 'sass_function/single_argument/expression/output.css',
    data: 'a {\n  quoted: ["--c"];\n  is-quoted: [false];\n}\n',
  },
  {
    name: 'sass_function/single_argument/rest/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($args...) {@return $args}\n$name: --c;\na {@include list-info(var($name...))}\n",
  },
  {
    name: 'sass_function/single_argument/rest/output.css',
    data: 'a {\n  quoted: ["--c"];\n  is-quoted: [false];\n}\n',
  },
  {
    name: 'sass_function/two_argument/expressions/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($args...) {@return $args}\na {@include list-info(var(--c, d))}\n",
  },
  {
    name: 'sass_function/two_argument/expressions/output.css',
    data: 'a {\n  quoted: ["--c", "d"];\n  is-quoted: [false, false];\n}\n',
  },
  {
    name: 'sass_function/two_argument/dynamic/input.scss',
    data: '@use \'css/functions/var/sass_function/list-info\' as *;\n@function var($args...) {@return $args}\na {@include list-info(var(--c, "d" + "e"))}\n',
  },
  {
    name: 'sass_function/two_argument/dynamic/output.css',
    data: 'a {\n  quoted: ["--c", "de"];\n  is-quoted: [false, true];\n}\n',
  },
  {
    name: 'sass_function/two_argument/rest/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($args...) {@return $args}\n$args: --c, d;\na {@include list-info(var($args...))}\n",
  },
  {
    name: 'sass_function/two_argument/rest/output.css',
    data: 'a {\n  quoted: ["--c", "d"];\n  is-quoted: [false, false];\n}\n',
  },
  {
    name: 'sass_function/two_argument/empty/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($args...) {@return $args}\na {@include list-info(var(--c, ))}\n",
  },
  {
    name: 'sass_function/two_argument/empty/output.css',
    data: 'a {\n  quoted: ["--c", ""];\n  is-quoted: [false, false];\n}\n',
  },
  {
    name: 'sass_function/two_argument/doesnt_use_function_if_case_doesnt_match/input.scss',
    data: '@function var($args...) {@return $args}\na {b: VaR(--c, )}\n',
  },
  {
    name: 'sass_function/two_argument/doesnt_use_function_if_case_doesnt_match/output.css',
    data: 'a {\n  b: VaR(--c, );\n}\n',
  },
  {
    name: 'sass_function/three_argument/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($args...) {@return $args}\na {@include list-info(var(--c, d, e))}\n",
  },
  {
    name: 'sass_function/three_argument/output.css',
    data: 'a {\n  quoted: ["--c", "d", "e"];\n  is-quoted: [false, false, false];\n}\n',
  },
  {
    name: 'sass_function/normal_trailing_comma_behavior/empty_after_rest/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($args...) {@return $args}\n\n$name: --c;\na {@include list-info(var($name..., ))}\n",
  },
  {
    name: 'sass_function/normal_trailing_comma_behavior/empty_after_rest/output.css',
    data: 'a {\n  quoted: ["--c"];\n  is-quoted: [false];\n}\n',
  },
  {
    name: 'sass_function/normal_trailing_comma_behavior/empty_after_named/input.scss',
    data: "@use 'css/functions/var/sass_function/list-info' as *;\n@function var($arg) {@return [$arg]}\na {@include list-info(var($arg: --c, ))}\n",
  },
  {
    name: 'sass_function/normal_trailing_comma_behavior/empty_after_named/output.css',
    data: 'a {\n  quoted: ["--c"];\n  is-quoted: [false];\n}\n',
  },
  {
    name: 'error/invalid_second_arg_syntax/input.scss',
    data: '// The second argument is *not* parsed as a `<declaration-value>`.\na {b: var(--c, {})}\n',
  },
  {
    name: 'error/invalid_second_arg_syntax/error',
    data: 'Error: expected ")".\n  ,\n2 | a {b: var(--c, {})}\n  |                ^\n  \'\n  input.scss 2:16  root stylesheet\n',
  },
  {
    name: 'error/empty_second_before_third/input.scss',
    data: 'a {b: var(--c, , d)}\n',
  },
  {
    name: 'error/empty_second_before_third/error',
    data: 'Error: expected ")".\n  ,\n1 | a {b: var(--c, , d)}\n  |                ^\n  \'\n  input.scss 1:16  root stylesheet\n',
  },
  {
    name: 'error/empty_after_keyword/input.scss',
    data: '@function var($name, $arg) {@return null}\na {b: var($name: --c, )}\n',
  },
  {
    name: 'error/empty_after_keyword/error',
    data: "Error: Missing argument $arg.\n  ,\n1 | @function var($name, $arg) {@return null}\n  |           ================ declaration\n2 | a {b: var($name: --c, )}\n  |       ^^^^^^^^^^^^^^^^^ invocation\n  '\n  input.scss 2:7  var()\n  input.scss 2:7  root stylesheet\n",
  },
]
