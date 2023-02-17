const { execSync } = require('child_process')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// get args from command line
(async function run() {
  const args = process.argv.slice(2)

  const version = validateVersion(args)
  if (!version) {
    console.log(`Please specify a valid version
    Usage: npm run publish [major|minor|patch]
    `)
    process.exit(1);
    return
  }
  console.log(`Publishing version: ${version.toUpperCase()}`)

  const hasChangelog = await validateChangeLog()
  if (!hasChangelog) {
    console.log("Please update the changelog")
    process.exit(1);
    return
  }

  runNpmVersionPatch(version, args)
  // console.log(execSync(`cd dist/angular4-paystack && npm publish`).toString())
})()


function validateChangeLog() {
  return new Promise((resolve) => {
    readline.question('HAS CHANGELOG BEEN UPDATED?\n', response => {
      if (response.toLocaleLowerCase() === "yes" || response.toLocaleLowerCase() === "y") {
        readline.close()
        resolve(true)
      } else {
        readline.close()
        resolve(false)
      }
    });
  })
}

function validateVersion(args) {
  const version = args[0]?.toLocaleLowerCase()
  const versions = ["major", "minor", "patch"]
  if (version && !versions.includes(version)) {
    return ""
  }
  return versions[version] || "patch"
}

function runNpmVersionPatch(version, args) {
  const message = args[1]
  const returnMessage = execSync(
    `cd projects/angular4-paystack && npm version ${version}${message ? ` -m "${message}"` : ""}`);
  console.log(returnMessage.toString())
}