import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpBatchLink } from 'apollo-angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ApolloModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      deps: [HttpBatchLink],
      useFactory: (httpBatchLink: HttpBatchLink) => ({
        cache: new InMemoryCache(),
        link: httpBatchLink.create({uri: 'http://localhost:3000'}),
      }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
