## Deployment steps

1. Get latest master
2. Checkout to a new relase branch `release/{new-version-name}` eg `release/4.0.1`
3. Update `CHANGELOG.md` in root with all the latest changes
4. Run `npm run p -- [major|minor|patch] {message}`.
5. Create a tag `git tag -a v {version-no} -m "{message}"` eg `git tag -a v4.0.1 -m "Added peer dep for ng 16" `
6. Commit with message `v{version-no}` e.g. `v4.0.1`
7. Push and create PR