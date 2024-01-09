#Parcel

- Dev Build
- Local Server
- HMR - Hot module Replace ( rerendering the page as soon as saves)
- File Matching Algorithm - written in C++, builds automatically as soon as the file is saved
- caching : faster builds
- Image Optimization ( most expensive to load on a browser)
- Minification
- Bundling
- compress (remove white spaces)
- consistent hashing
- code splitting
- differential bundling
- diagonistic
- error handling
- https
- Tree shaking algorithm - remove unused code
- different dev and prod bundles

#React Superpowers

- React hooks

#UI Layout / Wirefire / UI Mockup for Food ordering app

- App Name
- Header
- body
- Footer

LLD

- Header
  - logo
  - Nav elements
- Body

  - search
  - Restaurant cards
    - Name , rating ,price, images

- Footer
  - links
  - copyright
  - address
  - contact

#Two types of export/import

-Default export/import - basic
export default Component;

-Named export/import - used when multiple items are to be imported
export const Component;
import {component} from "path";

#React Hooks (Regular JS utility functions )

React is fast because it is doing efficient DOM manipulation by using virtual DOM

- useState()-> super powerful state variables

  - useState are important in React because react does not keep a track of local variables
  - useState does not update the state by itself, the object / array has be updated first and then passed to the setter function. Likewise we have to append the values before changing the state.
  - when dealing with objects and arrays, always make sure to spread your state variable and then call the setter function.

  - Whenever the state variable changes react will rerender
  - useState hook is called inside a function component only.
  - dont create state variables inside conditions or functions, they are meant to be on top of the component and first thing in a component

- useEffect(()=>{}, [])
  -Takes two arguments -> arrow function, dependency array
  -Call back function will be called after the page is rendered.
  1. if no dependency array useEffect is called on every render
  2. if there is an empty array useEffect is called just for once on initial render
  3. if dependency array is mentioned, then everytime a dependency array changes the useEffect is executed

React Algorithm - Reconcilation Algo/ React fiber
Virtual Dom --> Nested JS object, representation of actual DOM
Reconciliation --> finds out the diff betwen real and virtual dom and renders

Handling data in forms in two ways : Controlled Component - Uncontrolled Component
In a controlled component, form data is handled by a React component.
The alternative is uncontrolled components, where form data is handled by the DOM itself.

Controlled components
-An input form element whose value is controlled by React in this way is called a “controlled component”.
-React state be the “single source of truth”
-Controls what happens in that form on subsequent user input.
-useState and setState are used to set and update the input value

Uncontrolled components
-uncontrolled component keeps the source of truth in the DOM
-Uncontrolled components dont use value property, they use defaultValue for showing the default state instead
-React.CreateRefs() in constructor and ref keyword on the element are used to access the value of the DOM element
