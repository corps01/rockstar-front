import { Box, Stack, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from "react-redux";


const Cart = () => {

//     const cart = useSelector((state) => state.cart.cartItems);
// console.log(cart)

  return (
    <Box sx={{ p: 6 }} >
        <Stack direction='row' sx={{backgroundColor: 'yellow'}} spacing={40}>
      <Stack spacing={4} sx={{backgroundColor: 'red'}}>
      <h1>Cart</h1>
        <Stack direction='row' alignItems="center" spacing={4}>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
            maxHeight: { xs: 50 },
            maxWidth: { xs: 50 },
          }}
          alt="album img"
          src="https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png"
        />
        <p>Stronger</p>
        <p>Graduation</p>
        <p>Kanye West</p>
        <p>$ .99</p>
        <IconButton color="error">
            <DeleteIcon />
          </IconButton>
      </Stack>
      </Stack>
      <Box sx={{backgroundColor: 'blue'}}>
            <h1>cart</h1>
            <h2>
                Total Items: 1
            </h2>
            <h3>
                Total: $20
            </h3>
            <Button
            sx={{ marginTop: 2}}
            variant="contained"
            size="large">
                Check-out
                </Button>
            </Box>
      </Stack>
    </Box>
  );
};

export default Cart;
