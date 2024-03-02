
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRoute from './router';
import LayoutAdmin from './Layouts/layoutAdmin';




function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LayoutAdmin />}>
          {
            AppRoute.RouteAdmin.map((route, index) => {
              const Page = route.component;
              return <Route path={route.path} key={index} element={<Page />} />
            })
          }

        </Route>

        {/*  test */}

      </Routes>
    </BrowserRouter>



  );
}

export default App;
