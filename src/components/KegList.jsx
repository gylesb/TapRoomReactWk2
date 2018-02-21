import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


// function KegList(){
//   return (
//     <div style={{padding: '15px'}}>
//       <h2 style={{color: '#206040'}}>Kegs</h2>
//       <div className="row">
//         {masterList.map((kegList, index) =>
//           <div className="col-md-4">
//             <Keg
//               name={kegList.name}
//               brand={kegList.brand}
//               price={kegList.price}
//               alc={kegList.alc}
//               key={index}/>
//           </div>
//         )}
//       </div>
//     </div>
//
//   );
// }

function KegList(props){
  return (
    <div style = {{padding: '15px'}}>
      <hr/>
      <h2 style = {{color: '#206040'}}>Kegs</h2>
      <div className = "row">
        {props.masterList.map((keg) =>
          <Keg name = {keg.name}
            brand = {keg.brand}
            price = {keg.price}
            alc = {keg.alc}
            key = {keg.id}/>
        )}
      </div>
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};


export default KegList;
