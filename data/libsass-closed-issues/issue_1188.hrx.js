// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1188.hrx

export default [
  {
    name: 'input.scss',
    data: "$columns: 4;\n$context: 120px;\n$name-multiplicator: 2;\nfoo {\n  *width: expression((this.parentNode.clientWidth/#{$context}*#{($columns / $name-multiplicator)} - parseInt(this.currentStyle['paddingLeft']) - parseInt(this.currentStyle['paddingRight'])) + 'px');\n}",
  },
  {
    name: 'output.css',
    data: "foo {\n  *width: expression((this.parentNode.clientWidth/120px*2 - parseInt(this.currentStyle['paddingLeft']) - parseInt(this.currentStyle['paddingRight'])) + 'px');\n}\n",
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div($columns, $name-multiplicator) or calc($columns / $name-multiplicator)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n5 |   *width: expression((this.parentNode.clientWidth/#{$context}*#{($columns / $name-multiplicator)} - parseInt(this.currentStyle['paddingLeft']) - parseInt(this.currentStyle['paddingRight'])) + 'px');\n  |                                                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 5:66  root stylesheet\n",
  },
]
