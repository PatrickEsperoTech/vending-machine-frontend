import React from 'react'

const Product: React.FC<any> = (props: any) => {
    return (
        <tr className='bg-white border-b'>
            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>{props.product.productName}</td>
            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>{props.product.amountAvailable}</td>
            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>{props.product.cost}</td>
            <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap'>{props.product.id}</td>
        </tr>
    )
}

export default Product