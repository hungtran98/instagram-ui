import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';

import { publicRoutes } from '~/routes'
import { DefaultLayout, HeaderOnly } from '~/layouts';





function App() {
  return (
    <Router>
      <div>
        <Routes>
          { publicRoutes.map( (route, index) => {
            let Layout
            const Page = route.component 
            switch(route.layout){
              case HeaderOnly:
                Layout = route.layout
                break
              case null:
                  Layout = Fragment
                  break
              default:
                  Layout = DefaultLayout
            }
            // let Layout = DefaultLayout
            // const Page = route.component
            // if(route.layout){
            //   Layout = route.layout
            // } 
            // else if (route.layout === null) {
            //   Layout = Fragment
            // }
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />

          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
