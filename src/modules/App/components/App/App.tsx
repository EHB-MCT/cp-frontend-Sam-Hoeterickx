import { Outlet } from "react-router"

export const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Outlet />
    </div>
  )
}