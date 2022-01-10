// jshint esversion: 10

let $  = (query='body') => document.querySelector(query)
let $$ = (query='body') => document.querySelectorAll(query)

function apply(object, path, content, char=":") {
  if (path == "") return content;
  let res = object, [a, ...b] = path.split(char);
  if (res[a] == undefined) res[a] = {};
  res[a] = apply(res[a], b.join(char), content, char);
  return res;
}

$('[upload]').addEventListener('change', async event => {
  var root = {};
  for (let file of event.target.files) {
    root = apply(root, file.webkitRelativePath, file, '/')
  }
  console.log(root)
})

$('[upload]').addEventListener('drop', $('[upload]').onchange)







