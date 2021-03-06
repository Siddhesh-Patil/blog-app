import { useState } from 'react';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes,Route, Outlet, Navigate } from 'react-router-dom';

import Login from './component/account-details/Login';

import Home from './component/home/Home';
import Header from './component/header/Header';
import CreateBlog from './component/create/CreateBlog';
import Update from './component/create/Update';
import DetailView from './component/details/DetailView';
import About from './component/about/About';
import Contact from './contact/Contact';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? 
  <>
    <Header/>
    <Outlet />
  </>
  :<Navigate replace to = '/login' />
}
function App() {

  const [isAuthenticated, isUserAutheticated] = useState(false);
  return (
    
      <DataProvider>
        <BrowserRouter>
         
          <div style={{marginTop: 64}}>
            <Routes>
              <Route path='/login' element={<Login isUserAutheticated={isUserAutheticated}/>} />

              <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                  <Route path='/' element={<Home />} />
              </Route>
              <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                  <Route path='/create' element={<CreateBlog />} />
              </Route>
              <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                  <Route path='/details/:id' element={<DetailView />} />
              </Route>
              <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                  <Route path='/update/:id' element={<Update />} />
              </Route>
              <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                  <Route path='/about' element={<About />} />
              </Route>
              <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                  <Route path='/contact' element={<Contact />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>  
      </DataProvider>
    
  );
}

export default App;
