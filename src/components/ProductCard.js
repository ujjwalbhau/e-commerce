import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Loader from './Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';

const  ProductCard=({list, setProductDetail})=> {
console.log(list)

  return (
    
    <div className='cardGrid' >{list ? list.map ((product, index)=>{
        return (
            <div className='product-card'  key={index} onClick={()=>setProductDetail(product)} >
                           <Card style={{ width: '18rem', display:'flex',justifyContent:'center'}}>
                <Card.Img variant="top" src={product.image} roundedCircle />
                <Card.Body>
                  <Card.Title>{product.name} </Card.Title>
                  <Card.Text>
                    
                    Price {product.price}
                  </Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
                     </div>
        )
    })
     : <Loader />
        
    }
             
        
  
    
    

    
    </div>
   
  );
}

export default ProductCard;