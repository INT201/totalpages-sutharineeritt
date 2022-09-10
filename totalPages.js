const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
 if (arrayItems == null || arrayItems == undefined) {
  return undefined
 }
 if (rowsPerPage == null || rowsPerPage == undefined) {
  return 1
 }
 if (rowsPerPage === 0) {
  return 1
 } 
let func = arrayItems.length
return Math.ceil(func/rowsPerPage)
}
module.exports = totalPages
