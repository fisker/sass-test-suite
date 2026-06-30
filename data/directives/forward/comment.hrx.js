export default [
  {
    name: 'before_url/loud/input.scss',
    data: '@forward /**/ "other"\n',
  },
  {
    name: 'before_url/loud/other.scss',
    data: '',
  },
  {
    name: 'before_url/loud/output.css',
    data: '',
  },
  {
    name: 'before_url/silent/input.scss',
    data: '@forward //\n  "other"\n',
  },
  {
    name: 'before_url/silent/other.scss',
    data: '',
  },
  {
    name: 'before_url/silent/output.css',
    data: '',
  },
  {
    name: 'after_url/loud/input.scss',
    data: '@forward "other" /**/\n',
  },
  {
    name: 'after_url/loud/other.scss',
    data: '',
  },
  {
    name: 'after_url/loud/output.css',
    data: '',
  },
  {
    name: 'after_url/silent/input.scss',
    data: '@forward "other" //\n',
  },
  {
    name: 'after_url/silent/other.scss',
    data: '',
  },
  {
    name: 'after_url/silent/output.css',
    data: '',
  },
  {
    name: 'before_keyword/loud/input.scss',
    data: '@forward "other" /**/ as a-*\n',
  },
  {
    name: 'before_keyword/loud/other.scss',
    data: '',
  },
  {
    name: 'before_keyword/loud/output.css',
    data: '',
  },
  {
    name: 'before_keyword/silent/input.scss',
    data: '@forward "other" //\n  as a-*\n',
  },
  {
    name: 'before_keyword/silent/other.scss',
    data: '',
  },
  {
    name: 'before_keyword/silent/output.css',
    data: '',
  },
  {
    name: 'after_keyword/loud/input.scss',
    data: '@forward "other" as /**/ a-*\n',
  },
  {
    name: 'after_keyword/loud/other.scss',
    data: '',
  },
  {
    name: 'after_keyword/loud/output.css',
    data: '',
  },
  {
    name: 'after_keyword/silent/input.scss',
    data: '@forward "other" as //\n  a-*\n',
  },
  {
    name: 'after_keyword/silent/other.scss',
    data: '',
  },
  {
    name: 'after_keyword/silent/output.css',
    data: '',
  },
  {
    name: 'after_modifier/loud/input.scss',
    data: '@forward "other" as a-* /**/\n',
  },
  {
    name: 'after_modifier/loud/other.scss',
    data: '',
  },
  {
    name: 'after_modifier/loud/output.css',
    data: '',
  },
  {
    name: 'after_modifier/silent/input.scss',
    data: '@forward "other" as a-* //\n',
  },
  {
    name: 'after_modifier/silent/other.scss',
    data: '',
  },
  {
    name: 'after_modifier/silent/output.css',
    data: '',
  },
  {
    name: 'after_open_paren/loud/input.scss',
    data: '@forward "other" with (/**/ $a: b)\n',
  },
  {
    name: 'after_open_paren/loud/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_open_paren/loud/output.css',
    data: '',
  },
  {
    name: 'after_paren/silent/input.scss',
    data: '@forward "other" with (//\n  $a: b)\n',
  },
  {
    name: 'after_paren/silent/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_paren/silent/output.css',
    data: '',
  },
  {
    name: 'before_colon/loud/input.scss',
    data: '@forward "other" with ($a /**/ : b)\n',
  },
  {
    name: 'before_colon/loud/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'before_colon/loud/output.css',
    data: '',
  },
  {
    name: 'before_colon/silent/input.scss',
    data: '@forward "other" with ($a //\n  : b)\n',
  },
  {
    name: 'before_colon/silent/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'before_colon/silent/output.css',
    data: '',
  },
  {
    name: 'after_colon/loud/input.scss',
    data: '@forward "other" with ($a: /**/ b)\n',
  },
  {
    name: 'after_colon/loud/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_colon/loud/output.css',
    data: '',
  },
  {
    name: 'after_colon/silent/input.scss',
    data: '@forward "other" with ($a: //\n  b)\n',
  },
  {
    name: 'after_colon/silent/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_colon/silent/output.css',
    data: '',
  },
  {
    name: 'before_close_paren/loud/input.scss',
    data: '@forward "other" with ($a: b /**/)\n',
  },
  {
    name: 'before_close_paren/loud/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'before_close_paren/loud/output.css',
    data: '',
  },
  {
    name: 'before_close_paren/silent/input.scss',
    data: '@forward "other" with ($a: b //\n  )\n',
  },
  {
    name: 'before_close_paren/silent/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'before_close_paren/silent/output.css',
    data: '',
  },
  {
    name: 'after_close_paren/loud/input.scss',
    data: '@forward "other" with ($a: b) /**/\n',
  },
  {
    name: 'after_close_paren/loud/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_close_paren/loud/output.css',
    data: '',
  },
  {
    name: 'after_close_paren/silent/input.scss',
    data: '@forward "other" with ($a: b) //\n',
  },
  {
    name: 'after_close_paren/silent/other.scss',
    data: '$a: 1 !default\n',
  },
  {
    name: 'after_close_paren/silent/output.css',
    data: '',
  },
]
