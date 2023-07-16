# test app

<details>
<summary>ep1</summary>

- init empty branch

```js
git switch --orphan <new branch>
git commit --allow-empty -m "Initial commit on orphan branch"
git push -u origin <new branch>

ng new test1
```

- bootstrap/icons

```js
cd test1

npm i bootstrap
npm i bootstrap-icons
```

![Alt text](test1/src/readmeAssets/add-navbar.png)

</details>

<details>

<summary>ep2</summary>

- add ...

```js
// add component
ng g c views/products/product-list --skip-tests --dry-run

// add service
ng g s services/products --skip-tests --dry-run
```

![Alt text](test1/src/readmeAssets/add-mock&css.png)

- property style binding

![Alt text](test1/src/readmeAssets/style-binding.png)

</details>
