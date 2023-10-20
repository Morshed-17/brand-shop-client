
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import AddProduct from '../pages/AddProduct';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';

const MyRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

                loader: () => fetch("http://localhost:5000/brands")

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/phones/:brand',
                element: <Products/>,
                loader: ({params}) => fetch(`http://localhost:5000/phones/${params.brand}`)
            }, 
            {
                path: '/phone/:id',
                element: <ProductDetail></ProductDetail>,
                loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`)

            }
        ]
    }
])

export default MyRouter;