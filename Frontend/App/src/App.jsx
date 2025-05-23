
import './App.css'
import Expenses_form from './components/expenses_form/expenses_form'
import Login from './components/login/login'
import Signup from './components/signup/signup'
import  {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { TokenProvider } from './context/token'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Dashboard from './components/Dashboard/dashboard'
function App() {

  const router = createBrowserRouter([
    {index: true, element: <Login /> },
    {path: '/login', element: <Login/>},
    {path: '/signup', element: <Signup/>},
    {path: '/form', element: <ProtectedRoute><Expenses_form/></ProtectedRoute>},
    {path: '/dashboard', element: <ProtectedRoute><Dashboard/></ProtectedRoute>}

  ]);




  return (
    <>
      <TokenProvider>
        <RouterProvider router={router}/>
      </TokenProvider>
      
    </>
  )
}

export default App
