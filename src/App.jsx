
import Navbar from './components/Navbar'
import SideRoutes from './SideRoutes'
import './App.css'




function App() {
  return (

    <>
    < Navbar />
    <div className='container'>
      <div className='col-sm-12'>
        <SideRoutes />
      </div>
    </div>
    </>
  )
}

export default App
