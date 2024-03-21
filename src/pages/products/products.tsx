import React from "react";
import { Product } from "../../types/product";

const Products:React.FC<{}>=()=>{

    const products : Array<Product> =[
        {id:1 , name: 'product 1', code: 'P001', price: 10.0, quantity:40 },
        {id:2 , name: 'product 3', code: 'P002', price: 100.0, quantity:0 },
        {id:3 , name: 'product 3', code: 'P003', price: 1000.0, quantity:4 }
    ];
    return (
        <div className=" container m-2 rounded-lg  pb-3 shadow h-max w-screen">
            <div className=" font-bold p-2 text-lg  bg-gray-200 w-full mb-4">Products List</div>
            <table className="  w-full p-2 mb-3">
                <thead className=" border-b-2 ">
                    <th >Item Id</th>
                    <th>Item Name</th>
                    <th>Item Code</th>
                    <th> InStock</th>
                    <th> Price</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        products.map((product)=>
                        <tr className=" text-center">
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td> {product.code} </td>
                            <td> {product.quantity}  </td>
                            <td> {product.price} </td>
                            <td>
                                <button className=" text-white bg-blue-700  rounded-lg  p-2 m-1 hover:bg-blue-800 font-semibold text-sm"> View More </button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Products;