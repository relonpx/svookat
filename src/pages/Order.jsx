import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer2 from "../components/Footer2/Footer2";

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
              <h1 className="heading" style={{ marginBottom: "2rem" }}>
                Produk
              </h1>
              <div className="orders-card flex ai-center jc-sb">
                <div className="order-produk">
                  <h1 className="heading">Nike Air Flyknit</h1>
                  <p className="text">4024 | 42 | Rp. 2.500.000</p>
                </div>
                <div className="produk-r flex ai-center">
                  <div className="order-produk-r">
                    <h1 className="heading">1x</h1>
                  </div>
                  <h1 className="heading">Rp. 2.500.000</h1>
                </div>
              </div>
              <div
                className="orders-card flex ai-center jc-sb"
                style={{ marginBottom: "2rem" }}
              >
                <div className="order-produk">
                  <h1 className="heading">Nike Air Flyknit</h1>
                  <p className="text">4024 | 42 | Rp. 2.500.000</p>
                </div>
                <div className="produk-r flex ai-center">
                  <div className="order-produk-r">
                    <h1 className="heading">1x</h1>
                  </div>
                  <h1 className="heading">Rp. 2.500.000</h1>
                </div>
              </div>
              <div className="pengiriman flex ai-center jc-sb">
                <div className="jasa-l">
                  <h1 className="heading">Shopee Express</h1>
                  <p className="text">Rp. 12.000.00 | Estimasi 3 hari</p>
                </div>
                <h1 className="heading">Rp. 5.000.000</h1>
              </div>
              <div className="total-bayar flex ai-center jc-sb">
                <h1 className="heading">Total Pembayaran</h1>
                <h1 className="heading">Rp. 7.000.000</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer2 />
    </>
  );
}
