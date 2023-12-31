// import './App.css'

import { RouterProvider } from "react-router-dom"
import router from "./routes/Routes"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </>
  )
}

export default App
