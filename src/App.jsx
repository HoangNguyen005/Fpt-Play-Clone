
//   https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=12&limit=30
//   https://phimapi.com/phim/slug
//   https://phimapi.com/v1/api/danh-sach/phim-le
//   https://phimapi.com/v1/api/danh-sach/phim-bo
//   https://phimapi.com/v1/api/danh-sach/hoat-hinh
//   https://phimapi.com/v1/api/danh-sach/tv-shows
//   https://phimapi.com/v1/api/the-loai/vien-tuong
//   https://phimapi.com/v1/api/tim-kiem?keyword={Từ khóa}&limit={number} 
import { Route, Routes } from 'react-router';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import  {GlobalProvider} from './contexts/GlobalState';
// import Header from '../src/components/Header'

function App() {

  return (
   <GlobalProvider>    
        <div className="app bg-black w-full">
          <div className='container lg:max-w-6xl px-4 mx-auto w-full'>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.Layout || DefaultLayout;
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                )
              })}
            </Routes>
          </div>
        </div>
   </GlobalProvider>
  
  )
}

export default App;