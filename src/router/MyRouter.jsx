
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ErrorPage from '../pages/ErrorPage';
import AddProduct from '../pages/AddProduct';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Register from '../pages/Register';
import UpdateProduct from '../pages/UpdateProduct';
import PrivateRoute from './PrivateRoute';
import Cart from '../pages/Cart';

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
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addproduct',
                element: <PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path: '/mycart',
                element: <PrivateRoute><Cart/></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/mycart`)
            },
            {
                path: '/updateproduct/:id',
                element: <PrivateRoute><UpdateProduct/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`)
                
            },
            {
                path: '/phones/:brand',
                element: <Products/>,
                loader: ({params}) => fetch(`http://localhost:5000/phones/${params.brand}`)
            }, 
            {
                path: '/phone/:id',
                element: <PrivateRoute><ProductDetail/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/phone/${params.id}`)

            }
        ]
    }
])

export default MyRouter;