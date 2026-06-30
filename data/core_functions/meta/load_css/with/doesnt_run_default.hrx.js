// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/load_css/with/doesnt_run_default.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (a: configured));\n',
  },
  {
    name: '_other.scss',
    data: "// This will throw an error if it's evaluated, but it shouldn't be because `$a`\n// already has a value.\n$a: 1px + 1em !default;\nb {c: $a}\n",
  },
  {
    name: 'output.css',
    data: 'b {\n  c: configured;\n}\n',
  },
]
