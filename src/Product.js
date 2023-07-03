import React from 'react'

const pStyle = {
    color: 'red',
}

const prezzo = 14
const alt = 'valore'
const img = 'https://image.api.playstation.com/vulcan/img/rnd/202008/1900/lTSvbByTYMqy6R22teoybKCg.png';

const Product = () => {
  return (
    <article>
        <div className="card">

            <img src={img} alt={`${alt}`} />

            <h6>10$ Amazon + 20P</h6>

            <hr />

            <p style={pStyle}>{2.33 + 2} $</p>

            <p style={{
                textTransform: 'uppercase'
            }}>bamby000</p>
            
        <p className='card-time'>{'RIAPRE PRESTO'.toLocaleLowerCase()}</p>
        <button>
            {
                prezzo
            } $
        </button>
        </div>

    </article>
  )
}

export default Product
