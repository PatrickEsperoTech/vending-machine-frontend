import React from 'react'
import { buy, fetchProducts } from '../../api';

const Buy: React.FC<any> = (props: any) => {

    const [productId, setProductId] = React.useState(5);
    const [amount, setAmount] = React.useState(1);
    const [buyResult, setBuyResult] = React.useState(null as any);

    const buyAndSet = (productId: number, amount: number) => {
        buy(productId, amount)
            .then(result => {
                setBuyResult(result);
                props.setDeposit(0);
                fetchProducts()
                    .then(products => {
                        props.setProducts(products);
                    })
                    .catch(err => {
                        alert(err.message);
                    })
            })
            .catch(err => {
                alert(err.message);
            })
    }

    return (
        <div className='container mx-auto py-3'>
            <form>
                <div className='mb-6'>
                    <label htmlFor='product-id' className='block mb-2 text-sm font-medium text-gray-900'>Product ID</label>
                    <select id="product-id" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' onChange={event => setProductId(parseInt(event.target.value))}>
                        {props.products.map((product: any) => {
                            return (
                                <option key={product.id}>{product.id}</option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor='amount' className='block mb-2 text-sm font-medium text-gray-900'>Amount</label>
                    <input id='amount' type={"number"} className='mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' defaultValue={1} onChange={event => setAmount(parseInt(event.target.value))} />
                </div>
            </form>
            <span className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2' onClick={() => buyAndSet(productId, amount)}>Buy</span>
            <div hidden={buyResult === null} className='mt-2'>
                <div>Purchased Item: {buyResult?.purchasedItemName}</div>
                <div>Total Amount Spent: {buyResult?.totalAmountSpent}</div>
                <div>Number of items purchased: {buyResult?.amount}</div>
                <div>Total Change: {buyResult?.totalChange}</div>
                <div>5ct ({buyResult?.change[0]}x)</div>
                <div>10ct ({buyResult?.change[1]}x)</div>
                <div>20ct ({buyResult?.change[2]}x)</div>
                <div>50ct ({buyResult?.change[3]}x)</div>
                <div>100ct ({buyResult?.change[4]}x)</div>
            </div>
        </div>
    )
}

export default Buy