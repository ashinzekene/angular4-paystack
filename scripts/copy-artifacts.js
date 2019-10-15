const fs = require("fs")
const path = require("path")

const artifacts = ["README.md", "CHANGELOG.md", "LICENSE.md"]

function copyArtifact(file) {
  fs.copyFile(
    path.join(__dirname, "../", file),
    path.join(__dirname, "../projects/angular4-paystack", file),
    err => {
      if (err) {
        console.log("An error occurred", e.message)
      } else {
        console.log(`${file} copied`)
      }
    }
  )
}

artifacts.forEach(copyArtifact)