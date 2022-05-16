import { Box, Stack, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import Swal from "sweetalert2";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  let cartTotal = 0;
  cart.forEach((cartItem) => {
    cartTotal += parseInt(cartItem.price);
  });

  const handleCheckout = () => {
    if (cart.length < 1) {
      Swal.fire({
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Go to explore page",
        title: "Your cart is empty",
        text: "View the explore page to add music to your cart",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }else{
      navigate("/checkout");
    }


  }

  return (
    <Box sx={{ p: 6 }}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosRoundedIcon />
      </IconButton>
      <Stack direction="row" spacing={40}>
        <Stack spacing={4}>
          <h1>Cart</h1>
          {cart.length > 0 ? (
            cart.map((cartItem, index) => (
              <>
                <Stack
                  key={index}
                  sx={{justifyContent: 'space-between'}}
                  direction="row"
                  alignItems="center"
                  spacing={4}
                >
                  <Box
                    key={index}
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
                  <IconButton
                    color="error"
                    onClick={() => {
                      dispatch(removeFromCart(cartItem));
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </>
            ))
          ) : (
            <h2>Your cart is empty</h2>
          )}
        </Stack>
        <Box>
          <h1>cart</h1>
          <h2>Total Items: {cart.length}</h2>
          <h3>Total: {cartTotal}</h3>
            <Button  onClick={handleCheckout} sx={{ marginTop: 2 }} variant="contained" size="large">
              Check-out
            </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Cart;
