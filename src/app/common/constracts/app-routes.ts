import { Route } from "@angular/router";
import { BookListPageComponent } from "../../pages/book-list-page/book-list-page.component";

export const appRoutes: {[key:string]: Route} = {
    bookSearch: {
      path: 'book-search',
      data: {},
      component: BookListPageComponent, // TODO lazy load するべき..?
    }
};
