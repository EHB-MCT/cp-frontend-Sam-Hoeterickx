
# React + TypeScript + Vite

# 3 biggetjes en de wolf

## Up and Running
To run this project locally, follow these steps:
1. Clone repository
  ```sh
  git clone <repo-link>
```
2. Install the dependencies
  ```sh
  $ npm install
```
3. Run website
  ```sh
  $ npm run dev
```

## Sources 
### Portal website
- [dangerouslySetInnerHTML - use html elements in a string ](https://legacy.reactjs.org/docs/dom-elements.html)
- [isActive state navigation](https://reactrouter.com/api/components/NavLink)
- [TypeScript interface signature for the onClick](https://stackoverflow.com/questions/54433183/typescript-interface-signature-for-the-onclick-event-in-reactjs)
- [search value in url](https://stackoverflow.com/questions/68703023/search-form-with-ability-to-share-the-url-in-reactjs)
- [encodeURIComponent - zet speciale tekens om voor veilig gebruik in url](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [URLSearchParams -  beheren van URL-queryparameters](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [useLocation - returns current location](https://api.reactrouter.com/v7/functions/react_router.useLocation.html)

### Fairytale
- [Three.js Jounrey](https://threejs-journey.com/#)
- [3D models](https://www.meshy.ai/workspace)
- [Docs React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)
- [Docs DREI](https://docs.pmnd.rs/)
- [Docs Framer-motion](https://motion.dev/)
- [Loading Models R3F](https://r3f.docs.pmnd.rs/tutorials/loading-models)
- [Text3D Drei](https://drei.docs.pmnd.rs/abstractions/text3d)
- [Animate using Framer motion](https://motion.dev/docs/react-use-animate)
  



# React + Vite


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
