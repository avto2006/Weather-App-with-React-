import './index.css';


function App() {


  return (
    <div className='full'>
      <div className="text_area">
        <h1>Weather App</h1>
      </div>

      <select  className="option_area">
         <option value="Tbilisi">Tbilisi</option>
         <option value="Kutaisi">Kutaisi</option>
         <option value="Senaki">Senaki</option>
      </select>

      <div className="weathers_area">
        <img className='img im1' src="../icons/SVG.svg" alt="" />
        <img className='img im2'  src="../icons/SVG (1).svg" alt="" />
        <img className='img im3'  src="../icons/SVG (2).svg" alt="" />
        <img className='img im4'  src="../icons/SVG (3).svg" alt="" />
      </div>
    </div>
  )
}

export default App
