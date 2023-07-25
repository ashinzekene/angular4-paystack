## Deployment steps

1. Get latest master
2. Run `npm run p -- [major|minor|patch] {message}`.
3. Checkout to a new branch `release/{new-version-name}` eg `release/4.0.1`
4. Create a tag `git tag -a v {version-no} -m "{message}"` eg `git tag -a v4.0.1 -m "Added peer dep for ng 16" `
5. Commit with message `v{version-no}` eg `v4.0.1`
6. Push and create PR