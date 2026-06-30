// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/alpha.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n$x: rgb(0, 255, 255);\n\ndiv {\n  color: rgb(255, $blue: 0, $green: 255);\n  background: rgb(123, 45, 6);\n//  flah: rgba(0, 0, 0, 1) + #111;\n  grah: rgba(#f0e, $alpha: .5);\n//  blah: rgba(1,2,3,.6);\n  \n  floo: $x;\n//  bloo: rgba($x, 0.7);\n  groo: $x;\n  \n  $x: rgb(123, 45, 6);\n  \n  hoo: color.red($x);\n  moo: color.green($x);\n  poo: color.blue($x);\n  \n//  goo: mix(rgba(255, 0, 0, 0.5), #00f);\n  \n  boo: color.invert(#123456);\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  color: rgb(255, 255, 0);\n  background: rgb(123, 45, 6);\n  grah: rgba(255, 0, 238, 0.5);\n  floo: rgb(0, 255, 255);\n  groo: rgb(0, 255, 255);\n  hoo: 123;\n  moo: 45;\n  poo: 6;\n  boo: #edcba9;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [color-functions]: color.red() is deprecated. Suggestion:\n\ncolor.channel($color, "red", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n   ,\n17 |   hoo: color.red($x);\n   |        ^^^^^^^^^^^^^\n   \'\n    input.scss 17:8  root stylesheet\n\nDEPRECATION WARNING [color-functions]: color.green() is deprecated. Suggestion:\n\ncolor.channel($color, "green", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n   ,\n18 |   moo: color.green($x);\n   |        ^^^^^^^^^^^^^^^\n   \'\n    input.scss 18:8  root stylesheet\n\nDEPRECATION WARNING [color-functions]: color.blue() is deprecated. Suggestion:\n\ncolor.channel($color, "blue", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n   ,\n19 |   poo: color.blue($x);\n   |        ^^^^^^^^^^^^^^\n   \'\n    input.scss 19:8  root stylesheet\n',
  },
]
