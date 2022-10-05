import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
const axios = require('axios');


// function App() {
//   const [char, setchar] = useState([]);
//   const [loc, setloc] = useState([]);
//   const [epi, setepi] = useState([]);
//   var arr = [];

//   useEffect(() => {
//     axios.get('https://rickandmortyapi.com/api/character')
//       .then(function (res) {

//         console.log(res.data.results);
//         setchar(res.data.results);
//       })
//       .catch(function (error) {

//         console.log(error);
//       })

//   },[])
//   useEffect(() => {
//     axios.get('https://rickandmortyapi.com/api/location')
//       .then(function (res) {
//         console.log(res.data.results);
//         setloc(res.data.results);
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   },[])




//   return (
//     <div className="App">
//       {
//         loc.map((item,index)=>{
//           return(
//             <>
//               <h6>{index} = {item.name}</h6>
//               {arr[index]=item.name}
//             </>
//           )
//         })
//       }
//         {console.log(arr)}
//       {
//         char.map((item) => {
//           return (
//             <div className='row'>
//             <div className='flex main col-6'>
//               <div className='image'>
//                 <img src={item.image}></img>
//               </div>
//               <div>
//                 <h2>{item.name}</h2>
//                 <div className="flex1">
//                   <h4>{item.status}</h4>-
//                   <h4>{item.species}</h4>
//                 </div>
//                 <h4>{item.type}</h4>
//                 <h4>{item.gender}</h4>
//                 <h5>last known location</h5>



//                 </div>
//             </div>
//             </div>

//           )
//         })
//       }



//     </div>


//   );
// }

// export default App;



// ================================dummy json==============================

function App() {
  const [char, setchar] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (res) {

        console.log(res.data.products);
        setchar(res.data.products);
      })
      .catch(function (error) {

        console.log(error);
      })

  }, [])
  return (
    <div className="App">
              <div className="row mt-5">

      {
        char.map((index) => {
          return(
            <>

          <div className='flex col-6'>
            <div className="image">
              <img src={index.thumbnail} alt="" />
            </div>
            <div className="content">
              <h4 className='bord pb-3'>{index.title}<span className='cat'>({index.category})</span></h4>
              <p className='pt-2 text-secondary'>{index.description}</p>
              <span className='bold'>₹{index.price}</span>
              <span className='span bold'>Discount - {index.discountPercentage} ₹</span>

              <p className='pt-3'>Stock: {index.stock}</p>
              <p>Brand: {index.brand}</p>
              <h6 className='text-warning '>Rating : {index.rating}</h6>

            </div>
          </div>
          </>)
          })
        
      }
      </div>
    </div>
  )
}
export default App;
