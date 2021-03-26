var fs = require('fs')

fs.writeFile('calc.js','console.log("done")',function(err){
    console.log("data Saved")
})