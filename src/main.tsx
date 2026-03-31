import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from './App.tsx'
// Page components
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';
import Article from "./Pages/Article.tsx";

import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const router = createBrowserRouter([
  {
    element:<App/>,
    children:[{
      path:'/',
      element:<Home/>
    },
    {
    path:'/About',
    element:<About/>
    },
    {
      path:'/Article',
      element:<Article/>
    }]

  }
])

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
