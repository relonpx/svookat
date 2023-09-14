import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer2/Footer2'

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section>
        <div className="container-2">
          <div className="check-heading flex ai-center jc-sb">
            <h1 className="heading">Keranjang</h1>
            <i className="fa fa-bag-shopping"></i>
          </div>
        </div>
        <div className="container-3">
          <div className="flex jc-sb">
            <div className="l-check">
              <div className="check-card">
                <div className="check-img">
                  <img src="/pngegg.png" alt="" />
                </div>
                <div className="check-desc">
                  <div className="check-desc-heading flex ai-center jc-sb">
                    <h1 className="heading">Nike Air Flyknit</h1>
                    <h1 className="heading">1x</h1>
                  </div>
                  <p className="text">
                    <span>No : </span>4024
                  </p>
                  <p className="text">
                    <span>Size : </span>42
                  </p>
                  <p className="text">
                    <span>Price : </span>Rp. 2.500.000
                  </p>
                  <div className="action flex ai-center">
                    <button className="btn-1">Cancel</button>
                    <button className="btn-2 fa fa-plus"></button>
                  </div>
                </div>
              </div>
              <div className="check-card">
                <div className="check-img">
                  <img src="/NikeHuarache.png" alt="" />
                </div>
                <div className="check-desc">
                  <div className="check-desc-heading flex ai-center jc-sb">
                    <h1 className="heading">Nike Huarache</h1>
                    <h1 className="heading">2x</h1>
                  </div>
                  <p className="text">
                    <span>No : </span>4025
                  </p>
                  <p className="text">
                    <span>Size : </span>40
                  </p>
                  <p className="text">
                    <span>Price : </span>Rp. 1.500.000
                  </p>
                  <div className="action flex ai-center">
                    <button className="btn-1">Cancel</button>
                    <button className="btn-2 fa fa-plus"></button>
                  </div>
                </div>
              </div>
              <div className="check-card">
                <div className="check-img">
                  <img src="/NikeMercurialVapor.png" alt="" />
                </div>
                <div className="check-desc">
                  <div className="check-desc-heading flex ai-center jc-sb">
                    <h1 className="heading">Nike Vapor</h1>
                    <h1 className="heading">1x</h1>
                  </div>
                  <p className="text">
                    <span>No : </span>4026
                  </p>
                  <p className="text">
                    <span>Size : </span>39
                  </p>
                  <p className="text">
                    <span>Price : </span>Rp. 1.750.000
                  </p>
                  <div className="action flex ai-center">
                    <button className="btn-1">Cancel</button>
                    <button className="btn-2 fa fa-plus"></button>
                  </div>
                </div>
              </div>
              <div className="check-card">
                <div className="check-img">
                  <img src="/AdidasPoligon.png" alt="" />
                </div>
                <div className="check-desc">
                  <div className="check-desc-heading flex ai-center jc-sb">
                    <h1 className="heading">Adidas Poligon</h1>
                    <h1 className="heading">1x</h1>
                  </div>
                  <p className="text">
                    <span>No : </span>4027
                  </p>
                  <p className="text">
                    <span>Size : </span>42
                  </p>
                  <p className="text">
                    <span>Price : </span>Rp. 2.000.000
                  </p>
                  <div className="action flex ai-center">
                    <button className="btn-1">Cancel</button>
                    <button className="btn-2 fa fa-plus"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="r-check">
              <div className="detail-card">
                <h1 className="heading">Detail Pesanan</h1>
                <form action="">
                  <div className='opsi-card'>
                    <label className="prod-check flex ai-center">
                      <input type="checkbox" name="" id="" />
                      <div className="prod flex ai-center jc-sb">
                        <div>
                          <h1 className="heading">Nike Air Flykint</h1>
                          <p className="text">Size 42 | 1 pcs</p>
                        </div>
                        <h1 className="heading">Rp. 2.500.000</h1>
                      </div>
                    </label>
                    <label className="prod-check flex ai-center">
                      <input type="checkbox" name="" id="" />
                      <div className="prod flex ai-center jc-sb">
                        <div>
                          <h1 className="heading">Nike Huarache</h1>
                          <p className="text">Size 40 | 2 pcs</p>
                        </div>
                        <h1 className="heading">Rp. 3.000.000</h1>
                      </div>
                    </label>
                    <label className="prod-check flex ai-center">
                      <input type="checkbox" name="" id="" />
                      <div className="prod flex ai-center jc-sb">
                        <div>
                          <h1 className="heading">Nike Vaport</h1>
                          <p className="text">Size 39 | 1 pcs</p>
                        </div>
                        <h1 className="heading">Rp. 1.750.000</h1>
                      </div>
                    </label>
                  </div>
                  <div className="total-pesanan flex ai-center jc-sb">
                    <p className="text">Total Pesanan :</p>
                    <h1 className="heading">Rp. 7.250.000</h1>
                  </div>
                  <input type="submit" name="" id="" className='submit' value={'Checkout'}/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
