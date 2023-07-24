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

---

## Data retrieval pattern

- procedural

<details>
// interface

![Alt text](test3/src/readmeAssets/interface.png)

// service

![Alt text](test3/src/readmeAssets/service-get.png)

// error handle

![Alt text](test3/src/readmeAssets/err-handle.png)

// get data

![Alt text](test3/src/readmeAssets/get-data.png)

// display data

![Alt text](test3/src/readmeAssets/display-data.png)

</details>

- common pattern with an async pipe ("product$ | async")

<details>
// init stream$

![Alt text](test3/src/readmeAssets/async-1.png)

// template with async pipe

![Alt text](test3/src/readmeAssets/async-2.png)

</details>

- handling observable error

<details>
  - catch
  - optionally rethrow the error
  - replace the errored observable w a new observable

- RxJs Error Handling Features
  - catchError
    ![Alt text](test3/src/readmeAssets/catchError.png)
    ![Alt text](test3/src/readmeAssets/catchError-2.png)
  - throwError
    ![Alt text](test3/src/readmeAssets/throwError.png)
  - EMPTY
    ![Alt text](test3/src/readmeAssets/emptyError.png)

---

- catch and replace

![Alt text](test3/src/readmeAssets/catch-replace.png)

- catch and rethrow

![Alt text](test3/src/readmeAssets/catch-rethrow.png)

// or

![Alt text](test3/src/readmeAssets/catch-rethrow2.png)

// regular

![Alt text](test3/src/readmeAssets/handleError.png)

// reactive

![Alt text](test3/src/readmeAssets/handleError-reactive.png)

// code

![Alt text](test3/src/readmeAssets/handleError-reactive2.png)

</details>

- async pipe benefits

<details>
  - no need to subscribe
  - no need to unsubscribe
  - improve change detection

![Alt text](test3/src/readmeAssets/change-detection.png)

- implement change detection

![Alt text](test3/src/readmeAssets/change-detection-code.png)

// with change detection

![Alt text](test3/src/readmeAssets/change-detection-w.png)

// without change detection

![Alt text](test3/src/readmeAssets/change-detection-w-o.png)

</details>
