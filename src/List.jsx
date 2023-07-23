import React, { useEffect, useState } from 'react'

const List = () => {
    let [data,setData] = useState([]);

    const getdata = async () => {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();
        console.log(data);
        setData(data.products);
    };

    useEffect(() => {
        getdata();
    },[]);


  return (
    <>
    <div className='grid'>
        
        {
            data.length > 0 && data.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.thumbnail} alt=''/>
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                );
            })
        }
    </div>
    <button onClick={getdata}>Get data</button>

    </>
  );
};

export default List