import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { CategoryProducts } from './pages/CategoryProducts'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { ViewKart } from './pages/ViewKart'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Success } from './pages/success'

const router = createBrowserRouter([
    {
      path : '/',
      element : <App/>,
      children : [
        {
          path : '/product/:id',
          element : <ProductPage/>
        },
        {
          path : '/',
          element : <HomePage/>
        },
        {
          path : '/category/:name',
          element : <CategoryProducts/>
        },
        {
          path : '/login',
          element : <Login/>
        },
        {
          path : '/signup',
          element : <Signup/>
        },
        {
          path : '/product/kart',
          element : <ViewKart/>
        },
        {
          path : '/success',
          element : <Success/>
        }
      ]
    },
    
  ])


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = { router } />
)
