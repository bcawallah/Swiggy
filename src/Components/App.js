import React from 'react';
import ReactDOM from 'react-dom/client';
import {Outlet, RouterProvider, createBrowserRouter,Link} from 'react-router-dom';
import AllRestaurants from './AllRestaurants';
import ErrorPage from './ErrorPage';
import RestaurantMenuPage from './RestaurantMenuPage';
import Header from './Header';



const App = ()=>{
    return(
        <>
            {/* <h1 className='text-center'>Project is started.</h1> */}
            <Header/>
            <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:(
                <main className='px-[10%] @xl:px-[4%]'>
                    <AllRestaurants/>
                </main>
                ),
            },
            {
                path:"/restaurants/:id/menu",
                element:<RestaurantMenuPage/>,
            },
            {
                path:"/offers",
                element:<h1 className='text-3xl'>No Offers Present !</h1>
            },
            {
                path:"/login",
                element:<h1 className='text-3xl'>No Login feature added !</h1>
            },
            {
                path:"/help",
                element:<h1 className='text-3xl'>Help Page !</h1>
            }
        ]
    },
    {
        path:"/test",
        element:<h1>Hello its working fine.</h1>
    },
    
])




ReactDOM.createRoot(
    document.getElementById("root")
).render(
    <RouterProvider router={router}></RouterProvider>
);