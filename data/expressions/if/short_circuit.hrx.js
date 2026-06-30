export default [
  {
    name: 'clause/root/sass/input.scss',
    data: 'a {b: if(sass(true): c; sass($undefined): d)}\n',
  },
  {
    name: 'clause/root/sass/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'clause/root/interp/input.scss',
    data: 'a {b: if(sass(true): c; #{$undefined}: d)}\n',
  },
  {
    name: 'clause/root/interp/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'clause/root/css/input.scss',
    data: 'a {b: if(sass(true): c; css(#{$undefined}): d)}\n',
  },
  {
    name: 'clause/root/css/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'clause/and/sass/input.scss',
    data: 'a {b: if(sass(false) and sass($undefined): c)}\n',
  },
  {
    name: 'clause/and/sass/output.css',
    data: '',
  },
  {
    name: 'clause/and/interp/input.scss',
    data: 'a {b: if(sass(false) and #{$undefined}: c)}\n',
  },
  {
    name: 'clause/and/interp/output.css',
    data: '',
  },
  {
    name: 'clause/and/css/input.scss',
    data: 'a {b: if(sass(false) and css(#{$undefined}): c)}\n',
  },
  {
    name: 'clause/and/css/output.css',
    data: '',
  },
  {
    name: 'clause/or/sass/input.scss',
    data: 'a {b: if(sass(true) or sass($undefined): c)}\n',
  },
  {
    name: 'clause/or/sass/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'clause/or/interp/input.scss',
    data: 'a {b: if(sass(true) or #{$undefined}: c)}\n',
  },
  {
    name: 'clause/or/interp/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'clause/or/css/input.scss',
    data: 'a {b: if(sass(true) or css(#{$undefined}): c)}\n',
  },
  {
    name: 'clause/or/css/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'value/unmatched/input.scss',
    data: 'a {b: if(sass(false): $undefined; else: c)}\n',
  },
  {
    name: 'value/unmatched/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'value/after_matched/input.scss',
    data: 'a {b: if(sass(true): c; else: $undefined)}\n',
  },
  {
    name: 'value/after_matched/output.css',
    data: 'a {\n  b: c;\n}\n\n',
  },
]
