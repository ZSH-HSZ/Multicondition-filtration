const data = [
  {name: 'zhao', age: 10, sex: '男'},
  {name: 'asdf', age: 11, sex: '男'},
  {name: 'zhaasdfo', age: 12, sex: '女'},
  {name: 'dfao', age: 10, sex: '男'},
  {name: 'wert', age: 13, sex: '男'},
  {name: 'zhao', age: 10, sex: '女'},
  {name: 'zhao', age: 10, sex: '男'},
]
function nameFilter(val) {
  return val.name==='zhao'
}
function ageFilter(val) {
  return val.age===10
}
function sexFilter(val) {
  return val.sex==='男'
}
const conditions = [nameFilter, ageFilter]
let testData = data.filter(ele=>{
  let result = conditions.map(val=>{
    return val(ele)
  }).every(ele=>ele)
  return result
})
console.log(testData)