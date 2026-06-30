// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/37_url_expressions.hrx

export default [
  {
    name: 'input.scss',
    data: '$x: true;\n$file-1x: "budge.png";\n\n@function fudge($str) {\n  @return "assets/fudge/" + $str;\n}\n\ndiv {\n  blah: url(foo + bar);\n  blah: url(fn("s"));\n  blah: url(if(true, "red.png", "blue.png"));\n  blah: url(hello-#{world}.png);\n  blah: url(if($x, fudge("#{$file-1x}"), "#{$file-1x}"));\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: url(foobar);\n  blah: url(fn("s"));\n  blah: url("red.png");\n  blah: url(hello-world.png);\n  blah: url("assets/fudge/budge.png");\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass(true): "red.png"; else: "blue.png")\n\nMore info: https://sass-lang.com/d/if-function\n\n   ,\n11 |   blah: url(if(true, "red.png", "blue.png"));\n   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   \'\n    input.scss 11:13  root stylesheet\n\nDEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass($x): fudge("#{$file-1x}"); else: "#{$file-1x}")\n\nMore info: https://sass-lang.com/d/if-function\n\n   ,\n13 |   blah: url(if($x, fudge("#{$file-1x}"), "#{$file-1x}"));\n   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   \'\n    input.scss 13:13  root stylesheet\n',
  },
]
