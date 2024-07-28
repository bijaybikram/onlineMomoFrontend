import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes'
import Navbar from './globals/components/navbar/Navbar'
import Footer from './globals/components/footer/Footer'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {

  return (
    <>
      <Provider store={store}>
      <Navbar/>
      <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
