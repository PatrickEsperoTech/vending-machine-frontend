import React from 'react'
import '../Product/Product'
import Product from '../Product/Product';

const Products: React.FC<any> = (props: any) => {

    return (
        <div className='container mx-auto py-3'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th scope='col' className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>Product Name</th>
                        <th scope='col' className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>Amount Available</th>
                        <th scope='col' className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>Cost (cents)</th>
                        <th scope='col' className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase'>Product ID</th>
                    </tr>
                </thead>
                <tbody>
                {props.products.map((product: any) => {
                    return (
                        <Product key={product.productName} product={product} />
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Products