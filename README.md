# r&m test project

- init

<details>

```js
git switch --orphan test6
New-Item .gitignore
New-Item README.md
mkdir test6
cd test6
ng new form --directory ./
// add material & custom theme
// custom palette (http://mcg.mbitson.com/#!?mcgpalette0=%23da2032)
ng add @angular/material

git commit --allow-empty -m "Initial"
git push -u origin test6

```

![Alt text](test6/src/readmeAssets/basic-layout.png)

</details>
