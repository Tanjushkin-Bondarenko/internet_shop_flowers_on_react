import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client';
import { HomePage } from './components/pages/homePage/HomePage';
import { Head } from './components/pages/head/head';
import { Sidebar } from './components/pages/sidebar/Sidebar';
import { Flowers } from './components/pages/flowers/Flowers';
import FlowerPage from './components/pages/flowers/FlowerPage';
import { Article } from './components/pages/article/Article';
import { Contacts } from './components/pages/contacts/Contacts';
import flowersInfo from './components/data/flowers.json';
import Error from './components/pages/error/Error';
import reportWebVitals from './reportWebVitals';
import { Container } from '@mui/material';
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom';

const Root = () => {
  return (  
    <Container className='container'>
      <Head />
      <Sidebar />
      <Outlet />
    </Container>
  )
}
const ourrouter = createBrowserRouter(
  createRoutesFromElements(
<Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
        <Route path='flowers' element={<Flowers />} />
      <Route path="flowers/:flowerId"
          loader={loader}
          element={<FlowerPage />}
          errorElement={<Error />}
        />
      

      <Route path='contacts' element={<Contacts />} />
      <Route path='article' element={<Article />} />
      <Route path='*' element={<Error />} />
      </Route> 
  )

)
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router = {ourrouter} />
);

reportWebVitals();

async function loader({ params }) {
  const flower = flowersInfo.find(element => element.id === params.flowerId)
  if (!flower) throw new Response("Not found", { status: 404 })
  return flower
  
}