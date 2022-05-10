import { Box, Stack, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";


const Cart = () => {
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart.items);
console.log(cart)

let cartTotal = 0
cart.forEach(cartItem => {
  cartTotal +=  parseInt(cartItem.price)
});

  return (
    <Box sx={{ p: 6 }} >
        <Stack direction='row' spacing={40}>
      <Stack spacing={4}>
      <h1>Cart</h1>
      {cart.map((cartItem, index) => (
       <>
       <Stack direction='row' alignItems="center" spacing={4} key={index}>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
            maxHeight: { xs: 50 },
            maxWidth: { xs: 50 },
          }}
          alt="album img"
          src={cartItem.album?.img}
        />
        <p>{cartItem.song?.name}</p>
        <p>{cartItem.album.name}</p>
        <p>{cartItem.album.artists?.map((artist) => artist.name)}</p>
        <p>{cartItem.price}</p>
        <IconButton color="error" onClick={()=>{dispatch(removeFromCart(cartItem))}}>
            <DeleteIcon />
          </IconButton>
          </Stack>
       </>
      ))}
      </Stack>
      <Box>
            <h1>cart</h1>
            <h2>
                Total Items: {cart.length}
            </h2>
            <h3>
                Total: {cartTotal} 
            </h3>
            <Link to='/checkout'>
            <Button
            sx={{ marginTop: 2}}
            variant="contained"
            size="large">
                Check-out
                </Button>
                </Link>
            </Box>
      </Stack>
    </Box>
  );
};

export default Cart;
