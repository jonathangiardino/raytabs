##  UI test for design engineering role at Raycast

Visit [deployment URL here](https://raytabs.vercel.app/).

*The project has been built using Typescript, Next.js 13, Tailwind, clsx and some Radix primitives.*

For the sake of brevity and the exercise, I noted down some improvements or changes I would make should this be a production project and more time was allotted for it. 

- Add up and down keys for list navigation
- Add hotkeys for select or deselect all list items
- Implement a better structured color palette, right now the colors have been eye-balled and based on [ray.so](ray.so).
- Unify and systemize some reused styles and patterns and to reduce redundancy in the code.
- Add toasts for feedback
- Mobile optimization for typography and spacing
- Implement scrolling and fixed size for the tabs box container as for the exercise we only have static data, but in a real project the length of the data / items in the list may be dynamic and therefore a scrollarea would be necessary.
- With more data there may be more categories and roles therefore I would implement a different methodology to the group tab rendering of lists, removing array filtering and reducing the data to an object with keys as category and build a multi-list component based on it.

Last but not least, the data did not include an admin property therefore I decided to add it articifially and use a context provider to persist state between tab changes. In an ideal situation where the admin role would be a property in the data I would simply optimistically update the UI and mutate the data directly, this way the state could be lifted to the server making the use of React context unnecessary. This could also save some of the components to use client components, accordingly shipping even less Javascript to the browser.