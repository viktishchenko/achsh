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

- change detection

![Alt text](test1/src/readmeAssets/change-detection.png)

- two way binding

![Alt text](test1/src/readmeAssets/twoWayBinding.png)

- add custom pipe

```js
ng g p shared/convert-to-space --skip-tests --dry-run

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace',
})
export class ConvertToSpacePipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
```

- init filter with getter & setter

```js
  private _listFilter: string = '';
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
  }
```

- add filter

![Alt text](test1/src/readmeAssets/filter-logic.png)

</details>

<details>

<summary>ep3</summary>

- [add rating component →](test1/src/app/shared/stars.component.ts)

```js
ng g c shared/stars --flat --skip-tests --inline-template --inline-style --dry-run
```

![Alt text](test1/src/readmeAssets/rating-component.png)

- Passing Data to a Nested Component (@Input)
- Emitting an Event (@Output)

</details>
