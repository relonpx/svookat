import React from 'react'
import Navbar from '../components/Navbar/Navbar'

export default function Order() {
 return (
   <>
     <Navbar />
     <section>
       <div className="container-2">
         <div className="check-heading flex ai-center jc-sb">
           <h1 className="heading">Pesanan anda</h1>
           <i className="fa fa-bag-shopping"></i>
         </div>
         <div className="container-3">
           <div className="order-card">
             <h1 className="heading">Produk</h1>
             <div className="flex ai-center jc-sb">
               <div className='order-produk'>
                 <h1 className="heading">Nike Air Flyknit</h1>
                 <p className="text">4024 | 42 | Rp. 2.500.000</p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
   </>
 );
}
