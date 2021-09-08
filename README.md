## Yet another todo app

For the purposes of trying some nice new libraries in an easy environment, integrated with some I like since a while.

Project structure is aligned with [bulletproof-react](https://github.com/alan2207/bulletproof-react#bulletproof-react-%EF%B8%8F-%EF%B8%8F).

* State managemant with `recoil`
* Design with `tailwindcss` and `headlessui`
* Data fetching with `swr` and `axios`
* Common hooks with `react-use`
* Mocks with `msw`
* Testing with `cypress` and `jest`

`eslint-plugin-react-perf` is used to ensure identity of reference types are stable when depending on it.

### Todos left

* `recoil` state for filter of uncompleted / completed / all
  * use case for `recoil selector`
* re-design styling and overall appearance
  * actual design was just a hands-on `tailwindcss` and a help for doing data operations
  * issue: same css classes on textarea and input look different
* write e2e tests with `cypress`
* may integrate `storybook` and setup use cases for components

### Docs

* [`recoil`](https://recoiljs.org/docs)
* [`tailwindcss`](https://tailwindcss.com/docs)
* [`headlessui`](https://headlessui.dev/)
* [`msw`](https://mswjs.io/)
* [`cypress`](https://docs.cypress.io/api/table-of-contents)
* [`swr`](https://swr.vercel.app/docs)
* [`react-icons`](https://react-icons.github.io/react-icons)
* [`jest`](https://jestjs.io/docs/api)
