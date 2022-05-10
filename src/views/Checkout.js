import { Box, Stack } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Checkout = () => {




    return ( <Box>
        <h2>Shipping</h2>
        <Stack direction='row'><p>Shipping Adress:{'shiping,sadde'}</p><FormGroup></FormGroup></Stack>
    <FormControl>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    // onChange={(e) => setSong(e.target.checked, song)}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
        
    </Box> );
}
 
export default Checkout;