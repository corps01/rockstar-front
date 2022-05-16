import { Box, Button,IconButton, Stack } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

const Checkout = () => {

  const navigate = useNavigate();

  return (
    <Box sx={{ p: 6, justifyContent: "space-between" }}>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosRoundedIcon />
      </IconButton>
      <h2>Shipping</h2>
      <Stack direction="row" sx={{justifyContent: "space-between"}}>
        <p>Shipping Adress:{"shiping,sadde"}</p>
        <FormGroup></FormGroup>
      </Stack>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          // onChange={(e) => setSong(e.target.checked, song)}
        >
          <FormControlLabel value="1" control={<Radio />} label="Dir 1" />
          <FormControlLabel value="2" control={<Radio />} label="Dir 2" />
          <FormControlLabel value="3" control={<Radio />} label="Dir 3" />
        </RadioGroup>
      </FormControl>
      <Link to="/">
        <Button sx={{ marginTop: 2 }} variant="contained" size="large">
          Check-out
        </Button>
      </Link>
    </Box>
  );
};

export default Checkout;
