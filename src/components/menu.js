import React from 'react';

const Menu = () => (
   <div>
       <div class="ui pointing menu">
           <a class="active item">
               Leitura
           </a>
           <div class="right menu">
               <div class="item">
                   <div class="ui transparent icon input">
                       <input type="text" placeholder="Search..." />
                           <i class="search link icon"></i>
                   </div>
               </div>
           </div>
       </div>
       <div class="ui grid">
           <div class="four wide column">
               <div class="ui vertical fluid tabular menu">
                   <a class="active item">
                       React
                   </a>
                   <a class="item">
                       Redux
                   </a>

               </div>
           </div>
           <div class="twelve wide stretched column">
               <div class="ui segment">

                   <div class="ui items">
                       <div class="item">

                           <div class="middle aligned content">
                               <a class="header">12 Years a Slave</a>
                           </div>
                       </div>
                       <div class="item">

                           <div class="middle aligned content">
                               <a class="header">My Neighbor Totoro</a>
                           </div>
                       </div>
                       <div class="item">

                           <div class="middle aligned content">
                               <a class="header">Watchmen</a>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
       </div>
   </div>
);

export default Menu;