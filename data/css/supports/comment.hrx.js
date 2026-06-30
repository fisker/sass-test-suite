// https://github.com/sass/sass-spec/blob/HEAD/spec/css/supports/comment.hrx

export default [
  {
    name: 'before_query/loud/input.scss',
    data: '@supports /**/ (a: b) {c {d: e}}\n',
  },
  {
    name: 'before_query/loud/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'before_query/silent/input.scss',
    data: '@supports //\n  (a: b) {c {d: e}}\n',
  },
  {
    name: 'before_query/silent/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/after_open_paren/loud/input.scss',
    data: '@supports (/**/ a: b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/after_open_paren/loud/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/after_open_paren/silent/input.scss',
    data: '@supports (//\n  a: b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/after_open_paren/silent/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/before_colon/loud/input.scss',
    data: '@supports (a /**/: b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/before_colon/loud/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/before_colon/silent/input.scss',
    data: '@supports (a //\n  : b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/before_colon/silent/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/after_colon/loud/input.scss',
    data: '@supports (a: /**/ b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/after_colon/loud/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/after_colon/silent/input.scss',
    data: '@supports (a: //\n  b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/after_colon/silent/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/before_close_paren/loud/input.scss',
    data: '@supports (a: b /**/) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/before_close_paren/loud/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/before_close_paren/silent/input.scss',
    data: '@supports (a: b //\n  ) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/before_close_paren/silent/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/custom_prop/after_open_paren/loud/input.scss',
    data: '@supports (/**/ --a: b) {c {d: e}}\n',
  },
  {
    name: 'declaration/custom_prop/after_open_paren/loud/output.css',
    data: '@supports (--a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/custom_prop/after_open_paren/silent/input.scss',
    data: '@supports (//\n  --a: b) {c {d: e}}\n',
  },
  {
    name: 'declaration/custom_prop/after_open_paren/silent/output.css',
    data: '@supports (--a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/custom_prop/before_colon/loud/input.scss',
    data: '@supports (--a /**/: b) {c {d: e}}\n',
  },
  {
    name: 'declaration/custom_prop/before_colon/loud/output.css',
    data: '@supports (--a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/custom_prop/before_colon/silent/input.scss',
    data: '@supports (--a //\n  : b) {c {d: e}}\n',
  },
  {
    name: 'declaration/custom_prop/before_colon/silent/output.css',
    data: '@supports (--a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/custom_prop/after_colon/loud/input.scss',
    data: '@supports (--a: /**/ b) {c {d: e}}\n',
  },
  {
    name: 'declaration/custom_prop/after_colon/loud/output.css',
    data: '@supports (--a: /**/ b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/custom_prop/after_colon/silent/input.scss',
    data: '@supports (--a: //\n  b) {c {d: e}}\n',
  },
  {
    name: 'declaration/custom_prop/after_colon/silent/output.css',
    data: '@supports (--a:  b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/custom_prop/before_close_paren/loud/input.scss',
    data: '@supports (--a: b /**/) {c {d: e}}\n',
  },
  {
    name: 'declaration/custom_prop/before_close_paren/loud/output.css',
    data: '@supports (--a: b /**/) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/custom_prop/before_close_paren/silent/input.scss',
    data: '@supports (--a: b //\n  ) {c {d: e}}\n',
  },
  {
    name: 'declaration/custom_prop/before_close_paren/silent/output.css',
    data: '@supports (--a: b  ) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'function/after_open_paren/loud/input.scss',
    data: '@supports a(/**/ b) {c {d: e}}\n',
  },
  {
    name: 'function/after_open_paren/loud/output.css',
    data: '@supports a(/**/ b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'function/after_open_paren/silent/input.scss',
    data: '@supports a(//\n  b) {c {d: e}}\n',
  },
  {
    name: 'function/after_open_paren/silent/output.css',
    data: '@supports a(\n  b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'function/before_close_paren/loud/input.scss',
    data: '@supports a(b /**/) {c {d: e}}\n',
  },
  {
    name: 'function/before_close_paren/loud/output.css',
    data: '@supports a(b /**/) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'function/before_close_paren/silent/input.scss',
    data: '@supports a(b //\n  ) {c {d: e}}\n',
  },
  {
    name: 'function/before_close_paren/silent/output.css',
    data: '@supports a(b \n  ) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/after_open_paren/loud/input.scss',
    data: '@supports (/**/ a b) {c {d: e}}\n',
  },
  {
    name: 'anything/after_open_paren/loud/output.css',
    data: '@supports (a b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/after_open_paren/silent/input.scss',
    data: '@supports (//\n  a b) {c {d: e}}\n',
  },
  {
    name: 'anything/after_open_paren/silent/output.css',
    data: '@supports (a b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/after_ident/loud/input.scss',
    data: '@supports (a /**/ b) {c {d: e}}\n',
  },
  {
    name: 'anything/after_ident/loud/output.css',
    data: '@supports (a /**/ b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/after_ident/silent/input.scss',
    data: '@supports (a //\n  b) {c {d: e}}\n',
  },
  {
    name: 'anything/after_ident/silent/output.css',
    data: '@supports (a \n  b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/before_close_paren/loud/input.scss',
    data: '@supports (a b /**/) {c {d: e}}\n',
  },
  {
    name: 'anything/before_close_paren/loud/output.css',
    data: '@supports (a b /**/) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/before_close_paren/silent/input.scss',
    data: '@supports (a b //\n  ) {c {d: e}}\n',
  },
  {
    name: 'anything/before_close_paren/silent/output.css',
    data: '@supports (a b \n  ) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'after_query/loud/input.scss',
    data: '@supports (a: b) /**/ {c {d: e}}\n',
  },
  {
    name: 'after_query/loud/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'after_query/silent/input.scss',
    data: '@supports (a: b) //\n  {c {d: e}}\n',
  },
  {
    name: 'after_query/silent/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
]
