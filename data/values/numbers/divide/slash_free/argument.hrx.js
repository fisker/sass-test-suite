// https://github.com/sass/sass-spec/blob/HEAD/spec/values/numbers/divide/slash_free/argument.hrx

export default [
  {
    name: 'function/user_defined/input.scss',
    data: '@function a($b) {@return 1 $b 2}\n\nc {d: a(1/2)}\n',
  },
  {
    name: 'function/user_defined/output.css',
    data: 'c {\n  d: 1 0.5 2;\n}\n',
  },
  {
    name: 'function/user_defined/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 | c {d: a(1/2)}\n  |         ^^^\n  '\n    input.scss 3:9  root stylesheet\n",
  },
  {
    name: 'function/built_in/input.scss',
    data: '@use "sass:list";\nc {d: list.join(1/2, 3/4)}\n',
  },
  {
    name: 'function/built_in/output.css',
    data: 'c {\n  d: 0.5 0.75;\n}\n',
  },
  {
    name: 'function/built_in/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(1/2, 3/4)}\n  |                 ^^^\n  '\n    input.scss 2:17  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(1/2, 3/4)}\n  |                      ^^^\n  '\n    input.scss 2:22  root stylesheet\n",
  },
  {
    name: 'function/named/input.scss',
    data: '@use "sass:list";\nc {d: list.join($list1: 1/2, $list2: 3/4)}\n',
  },
  {
    name: 'function/named/output.css',
    data: 'c {\n  d: 0.5 0.75;\n}\n',
  },
  {
    name: 'function/named/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join($list1: 1/2, $list2: 3/4)}\n  |                         ^^^\n  '\n    input.scss 2:25  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join($list1: 1/2, $list2: 3/4)}\n  |                                      ^^^\n  '\n    input.scss 2:38  root stylesheet\n",
  },
  {
    name: 'function/rest/single/input.scss',
    data: '@use "sass:list";\nc {d: list.join(1/2, 3/4...)}\n',
  },
  {
    name: 'function/rest/single/output.css',
    data: 'c {\n  d: 0.5 0.75;\n}\n',
  },
  {
    name: 'function/rest/single/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(1/2, 3/4...)}\n  |                 ^^^\n  '\n    input.scss 2:17  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(1/2, 3/4...)}\n  |                      ^^^\n  '\n    input.scss 2:22  root stylesheet\n",
  },
  {
    name: 'function/rest/list/input.scss',
    data: '@use "sass:list";\nc {d: list.join(1/2 3/4...)}\n',
  },
  {
    name: 'function/rest/list/output.css',
    data: 'c {\n  d: 0.5 0.75;\n}\n',
  },
  {
    name: 'function/rest/list/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(1/2 3/4...)}\n  |                 ^^^^^^^\n  '\n    input.scss 2:17  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(1/2 3/4...)}\n  |                 ^^^^^^^\n  '\n    input.scss 2:17  root stylesheet\n",
  },
  {
    name: 'function/rest/map/input.scss',
    data: '@use "sass:list";\nc {d: list.join(("list1": 1/2, "list2": 3/4)...)}\n',
  },
  {
    name: 'function/rest/map/output.css',
    data: 'c {\n  d: 0.5 0.75;\n}\n',
  },
  {
    name: 'function/rest/map/warning',
    data: 'DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(("list1": 1/2, "list2": 3/4)...)}\n  |                           ^^^\n  \'\n    input.scss 2:27  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4) or calc(3 / 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(("list1": 1/2, "list2": 3/4)...)}\n  |                                         ^^^\n  \'\n    input.scss 2:41  root stylesheet\n',
  },
  {
    name: 'function/rest/kwargs/input.scss',
    data: '@use "sass:list";\nc {d: list.join(1/2..., ("list2": 3/4)...)}\n',
  },
  {
    name: 'function/rest/kwargs/output.css',
    data: 'c {\n  d: 0.5 0.75;\n}\n',
  },
  {
    name: 'function/rest/kwargs/warning',
    data: 'DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(1/2..., ("list2": 3/4)...)}\n  |                 ^^^\n  \'\n    input.scss 2:17  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(3, 4) or calc(3 / 4)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n2 | c {d: list.join(1/2..., ("list2": 3/4)...)}\n  |                                   ^^^\n  \'\n    input.scss 2:35  root stylesheet\n',
  },
  {
    name: 'macro/positional/input.scss',
    data: 'c {d: if(true, 1/2, null)}\n',
  },
  {
    name: 'macro/positional/output.css',
    data: 'c {\n  d: 0.5;\n}\n',
  },
  {
    name: 'macro/positional/warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass(true): 1 / 2)\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n1 | c {d: if(true, 1/2, null)}\n  |       ^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | c {d: if(true, 1/2, null)}\n  |                ^^^\n  '\n    input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'macro/named/input.scss',
    data: 'c {d: if(true, $if-true: 1/2, $if-false: null)}\n',
  },
  {
    name: 'macro/named/output.css',
    data: 'c {\n  d: 0.5;\n}\n',
  },
  {
    name: 'macro/named/warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n1 | c {d: if(true, $if-true: 1/2, $if-false: null)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | c {d: if(true, $if-true: 1/2, $if-false: null)}\n  |                          ^^^\n  '\n    input.scss 1:26  root stylesheet\n",
  },
  {
    name: 'macro/rest/input.scss',
    data: 'c {d: if(true, 1/2 null...)}\n',
  },
  {
    name: 'macro/rest/output.css',
    data: 'c {\n  d: 0.5;\n}\n',
  },
  {
    name: 'macro/rest/warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n1 | c {d: if(true, 1/2 null...)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | c {d: if(true, 1/2 null...)}\n  |                ^^^^^^^^\n  '\n    input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'mixin/user_defined/input.scss',
    data: '@mixin a($b) {c {d: $b}}\n\n@include a(1/2);\n',
  },
  {
    name: 'mixin/user_defined/output.css',
    data: 'c {\n  d: 0.5;\n}\n',
  },
  {
    name: 'mixin/user_defined/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n3 | @include a(1/2);\n  |            ^^^\n  '\n    input.scss 3:12  root stylesheet\n",
  },
  {
    name: 'mixin/default/input.scss',
    data: '@mixin a($b: 1/2) {c {d: $b}}\n\n@include a;\n',
  },
  {
    name: 'mixin/default/output.css',
    data: 'c {\n  d: 0.5;\n}\n',
  },
  {
    name: 'mixin/default/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | @mixin a($b: 1/2) {c {d: $b}}\n  |              ^^^\n  '\n    input.scss 1:14  a()\n    input.scss 3:1   root stylesheet\n",
  },
]
