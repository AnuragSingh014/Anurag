import './App.css'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Landing",
      element: <LandingPage />,
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </>
  )
}




export default App
