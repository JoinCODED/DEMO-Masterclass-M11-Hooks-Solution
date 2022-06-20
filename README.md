# Hooks

Hooks are nice, I promise.

## Steps

1. Fork and clone [this repository](https://github.com/JoinCODED/TASK-Masterclass-M11-Hooks).
2. Install the dependencies using `npm i`.
3. Start the BE & FE servers using `npm start` (`concurrently` is set up, so you do not have to worry about anything).

## Scroll To Top Hook

1. Go to `hooks/useScrollToTop.tsx`.
2. Get the current location using the location hook from react router dom.
3. Each time the location changes, the page scrolls to top (hint: use `useEffect`).

## Query Hooks

1. Go to `services/employees.ts`.
2. Add a state to manage your list of employees and a state to manage your errors.
   - Hint: you will need to explicitly add type annotations for your hooks.
3. Add the missing logic in `getEmployees`.
   - Add an api call to `/employees?_page=${page}` using the imported `API` instance.
   - Make sure to wrap your api call in a `try-catch` block
     - In the success block use `setEmployees` to set the employees
     - In the error block use `setError` to set the caught `error`
4. Add a `useEffect` to your `useGetEmployees`.
   - Make sure to "react" to `page` changes
   - Use the `getEmployees` function inside the `useEffect`, and pass it the `page` and your set state hooks
   - Add a `cleanup` function that will clear all `errors` and reset `employees` to be `undefined`

### Pagination Bonus

1. Add a `next` button to your employee list page that increments the `page` number state.
2. Add a `back` button to your employee list page that decrements the `page` number state.

### Declarative Bonus

Abstract away pagination management into a custom hook.
