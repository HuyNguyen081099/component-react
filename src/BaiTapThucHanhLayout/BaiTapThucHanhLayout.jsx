import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import Item from './Item'

const BaiTapThucHanhLayout = () => {
  return (
    <div className="container">
    <Header/>
    <div className="row text-c">
        <div className=" pe-0">
           <Banner />
        </div>
        <div className=" py-4 text-center" style={{  display: 'flex',  }}>
           <Item />
           <Item />
           <Item />
           <Item />
        </div>
    </div>
    <Footer />
</div>
  )
}

export default BaiTapThucHanhLayout