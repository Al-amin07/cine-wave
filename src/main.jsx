import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Details from './pages/Details'
import Expolre from './pages/Expolre'
import Search from './pages/Search'
// import router from './router/router.js'
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './store/store'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: ':explore/:id',
          element: <Details />
        },
        {
          path: ':explore',
          element: <Expolre />
        },
        {
          path: '/search',
          element: <Search />
        }
      ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    </QueryClientProvider>
  </Provider>
  
  </StrictMode>,
)
