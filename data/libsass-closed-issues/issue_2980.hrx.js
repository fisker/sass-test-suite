// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2980.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:map";\n$config: (\n        phone: (\n                break-point-width:0px,\n                break-point-name: xs\n        ),\n        tablet: (\n                break-point-width:600px,\n                break-point-name: sm\n        ),\n        laptop: (\n                break-point-width:900px,\n                break-point-name: md\n        ),\n        desktop: (\n                break-point-width:1200px,\n                break-point-name:lg\n        ),\n);\n\n@each $key, $map in $config {\n  $break-point-width: map.get($map, break-point-width);\n  $break-point-name: map.get($map, break-point-name);\n  $infix: if($break-point-width == 0px, null, -$break-point-name);\n      .foo#{$infix} {\n        content: \'#{$break-point-name}\';\n      }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: "xs";\n}\n\n.foo-sm {\n  content: "sm";\n}\n\n.foo-md {\n  content: "md";\n}\n\n.foo-lg {\n  content: "lg";\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(not sass($break-point-width == 0px): -$break-point-name)\n\nMore info: https://sass-lang.com/d/if-function\n\n   ,\n24 |   $infix: if($break-point-width == 0px, null, -$break-point-name);\n   |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   '\n    input.scss 24:11  root stylesheet\n",
  },
]
