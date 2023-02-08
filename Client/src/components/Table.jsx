import React from 'react'
import Table from 'react-bootstrap/Table';
import './components.css'


const ProductTable = ({product}) => {
  return (
    <div className='Table'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>

        </tr>
      </thead>
      <tbody>
       {
        product.map((item,i)=>(
          <tr key={i}>
          <td> <input type="checkbox" /></td>
          <td>{item.productName}</td>
          <td>{item.price}</td>
          
        </tr>
        ))
       }
        
      </tbody>
    </Table>

    </div>
  )
}

export default ProductTable