import React from 'react'

const Item = () => {
    return (
        <div className="card" style={{ width: '18rem', margin:'20px' }}>
            <img src="..." className="card-img-top" alt="..." style={{ width: '500px', height: '325px' }}/>
            <div className="card-body" style={{ padding:'', }}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}

export default Item