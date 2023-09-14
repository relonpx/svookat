import React from 'react'

export default function Footer2() {
  return (
    <>
    <div className='footer2' style={{marginTop: '4rem'}}>
      <div className="container-2 flex ai-center jc-sb" style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <div className="l-footer">
          <h2 className="heading">SVOOKAT.</h2>
          <p className="text" style={{marginTop: '5rem'}}>&copy; 2023 svookat.com</p>
        </div>
        <div className="r-footer">
          <form action="" className="flex ai-center jc-sb">
            <input type="email" className="form-input" placeholder='Your email address'/>
            <input type="submit" className="btn-1" value={'Enter'}/>
          </form>
          <div className="row flex jc-sb" style={{marginTop: '3rem'}}>
            <div className="box">
              <p className="text">4140 Parker Rd.</p>
              <p className="text">Soreang, Bandung</p>
              <p className="text">31134</p>
            </div>
            <div class="box">
              <p href="" className="text">+62 900647723</p>
              <p href="" className="text">svookat.com</p>
            </div>
            <div className="box">
              <ul className="footer-menu">
                <li>
                  <a href="" className="text">About us</a>
                </li>
                <li>
                  <a href="" className="text">Command Center</a>
                </li>
                <li>
                  <a href="" className="text">Our content</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
