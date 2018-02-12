import React from 'react';
import Keg from 'Keg';



const masterList = [
  {
    name: 'Guiness Draught',
    brand: 'Guiness',
    price: '205',
    alc: '4.20'
  },
  {
    name: 'Blue Moon - Belgian White',
    brand: 'Blue Moon',
    price: '150',
    alc: '5.40'
  },
  {
    name: 'Mannys Pale Ale'
    brand: 'Mannys',
    price: '140',
    alc: '5.40'
  },
  {
    name: 'Deschutes IPA',
    brand: 'Deschutes',
    price: '190',
    alc: '7.00'
  },
];

function KegList(){
  return (
    <div style={{padding: '15px'}}>
  <h2 style={{color: '#206040'}}>Kegs</h2>
  <div className="row">
    {masterSchedule.map((KegList, index) =>
      <div className="col-md-4">
        <Schedule
          name={scheduleList.name}
          brand={scheduleList.brand}
          price={scheduleList.price}
          alc={scheduleList.alc}
          key={index}/>
      </div>
    )}
  </div>
</div>

  );
}

export default KegList;
