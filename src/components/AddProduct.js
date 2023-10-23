import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

 function AddProduct() {
    const [addData, setAddData] = useState({
        name:"",description:"",price:'',image:"",stock:"",availability:''
    });

    let name, value;
    const inputHandeler=(e)=>{
        name=e.target.name;
        value= e.target.value;
        setAddData({...addData, [name]:value})
        console.log(addData)
    }


    const submit=async(e)=>{
        e.preventDefault();
        
        const { name, description, price, image, stock, availability}=addData;
        const res = await fetch("/addData",{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify({
                name, description, price, image, stock, availability
            })
        });
        // const res= await axios.post('http://localhost:8080/addData')
        const data = await res.json();
        console.log(data);
    if(data.status===422 || !data){
      window.alert("Invalid registration ")
      console.log("invalid registration")
    }
    else if(data.status ===201){
      window.alert("registration done")
      console.log("registration done")
    }
}
  return (
    <div className='container'>

    <Card style={{ width: '18rem',display:'flex',justifyContent:'center' }}>
      <Card.Header>Name of the product <input type='text' name='name' value={addData.name} onChange={inputHandeler} /> </Card.Header>
      <ListGroup variant="flush">
        
        <ListGroup.Item>Describe your product <input type='text' name='description' value={addData.description} onChange={inputHandeler} /> </ListGroup.Item>
        <ListGroup.Item>Price(msp) <input type='number' name='price' value={addData.price} onChange={inputHandeler} /> </ListGroup.Item>
        <ListGroup.Item>Sample image <input type='file' name='image' value={addData.image} onChange={inputHandeler} /> </ListGroup.Item>
        <ListGroup.Item>Stock <input type='text' name='stock' value={addData.stock} onChange={inputHandeler} /> </ListGroup.Item>
        <ListGroup.Item>Availability <input type='text' name='availability' value={addData.availability} onChange={inputHandeler} /> </ListGroup.Item>
        <Button variant='primary' onClick={submit} >Submit</Button>
      </ListGroup>
      
    </Card>
    </div>
  );
}

export default AddProduct;
 