export default [
  {
    name: 'input.scss',
    data: '$base_url: "/static_loc/";\ndiv {\n  background-image: "url("#{$base_url}"img/beta.png)";\n}\n\nspan {\n  background-image: url(#{$base_url}img/beta.png);\n}\n\nfudge {\n  walnuts: blix"fludge"#{hey now}123;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  background-image: "url(" /static_loc/ "img/beta.png)";\n}\n\nspan {\n  background-image: url(/static_loc/img/beta.png);\n}\n\nfudge {\n  walnuts: blix "fludge" hey now123;\n}\n',
  },
]
