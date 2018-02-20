import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

//
//
// const masterList = [
//   {
//     name: 'Guiness Draught',
//     brand: 'Guiness',
//     price: '205',
//     alc: '4.20'
//   },
//   {
//     name: 'Blue Moon - Belgian White',
//     brand: 'Blue Moon',
//     price: '150',
//     alc: '5.40'
//   },
//   {
//     name: 'Mannys Pale Ale',
//     brand: 'Mannys',
//     price: '140',
//     alc: '5.40'
//   },
//   {
//     name: 'Deschutes IPA',
//     brand: 'Deschutes',
//     price: '190',
//     alc: '7.00'
//   },
// ];
//
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
      <h2 style = {{color: '#206040'}}>Kegs</h2>
      <div className = "row">
        {props.kegList.map((keg) =>
          <Keg names = {keg.name}
            brand = {keg.brand}
            price = {keg.brand}
            alc = {keg.brand}
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
