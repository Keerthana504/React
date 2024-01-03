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
  Whenever the state variable changes react will rerender
- useEffect()

React Algorithm - Reconcilation Algo/ React fiber
Virtual Dom --> Nested JS object, representation of actual DOM
Reconciliation --> finds out the diff betwen real and virtual dom and renders
