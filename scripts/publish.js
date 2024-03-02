const { execSync } = require('child_process')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

(async function run() {
  const args = process.argv.slice(2)

  const version = validateVersion(args)
  const useForce = shouldUseForce(args)
  if (!version) {
    console.log(`Please specify a valid version
    Usage: npm run p -- [major|minor|patch] {message?}
    `)
    process.exit(1);
  }
  console.log(`Publishing version: ${version.toUpperCase()}`)

  try {
    await validateChangeLog(useForce)
    console.log("CHANGELOG update validated")
  } catch (error) {
    console.log(error)
    process.exit(1);
  }

  runNpmVersionPatch(version, args)
  console.log(execSync(`npm run build`).toString())
  console.log(execSync(`cd dist/angular4-paystack && npm publish`).toString())
  console.log(execSync(`cd ../..`).toString())
})()


function validateChangeLog(force = false) {
  const modifiedFiles = execSync("git ls-files --modified");
  const filesList = modifiedFiles.toString().split("\n");
  return new Promise((resolve, reject) => {
    if (force) {
      readline.question('HAS CHANGELOG BEEN UPDATED?\n', response => {
        if (response.toLocaleLowerCase() === "yes" || response.toLocaleLowerCase() === "y") {
          readline.close()
          resolve(true)
        } else {
          readline.close()
          reject("Please update the changelog")
        }
      });
    } else {
      if (filesList?.includes("projects/angular4-paystack/CHANGELOG.md")) {
        reject("Only CHANGELOG.md in root should be modified.")
      }
      if (filesList?.includes("CHANGELOG.md")) {
        resolve(true);
      }
      reject("CHANGELOG.md not modified. Please update the changelog before publishing.");
    }
  })
}

function validateVersion(args) {
  const version = args[0]?.toLocaleLowerCase()?.trim()
  const versions = ["major", "minor", "patch"]
  if (version && !versions.includes(version)) {
    return ""
  }
  return version || "patch"
}

function runNpmVersionPatch(version, args) {
  const message = args[1]
  const returnMessage = execSync(
    `cd projects/angular4-paystack && npm version ${version}${message ? ` -m "${message}"` : ""}`);
  console.log(returnMessage.toString())
}

function shouldUseForce(args) {
  return args.includes("-f") || args.includes("--force")
}

