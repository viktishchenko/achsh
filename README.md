- Init Empty Branch

<details>

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

</details>

- Update Angular CLI Globaly

<details>

```js
npm uninstall -g angular-cli
npm cache clean or npm cache verify // (if npm > 5) ~clean -f
npm install -g @angular/cli@latest
```

</details>

- Lazy Loading route

<details>

```js
ng generate module login --route login --module app.module
// OR THE SAME
ng g m login --routing
// res → login/login-routing.module.ts & login/login.module.ts
ng g c login
// res → login/login.component/html/scss/spec.ts/ts

```

</details>

- Init App Structure

<details>

```js
ng g c views/home/welcome --flat --skip-tests --inline-style --dry-run
ng g s views/product-categories/product-category --skip-tests --dry-run
ng g i views/product-categories/product-category --dry-run
g g c views/products/product-list --flat --skip-tests
ng g i views/products/product --dry-run
ng g s views/products/product --skip-tests --dry-run
ng g m views/products/product --flat --dry-run
ng g c views/products/product-list-alt/product-detail --flat --skip-tests --inline-style --dry-run
ng g c views/products/product-list-alt/product-list-alt --flat --skip-tests --inline-style --dry-run
ng g c views/products/product-list-alt/product-shell --flat --skip-tests --inline-style --dry-run
ng g s suppliers/supplier --skip-tests --dry-run

npm i angular-in-memory-web-api

ng g c views/error-page/page-not-found --flat --skip-tests --inline-style --inline-template --dry-run

npm i bootstrap
```

![Alt text](test3/src/readmeAssets/init-rxjs-app.png)

</details>
