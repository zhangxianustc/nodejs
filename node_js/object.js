
var object2 = {
  person: {
    name: 'zhangxian',
    age: 28
  },
  company: {
    name: 'huijiajia',
    addr: 'hangzhou'
  }
}

function objPro (obj, pro) {
  if (Object(obj).hasOwnProperty(pro)) {
    console.log(pro)
  } else {
    console.log('no such prop')
  }
}

objPro(object2, object2.person)
