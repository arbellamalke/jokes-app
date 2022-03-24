import React, { useState } from 'react';

const GetLocalStorage= () => {

   const [name, setName] = useState('');
   const [pwd, setPwd] = useState('');

   const handle = () => {
      localStorage.setItem('Name', name);
      localStorage.setItem('Password', pwd);
   };
  
   return (
      <form>
         <input 
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         <div>
            <button id="storageBtn" onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('Name') && (
            <div id="answer">
              <p id="get">{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Password') && (
            <div id="answer">
              <p id="get">{localStorage.getItem('Password')}</p>
            </div>
         )}        
      </form>
   );
};
export default GetLocalStorage;