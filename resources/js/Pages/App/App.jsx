import React from 'react';
import { Head } from '@inertiajs/react'

// const getItemsHtml = (items) => {
//     let html = '';
//     for (const [key, item] of Object.entries(items)) {
//         html += `<div>${key}</div><br />`;
//         for (const [name, field] of Object.entries(item)) {
//             html += `<div>${name} : ${field}</div><br />`;
//         }
//     }
//     return html;
// };

export default function App({ response }) {
//   console.log(response);
//   console.log(Object.entries(response));
  let responseArr = Object.entries(response);
  let locationTitle = responseArr[0][0]; 
  let locationData = responseArr[0][1]; 
  
  let currentTitle = responseArr[1][0]; 
  let currentData = responseArr[1][1];
  console.log(currentData);
  
  return (
    <>
        <Head title="Welcome" />
        <h1>Welcome</h1>
        <h2>{locationTitle}</h2>
        <div>
            <ul>
                {Object.entries(locationData).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </div>
        {/* <h2>{currentTitle}</h2>
        <div>
            <ul>
                {Object.entries(currentData).map(([key, value]) => (
                    <li key={key}>{key}: {value}</li>
                ))}
            </ul>
        </div> */}
    </> 
  )
}

// <Layout>
// </Layout>