## Init Empty Branch

```js
git switch --orphan test3
git commit --allow-empty -m "Initial"
git push -u origin test3
New-Item .gitignore
New-Item README.md
mkdir test3
cd test3
ng new RxJs --directory ./

```

## Update Angular CLI Globaly

```js
npm uninstall -g angular-cli
npm cache clean or npm cache verify // (if npm > 5) ~clean -f
npm install -g @angular/cli@latest
```
