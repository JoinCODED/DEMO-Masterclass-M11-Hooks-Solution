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

## Mutations

1. Add three state hooks to `useCreateEmployee`.
   - **data**: `Employee | undefined`
   - **loading**: `boolean`
   - **error**: `any`
2. Add the missing logic for `createEmployee`.
   - Make a `POST` call to `/employees`
   - Pass the `data` provided in the parameters to the `json` body of the api call
   - Use the `setEmployee` parameter to set the retrieved data from the response
   - If an error occurred then use `setError` to set the response error
3. In the return make sure to use `createEmployee` in the anonymous function (i.e., the arrow function) and return the `data`, `loading`, and `error` from the state hooks.

## React Hook Forms

1. Add the `schema` in `src/components/EmployeeCreate/useEmployeeForm.ts`.
   - **id**: `number, required`
   - **firstName**: `string, required`
   - **lastName**: `string`
   - **email**: `string, email, required`
   - **gender**: `string, Male/Female`
   - **ipAddress**: `string`
2. Add the `useForm` hook from `react-hook-form` in the same file, and resolve your `schema` (add defaults to avoid warnings regarding your inputs changing from controlled to uncontrolled).
3. Call `useCreateEmployee` in `EmployeeCreate` and destructure the "trigger" and the "state".
4. Call the `useEmployeeForm` in `EmployeeCreate` and use it to add the markup needed in `EmployeeCreate`, make sure to add `noValidate` to your `form` tag.
   - Create an `onSubmit` variable that uses `handleSumit` from your hook and add an arrow function that takes the form data and calls our "trigger" from `useCreateEmployee`
   - Pass the `onSubmit` variable to `onSubmit` on the `form` tag
   - Use `TextField` component that is imported and `Controller` from `react-hook-form` to control our text field
