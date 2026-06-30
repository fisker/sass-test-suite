// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/32_percentages.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  width: 10% + 20%;\n  height: 10% - 20%;\n  width: 10% + 10;\n  width: 10 + 10%;\n  height: 10% - 10;\n  height: 10 - 10%;\n  blah: (20% / 4%);\n  flah: 12 * 75%;\n  grah: 75% * 12;\n  // hwah: (24 / 8%);\n  nyah: (35% / 7);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  width: 30%;\n  height: -10%;\n  width: 20%;\n  width: 20%;\n  height: 0%;\n  height: 0%;\n  blah: 5;\n  flah: 900%;\n  grah: 900%;\n  nyah: 5%;\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(20%, 4%) or calc(20% / 4%)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n8 |   blah: (20% / 4%);\n  |          ^^^^^^^^\n  '\n    input.scss 8:10  root stylesheet\n\nDEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(35%, 7) or calc(35% / 7)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n   ,\n12 |   nyah: (35% / 7);\n   |          ^^^^^^^\n   '\n    input.scss 12:10  root stylesheet\n",
  },
]
