// https://github.com/sass/sass-spec/blob/HEAD/spec/values/colors/alpha_hex/initial_letter.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\na {\n  four-digit: #AbCd;\n  eight-digit: #aBcDeF12;\n\n  // Verify that the color channels are set correctly.\n  four-digit-red: color.red(#abcd);\n  four-digit-green: color.green(#abcd);\n  four-digit-blue: color.blue(#abcd);\n  four-digit-alpha: color.alpha(#abcd);\n\n  eight-digit-red: color.red(#ABCDEF12);\n  eight-digit-green: color.green(#ABCDEF12);\n  eight-digit-blue: color.blue(#ABCDEF12);\n  eight-digit-alpha: color.alpha(#ABCDEF12);\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  four-digit: rgba(170, 187, 204, 0.8666666667);\n  eight-digit: rgba(171, 205, 239, 0.0705882353);\n  four-digit-red: 170;\n  four-digit-green: 187;\n  four-digit-blue: 204;\n  four-digit-alpha: 0.8666666667;\n  eight-digit-red: 171;\n  eight-digit-green: 205;\n  eight-digit-blue: 239;\n  eight-digit-alpha: 0.0705882353;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [color-functions]: color.red() is deprecated. Suggestion:\n\ncolor.channel($color, "red", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n7 |   four-digit-red: color.red(#abcd);\n  |                   ^^^^^^^^^^^^^^^^\n  \'\n    input.scss 7:19  root stylesheet\n\nDEPRECATION WARNING [color-functions]: color.green() is deprecated. Suggestion:\n\ncolor.channel($color, "green", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n8 |   four-digit-green: color.green(#abcd);\n  |                     ^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 8:21  root stylesheet\n\nDEPRECATION WARNING [color-functions]: color.blue() is deprecated. Suggestion:\n\ncolor.channel($color, "blue", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n  ,\n9 |   four-digit-blue: color.blue(#abcd);\n  |                    ^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 9:20  root stylesheet\n\nDEPRECATION WARNING [color-functions]: color.red() is deprecated. Suggestion:\n\ncolor.channel($color, "red", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n   ,\n12 |   eight-digit-red: color.red(#ABCDEF12);\n   |                    ^^^^^^^^^^^^^^^^^^^^\n   \'\n    input.scss 12:20  root stylesheet\n\nDEPRECATION WARNING [color-functions]: color.green() is deprecated. Suggestion:\n\ncolor.channel($color, "green", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n   ,\n13 |   eight-digit-green: color.green(#ABCDEF12);\n   |                      ^^^^^^^^^^^^^^^^^^^^^^\n   \'\n    input.scss 13:22  root stylesheet\n\nDEPRECATION WARNING [color-functions]: color.blue() is deprecated. Suggestion:\n\ncolor.channel($color, "blue", $space: rgb)\n\nMore info: https://sass-lang.com/d/color-functions\n\n   ,\n14 |   eight-digit-blue: color.blue(#ABCDEF12);\n   |                     ^^^^^^^^^^^^^^^^^^^^^\n   \'\n    input.scss 14:21  root stylesheet\n',
  },
]
