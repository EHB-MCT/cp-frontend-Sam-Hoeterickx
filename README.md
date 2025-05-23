![Three Little Pigs and the Wolf](https://ehb-mct.github.io/cp-frontend-Sam-Hoeterickx/images/fairytale/Banner_image.png)

# The Three Little Pigs and the Wolf – Interactive Fairytale
An interactive web-based story experience of “The Three Little Pigs”, built with modern web technologies including React, React Three Fiber, Framer Motion, and GSAP. This project blends storytelling with immersive 3D visuals to create a playful and engaging web experience.

Link to website: https://ehb-mct.github.io/cp-frontend-Sam-Hoeterickx/#/fairy-tale

<br>

## Up and Running
To run this project locally, follow these steps:
1. Clone repository
  ```sh
  git clone <repo-link>
```
2. Install the dependencies 

    (recommended to do on mac, windows has problems installing the packages)
  ```sh
  $ npm install
```
3. Run website
  ```sh
  $ npm run dev
```

<br>

## Tech Stack
- React 19
- TypeScript
- Vite for fast development builds
- React Three Fiber for WebGL and 3D rendering
- Drei for helpers and abstractions
- Framer Motion and GSAP for smooth animations
- React Router v7 for navigation
- TanStack React Query for asynchronous state management
  
<br>

## Sources 
### Portal website
- [dangerouslySetInnerHTML - use html elements in a string ](https://legacy.reactjs.org/docs/dom-elements.html)
- [isActive state navigation](https://reactrouter.com/api/components/NavLink)
- [TypeScript interface signature for the onClick](https://stackoverflow.com/questions/54433183/typescript-interface-signature-for-the-onclick-event-in-reactjs)
- [search value in url](https://stackoverflow.com/questions/68703023/search-form-with-ability-to-share-the-url-in-reactjs)
- [encodeURIComponent - zet speciale tekens om voor veilig gebruik in url](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
- [URLSearchParams -  beheren van URL-queryparameters](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [useLocation - returns current location](https://api.reactrouter.com/v7/functions/react_router.useLocation.html)
- [React-router-dom | createHashRouter](https://reactrouter.com/6.30.0/routers/create-hash-router)

### Fairytale
- [Three.js Jounrey](https://threejs-journey.com/#)
- [3D models](https://www.meshy.ai/workspace)
- [Docs React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)
- [Docs DREI](https://docs.pmnd.rs/)
- [Docs Framer-motion](https://motion.dev/)
- [Loading Models R3F](https://r3f.docs.pmnd.rs/tutorials/loading-models)
- [Text3D Drei](https://drei.docs.pmnd.rs/abstractions/text3d)
- [Animate using Framer motion](https://motion.dev/docs/react-use-animate)
- [GSAP Animation documentation](https://gsap.com/docs/v3/GSAP/)
- [Chat GPT, how to optimize my fairytale](https://chatgpt.com/share/682ae8c3-5fac-8004-bbf0-0a68bbb8390e)
- [React onPointer events](https://legacy.reactjs.org/blog/2018/05/23/react-v-16-4.html)
- [Chat GPT, Help with cursor not registering the whole mesh](https://chatgpt.com/share/6830d704-bbe0-8001-975b-991f24cbc37c)
- [Event.stopPropagation - Stop the event from reaching higher-level components](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

#### Preloading and Optimization
- [Claude AI, smooth scene rendering](https://claude.ai/chat/76c54e79-2351-4ce0-8bc0-145f2aea7ce8)
- [Github copilot chat from vscode on how to start](https://docs.google.com/document/d/1nXz3MFSrBDwSg4gZUr3AJ7bzx-4LGggZzocF_CGtMSo/edit?usp=sharing)
- [Claude AI, fix loading stuck at 0.0%](https://claude.ai/chat/87975be5-79be-4af3-b63d-ff7c2525f6ca )
- [React useContext](https://react.dev/reference/react/useContext)
- [React createContext](https://react.dev/reference/react/createContext#provider)
- [React Three Drei useProgress](https://drei.docs.pmnd.rs/loaders/progress-use-progress)
- [React Three Drei useGTLF](https://drei.docs.pmnd.rs/loaders/gltf-use-gltf)
- [React preload](https://react.dev/reference/react-dom/preload)
- [React lazy loading](https://react.dev/reference/react/lazy)
- [Summary](https://docs.google.com/document/d/1VYd1E3FJrZlbASwVFwzkn_31dFntZmwJ30DnFA_uWLo/edit?usp=sharing)

### Deployment
- [Get github pages live, Chat GPT (Wout van Impe)](https://chatgpt.com/share/682b3eeb-8054-8003-ab2b-8ca273860191)

<br>

## Scripts

| Command           | Description                     |
|-------------------|---------------------------------|
| `npm run dev`     | Start local development server  |
| `npm run build`   | Build the project for production|
| `npm run lint`    | Run linter                      |
| `npm run preview` | Preview the production build    |
| `npm run deploy`  | Deploy to GitHub Pages          |

<br>

## Author
Sam Hoeterickx <br>
Student Multimedia & Creative Technology <br>
Erasmushogeschool Brussel <br>
[Linkedin](https://www.linkedin.com/in/sam-hoeterickx/) <br>

<br>
