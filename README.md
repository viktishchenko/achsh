- init empty

<details>

```js
git switch --orphan test3
mkdir test5
New-Item .gitignore
New-Item README.md
cd test5
ng new ang-crud --directory ./
git commit --allow-empty -m "Init crud app"
git push -u origin test5
```

</details>
