import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router";

// Page components
import App from './App.tsx'
import Home from './Pages/Home.tsx';
import About from './Pages/About.tsx';

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
  }]

  }
])

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
