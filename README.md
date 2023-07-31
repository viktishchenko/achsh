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

<details>

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

- procedural vs declarative

<details>
// procedural

![Alt text](test3/src/readmeAssets/procedural.png)

// declarative

![Alt text](test3/src/readmeAssets/declarative.png)

</details>

- parameters handling

<details>

![Alt text](test3/src/readmeAssets/handling-parameters.png)

</details>

- mapping an HTTP Response

<details>

![Alt text](test3/src/readmeAssets/mapping-response.png)

![Alt text](test3/src/readmeAssets/mapping-http-response.png)

- mapping array elements

![Alt text](test3/src/readmeAssets/syntax-error.png)

// resolve syntax error (handle possibly undefined)

![Alt text](test3/src/readmeAssets/syntax-error-resolve.png)

// another fup

![Alt text](test3/src/readmeAssets/syntax-error-resolve2.png)

// transforming array elements

![Alt text](test3/src/readmeAssets/transforming-array.png)

// transforming data array!?

![Alt text](test3/src/readmeAssets/transforming-data-http.png)

// transforming tada res

![Alt text](test3/src/readmeAssets/transforming-data-http-res.png)

</details>

---

- types of combination operators/functions

<details>

// combine to a single Observable results (merge,concat)

![Alt text](test3/src/readmeAssets/merge-concat.png)

// flatten high-order Observables

![Alt text](test3/src/readmeAssets/mergeAll.png)

// emit a combined value (combineLatest, forkJoin withLatestFrom)

![Alt text](test3/src/readmeAssets/emit-combine.png)

// combineLatest

![Alt text](test3/src/readmeAssets/combine-latest.png)

// forkJoin (last not latest)

![Alt text](test3/src/readmeAssets/forkJoin.png)

// withLatestFom

![Alt text](test3/src/readmeAssets/withLatestFrom.png)

</details>

- mapping an Id to a string

<details>
// add string category

![Alt text](test3/src/readmeAssets/mapping-id-to-string.png)

// ad second stream

![Alt text](test3/src/readmeAssets/mapping-double-stream.png)

// combining the streams

![Alt text](test3/src/readmeAssets/combining-stream.png)

// combining the streams code

![Alt text](test3/src/readmeAssets/combining-stream-code.png)

// res

![Alt text](test3/src/readmeAssets/mappingResDoubleStream.png)

</details>

- reacting to actions RxJs Features (filter,startWith, Subject, BehaviorSubject)

<details>
// filter

![Alt text](test3/src/readmeAssets/filter.png)

// filter diagram

![Alt text](test3/src/readmeAssets/filter-marble.png)

// data stream vs action stream

![Alt text](test3/src/readmeAssets/dataStreamVsActionStream.png)

// combining data stream and action stream

![Alt text](test3/src/readmeAssets/combine-dataStreamAndAction.png)

// Observable: Unicast

![Alt text](test3/src/readmeAssets/observable-unicast.png)

// Subject: Multicast

![Alt text](test3/src/readmeAssets/subject-multicast.png)

// BehaviorSubject

![Alt text](test3/src/readmeAssets/behaviorSubject.png)

Creating an Action Stream

![Alt text](test3/src/readmeAssets/createActionStream.png)

// reacting to action

![Alt text](test3/src/readmeAssets/reactingToAction.png)

// reacting to action

![Alt text](test3/src/readmeAssets/reactingToActionCode.png)

// start with initial value

![Alt text](test3/src/readmeAssets/startWithInitial.png)

// StartWith operator

![Alt text](test3/src/readmeAssets/startWith.png)

// StartWith operator

![Alt text](test3/src/readmeAssets/startWithCode.png)

// OR BehaviorSubject

![Alt text](test3/src/readmeAssets/BehaviorSubjectCodeRes.png)

</details>

## Reacting to actions (selections)

<details>

- create action stream
  ![Alt text](test3/src/readmeAssets/createActionStream2.png)
- combine ActionStream with DataStream
  ![Alt text](test3/src/readmeAssets/combineActionWData.png)
- emit value to the ActionStream
  ![Alt text](test3/src/readmeAssets/emitValueToActionStream.png)
- ↓↓↓ // event emitter component.ts
  ![Alt text](test3/src/readmeAssets/componentEmitter.png)
- ↓↓↓ // event emitter component.html
  ![Alt text](test3/src/readmeAssets/componentEmitterHtml.png)
- ↓↓↓ // event emitter component.html - !!! change styles w ActionStream
  ![Alt text](test3/src/readmeAssets/componentEmitterHtmlStyles.png)
- bind Observable with ChangeDetectionStrategy.OnPush
- res:
  ![Alt text](test3/src/readmeAssets/detail-res-select.png)

</details>

- display error msg w action stream & changeDetectionStrategy

<details>

- init stream
  ![Alt text](test3/src/readmeAssets/errorMessageStream.png)
- set value to stream
  ![Alt text](test3/src/readmeAssets/setValueToStream.png)
- bind observable w async pipe
  ![Alt text](test3/src/readmeAssets/errorMsgWStreamDisplay.png)
- res: UI Error Display
  ![Alt text](test3/src/readmeAssets/UIerror.png)

</details>

## Managing State // merge, scan

<details>

- read only data
  ![Alt text](test3/src/readmeAssets/readOnlyData.png)
- incorporate a change in an Observable
  ![Alt text](test3/src/readmeAssets/incorporateObservable.png)
- RxJs Opeator: scan
  ![Alt text](test3/src/readmeAssets/scanDiagram.png)
  // with initial state
  ![Alt text](test3/src/readmeAssets/scanWithInitial.png)
  // array scan
  ![Alt text](test3/src/readmeAssets/scanWithArray.png)
- RxJs Opeator: merge
  ![Alt text](test3/src/readmeAssets/merge.png)
  // reacting to an Add Operation
  ![Alt text](test3/src/readmeAssets/mergePlusScan.png)
  // reacting to an Add Operation
  ![Alt text](test3/src/readmeAssets/mergePlusScanCode.png)
  // reacting to an Add Operation (POST)
  ![Alt text](test3/src/readmeAssets/mergePlusScanPostRequest.png)

</details>

## Caching Observables

<details>

- caching Observables
  ![Alt text](test3/src/readmeAssets/cachObservable.png)
- classic caching pattern
  ![Alt text](test3/src/readmeAssets/classicCachingPattern.png)
- declarative caching pattern
  ![Alt text](test3/src/readmeAssets/declarativeCachingPattern.png)
- shareReply used for
  ![Alt text](test3/src/readmeAssets/shareReplyUseFor.png)
- shareReply diagram
  ![Alt text](test3/src/readmeAssets/shareReply.png)
- share operator
  ![Alt text](test3/src/readmeAssets/shareOperator.png)
- shareReply usage (caching data)
  ![Alt text](test3/src/readmeAssets/cachingDataCode.png)
- shareReply usage (caching data)
  ![Alt text](test3/src/readmeAssets/cachingDataCode2.png)
- cache validation
  ![Alt text](test3/src/readmeAssets/refreshCashData.png)

</details>

## High-order Mapping Operators

<details>

- high-order mapping operators
  ![Alt text](test3/src/readmeAssets/observableEmits.png)
- observable return observable (not recomended technic)
  ![Alt text](test3/src/readmeAssets/observableObservable.png)
- RxJs Features (concatMap, mergeMap, switchMap)
  ![Alt text](test3/src/readmeAssets/highOrderFKUP.png)
- RxJs Features code
  ![Alt text](test3/src/readmeAssets/hoMappingCode.png)
- RxJs Features res
  ![Alt text](test3/src/readmeAssets/hoMappingRes.png)
- RxJs Features map nested subscription - bed practice
  ![Alt text](test3/src/readmeAssets/mapNestedSubscription.png)
- concatMap !!! SEQUENCE/ORDER !!!
  ![Alt text](test3/src/readmeAssets/concatMap.png)
- concatMap Diagram
  ![Alt text](test3/src/readmeAssets/concatMapDiagram.png)
- concatMap code (without nested subscription!!!)
  ![Alt text](test3/src/readmeAssets/concatMapCode.png)
- concatMap res
  ![Alt text](test3/src/readmeAssets/concatMapRes.png)
- mergeMap !!! PARALLEL/WITHOUT ORDER !!!
  ![Alt text](test3/src/readmeAssets/mergeMap.png)
- mergeMap Diagram
  ![Alt text](test3/src/readmeAssets/mergeMapDiagram.png)
- mergeMap code
  ![Alt text](test3/src/readmeAssets/mergeMapCode.png)
- mergeMap res
  ![Alt text](test3/src/readmeAssets/mergeMapRes.png)
- switchMap
  ![Alt text](test3/src/readmeAssets/switchMap.png)
- switchMap Diagram
  ![Alt text](test3/src/readmeAssets/switchMapDiagram.png)
- switchMap code
  ![Alt text](test3/src/readmeAssets/switchMapCode.png)
- switchMap res
  ![Alt text](test3/src/readmeAssets/switchMapRes.png)

---

### mapping HOC Observable

![Alt text](test3/src/readmeAssets/mappingHOCObservable.png)
// or
![Alt text](test3/src/readmeAssets/mappingHOCObservablePicture.png)
// hom res
![Alt text](test3/src/readmeAssets/hocRes.png)

</details>

## Combining the Streams

<details>

- define suppliers data obserbable stream
  ![Alt text](test3/src/readmeAssets/defineDataObservable.png)
- combine datas
  ![Alt text](test3/src/readmeAssets/combineDatas.png)
- supplier component
  ![Alt text](test3/src/readmeAssets/supplierComponent.png)
- related data stream
  ![Alt text](test3/src/readmeAssets/relatedDataStream.png)
- related data stream (Just in Time)
  ![Alt text](test3/src/readmeAssets/RDSJustInTime.png)
- get related data stream just in time with forkJoin
  ![Alt text](test3/src/readmeAssets/RDSJustInTimeWForkJoin.png)
- related data stream (Just in Time vs GET It All)
  ![Alt text](test3/src/readmeAssets/JITvsGIA.png)
- own stream for title
  ![Alt text](test3/src/readmeAssets/streamForTitle.png)

</details>

</details>
