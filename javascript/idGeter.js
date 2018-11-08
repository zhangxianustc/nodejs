
function idExist (idGetter) {
  let { id, name } = idGetter(args)
  console.log(id, name)
}

let args = {
  id: 12,
  name: 'zhangxian'
}
idExist(args => ({
  id: args.id,
  name: args.name
}))
