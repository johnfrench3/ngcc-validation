[![CircleCI](https://circleci.com/gh/mgcehev/ngcc-validation.svg?style=svg)](https://circleci.com/gh/mgechev/ngcc-validation)

# ngcc validation


This repository aims to validate the Angular Ivy compatibility compiler (`ngcc`). Each directory contains a project that uses a popular Angular package which is distributed with `metadata.json` files generated by `ngc`.

Each library is imported inside `app.module.ts`. The CI runs `ng build` in each directory to validate that `ngcc` is able to compile the given package to Ivy compatible format.

## How to add my library?

To add your library, follow the next simple 4 steps:

**Clone the repository**:

```bash
git clone git@github.com:mgechev/ngcc-validation
```

**Install the top-level dependencies**:

```bash
cd ngcc-validation
yarn install
```

**Create your project**:

Inside of the root directory create a new project:

```bash
npm run add-project [my-library-name]
```

This will create a new CLI application in `[my-library-name]-ngcc`:

* using the latest CLI
* with Ivy enabled


**Import your library**:

In `app.module.ts` **add an import** of your library.
Ideally import the library's `NgModule` into the `AppModule`.

For example:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## My library is there, should I add tests?

Yes! The above instructions will only validate that your application could be successfully compiled with `ngcc`. To validate it actually works, it'll be great to add unit or e2e tests.

## License

MIT
