import React, { useEffect,useState } from 'react'
import ItemCount from '../ItemCount';
import ItemList from '../ItemList/ItemList';
import ClipLoader from "react-spinners/ClipLoader"

const productos = [
  {id: 1, imagen:"https://http2.mlstatic.com/D_NQ_NP_798686-MLA50207299147_062022-O.webp",stock: 12, marca:"Samsung" ,modelo: "Galaxy A23 128GB Negro", Precio: "$70000"},
  {id: 2,imagen:"https://http2.mlstatic.com/D_NQ_NP_816480-MLA47777273514_102021-O.webp" ,stock: 5,marca: "Iphone", modelo: "IPhone 13 Pro Max 5G 256GB Plateado", Precio: "$250000"},
  {id: 3,imagen:"https://http2.mlstatic.com/D_NQ_NP_2X_773268-MLA50421440914_062022-F.webp",stock: 2,  marca:"Xiaomi" ,modelo: "REDMI NOTE 10", Precio: "$72900"}]
  

 export default function ItemListContainer({greeting}) {  
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
     setLoading(true)
     setTimeout(() => {
      setLoading (false)
     
    },2000)
    
  },[])
  
  
  
  
  const [data, setData] = useState ([]);
  
  useEffect(() => {
     const getdata = new Promise(resolve => {
      setTimeout (() => {
        resolve(productos)
      }, 2000);
     })
    getdata.then(res => setData(res))

  }, [])


  const onAdd = (quantity) =>{
    console.log (`estas llevando ${quantity} unidades`);
  }
  
  return (
    <div>
     <span>{greeting}</span>
     <ItemCount initial={1} stock={10} onAdd={onAdd}/>
     <ClipLoader color={'#e25a87'} loading={loading}  size={150} />
     <ItemList  data={data}/>
    </div>
  );

}

