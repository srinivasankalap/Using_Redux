import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { toggleAction } from './components/Store/Toggle';
import Notification from './components/UI/Notification';

let isInitial=true;

function App() {
  const show=useSelector(state=> state.toggle.isShowing);
  const cart=useSelector(state=>state.cart);
  const notification=useSelector(state=>state.toggle.notification);
  const dispatch=useDispatch();

  useEffect(()=>{
    const sendCardData=async()=>{
      dispatch(toggleAction.showNotification({
        status: "pending",
        title: 'Sending...',
        message: 'Sending cart data!'
      }))
    const response=await fetch('https://practice-fc64d-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',{
      method: 'PUT',
      body: JSON.stringify(cart),
    })
    if (!response.ok){
      throw new Error('Sending cart data failed');
    }
    dispatch(toggleAction.showNotification({
      status: "success",
      title: 'Success!',
      message: 'Sent cart data successfully!'
    }))
  }
  if (isInitial){
    isInitial=false;
    return;
  }
    sendCardData().catch(error=>{
      dispatch(toggleAction.showNotification({
        status: "error",
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    });
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
