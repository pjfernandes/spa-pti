import React from 'react'
import { FaPlusSquare} from 'react-icons/fa'

const ProductCard = ({data}) => {
  return (
    <div style={styles.container}>
      <img style={styles.image} src={`${data.image}`} alt=""/>
      <p style={styles.name}>{data.name}</p>
      <div style={styles.price}>
        <p>${data.price}</p>
        <FaPlusSquare style={{ color: '#6495ED', paddingLeft: '100px', fontSize: '18px'}}/>
      </div>
    </div>
  )
}

const styles = {
  container: {
    border: 'solid 1px grey',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    fontFamily: "Arial",
    alignItems: 'center',
    padding: '10px',
    marginTop: '15px',
    width: '180px',
  },
  name: {
    color: '#708090',
    fontWeight: 'bold'
  },
  image: {
    height: '150px'
  },
  price: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'sṕace-evenly',
    fontWeight: 'bold'
  }
};

export default ProductCard
