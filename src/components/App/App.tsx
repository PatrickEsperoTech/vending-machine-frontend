import React from 'react'
import Products from '../Products/Products'
import Deposit from '../Deposit/Deposit'
import Buy from '../Buy/Buy'
import { fetchProducts } from '../../api'

const App = () => {

  const [deposit, setDeposit] = React.useState(0);
  const [products, setProducts] = React.useState([] as Array<any>);

  React.useEffect(() => {
    fetchProducts()
      .then(products => {
        setProducts(products);
      })
      .catch(err => {
        alert(err.message);
      })
  }, []);

  return (
    <div className='container mx-auto px-3'>
      <Deposit deposit={deposit} setDeposit={setDeposit} />
      <Products products={products} />
      <Buy setDeposit={setDeposit} products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
