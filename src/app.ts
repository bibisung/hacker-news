import Router from './core/router';
import { NewsFeedView, NewsDetailView } from './page';
import { Store } from './types';

const store: Store = {
  currentPage: 1,
  feeds: [],
};

declare global {
  interface Window {
    store: Store;
  }
}

window.store = store;

const router: Router = new Router();
const newsFeedView = new NewsFeedView('root');
const newsDetailView = new NewsDetailView('root');

router.setDefaultPage(newsFeedView);

router.addRoutePath('/page/', newsFeedView);
router.addRoutePath('/show/', newsDetailView);

router.route();

// MIXIN
// function applyApiMixins(targetClass: any, baseClasses: any[]): void {
//   baseClasses.forEach((baseClass) => {
//     Object.getOwnPropertyNames(baseClass.prototype).forEach((name) => {
//       const descriptor = Object.getOwnPropertyDescriptor(
//         baseClass.prototype,
//         name
//       );

//       if (descriptor) {
//         Object.defineProperty(targetClass.prototype, name, descriptor);
//       }
//     });
//   });
// }

// interface NewsFeedApi extends Api {};
// interface NewsDetailApi extends Api {};

// applyApiMixins(NewsFeedApi, [Api]);
// applyApiMixins(NewsDetailApi, [Api]);
