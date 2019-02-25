export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      //article
      {
        path: '/article',
        name: 'article',
        icon: 'file-markdown',
        routes: [
          {
            path: '/article/list',
            name: 'list',
            component: './Article/List',
          },
          {
            path: '/article/create',
            name: 'create',
            component: './Article/ArticleCreate',
          },
        ],
      },
      // Tag
      {
        path: '/tag',
        name: 'tag',
        icon: 'tags',
        routes: [
          {
            path: '/tag/list',
            name: 'list',
            component: './Tag/List',
          },
        ],
      },
      // Link
      {
        path: '/link',
        name: 'link',
        icon: 'link',
        routes: [
          {
            path: '/link/list',
            name: 'list',
            component: './Link/List',
          },
        ],
      },
      // category
      {
        path: '/category',
        name: 'category',
        icon: 'book',
        routes: [
          {
            path: '/category/list',
            name: 'list',
            component: './Category/List',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
