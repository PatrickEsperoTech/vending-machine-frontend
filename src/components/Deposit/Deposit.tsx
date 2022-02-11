import React from 'react'
import { getDeposit, postDeposit } from '../../api';

const Deposit: React.FC<any> = (props: any) => {

    React.useEffect(() => {
        getDeposit()
        .then(deposit => {
            props.setDeposit(deposit);
        })
        .catch(e => {
            alert(e.message);
        })
    }, [props]);

    const postDepositAndSet = (amount: number) => {
        postDeposit(amount)
        .then(result => {
            props.setDeposit(result)
        })
        .catch(err => {
            alert(err);
        })
    }

    return (
        <div className='container mx-auto py-3'>
            <div className='py-2'>
                <span>Current Deposit: {props.deposit}</span>
            </div>
            <div className='py-2'>
                <span className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2' onClick={() => postDepositAndSet(5)}>5</span>
                <span className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2' onClick={() => postDepositAndSet(10)}>10</span>
                <span className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2' onClick={() => postDepositAndSet(20)}>20</span>
                <span className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2' onClick={() => postDepositAndSet(50)}>50</span>
                <span className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2' onClick={() => postDepositAndSet(100)}>100</span>
            </div>
        </div>
    )
}

export default Deposit