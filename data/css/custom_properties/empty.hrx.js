export default [
  {
    name: 'literal/input.scss',
    data: '.empty {\n  --property:;\n}\n',
  },
  {
    name: 'literal/output.css',
    data: '.empty {\n  --property:;\n}\n',
  },
  {
    name: 'interpolation/input.scss',
    data: '.empty {\n  --property:#{""};\n}\n',
  },
  {
    name: 'interpolation/output.css',
    data: '.empty {\n  --property:;\n}\n',
  },
]
