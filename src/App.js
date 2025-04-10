import React from 'react';
import ReactDOM from 'react-dom/client'; 
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About";
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom'; // router dom

const AppLayout = () => {
return(
    <div className='app'>
        <Header /> 
        <Outlet /> 
    </div>
);
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resID",
                element: <RestaurantMenu/>
            },
        ],

        errorElement: <Error />,
    },
]);

// useEffect(() => {
//   console.log("useEffect called")
// } , [])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);


// componentDidMount(){
//     console.log("Compoent did Mount");
// };

// componentDidUpdate(){
//     console.log("Compoent did Mount");
// };

// componentWillUnmount(){
//     console.log("Compoent did Mount");
// };