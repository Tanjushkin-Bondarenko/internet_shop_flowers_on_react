import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client';
import { HomePage } from './components/pages/homePage/HomePage.jsx';
import { Head } from './components/pages/head/Head.jsx';
import { Sidebar } from './components/pages/sidebar/Sidebar.jsx';
import { Flowers } from './components/pages/flowers/Flowers.jsx';
import FlowerPage from './components/pages/flowers/FlowerPage.jsx';
import { Article } from './components/pages/article/Article.jsx';
import { Contacts } from './components/pages/contacts/Contacts.jsx';
import flowersInfo from './components/data/flowers.json';
import Error from './components/pages/error/Error.jsx';
import { Container } from '@mui/material';
import './style.css';

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
  ), 
  {
    basename: "/internet_shop_flowers_on_react",
  }

)
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router = {ourrouter} />
);


async function loader({ params }) {
  const flower = flowersInfo.find(element => element.id === params.flowerId)
  if (!flower) throw new Response("Not found", { status: 404 })
  return flower
  
}