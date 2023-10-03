import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCart, sendCartData } from './components/Store/cart-actions';

let isInitial=true;

function App() {
  const show=useSelector(state=> state.toggle.isShowing);
  const cart=useSelector(state=>state.cart);
  const notification=useSelector(state=>state.toggle.notification);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(fetchCart());
  },[dispatch]);

  useEffect(()=>{
  if (isInitial){
    isInitial=false;
    return;
  }
  dispatch(sendCartData(cart));
  },[cart, dispatch]);

  return (
    <>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
    <Layout>
      {show && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
