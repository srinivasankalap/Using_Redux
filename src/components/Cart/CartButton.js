import classes from './CartButton.module.css';
import { toggleAction } from '../Store/Toggle';
import { useDispatch } from 'react-redux';

const CartButton = (props) => {
  const dispatch=useDispatch();
  const toggleHandler=()=>{
    dispatch(toggleAction.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
