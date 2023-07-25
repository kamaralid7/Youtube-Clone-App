import logo from './logo.svg';
import './App.css';
import Head from './Components/Head'
import Body from "./Components/Body"
import { Provider } from 'react-redux';
import store from './utilities/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([{
  path:'/',
  element: <Body />,
  children: [
    {
      path:'/',
      element: <MainComponent />,
    },
    {
      path: '/watch',
      element: <WatchPage />,
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}></RouterProvider>
        
        
      </div>
    </Provider>
  );
}

export default App;
