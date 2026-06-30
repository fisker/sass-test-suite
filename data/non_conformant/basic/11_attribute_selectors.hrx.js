export default [
  {
    name: 'input.scss',
    data: '[hey  =  \'ho\'], a > b {\n  blah: blah;\n  c, [hoo *=    "ha" ] {\n    bloo: bloo;\n  }\n}',
  },
  {
    name: 'output.css',
    data: '[hey=ho], a > b {\n  blah: blah;\n}\n[hey=ho] c, [hey=ho] [hoo*=ha], a > b c, a > b [hoo*=ha] {\n  bloo: bloo;\n}\n',
  },
]
