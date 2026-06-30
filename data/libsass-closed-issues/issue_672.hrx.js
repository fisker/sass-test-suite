export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@mixin test($arglist...) {\n    $map: meta.keywords($arglist);\n    answer: if($map, "Yep", "Nope");\n}\n\nwith-keyword-args{\n    @include test($arg1: one, $arg2: two, $arg3: three);\n}\nwith-no-args {\n    @include test();\n}\nwithout-keyword-args {\n    @include test(not-a-keyword-arg-1 , not-a-keyword-arg-2);\n}\n',
  },
  {
    name: 'output.css',
    data: 'with-keyword-args {\n  answer: "Yep";\n}\n\nwith-no-args {\n  answer: "Yep";\n}\n\nwithout-keyword-args {\n  answer: "Yep";\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass($map): "Yep"; else: "Nope")\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n4 |     answer: if($map, "Yep", "Nope");\n  |             ^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 4:13  root stylesheet\n',
  },
]
