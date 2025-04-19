import MainPage from './pages/Landing/MainPage'
import { Routes, Route, Link} from 'react-router-dom'
import Donation from './pages/Donation/Donation'
import Layout from './components/layout/Layout'
import Quiz from './pages/Quiz/Quiz'
import Facts from './pages/Facts/Facts'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MainPage></MainPage>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route path='/donation' element={<Donation/>}/>
          <Route path='/facts' element={<Facts/>}/>
        </Route>
      </Routes>
      {/* <MainPage /> */}
    </>
  )
}

export default App
