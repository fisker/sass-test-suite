export default [
  {
    name: 'input.scss',
    data: '@use "other" with ($a: configured);\n',
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
