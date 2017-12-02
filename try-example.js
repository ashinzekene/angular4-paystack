var fs = require("fs")

files = ['angular4-paystack.component.ts','angular4-paystack.module.ts', 'paystack-options.ts', 'angular4-paystack-embed.component.ts']
for (let filename of files) {
  fs.readFile(`src/${filename}`, "utf-8", (err, data) => {
    if(err) console.log(err)
    fs.writeFile(`examples/src/app/angular4-paystack/${filename}`, data, (err) => {
      if(err) console.log(err)
        console.log(`Written ${filename}`)
    })
  })

}