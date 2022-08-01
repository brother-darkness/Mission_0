import styles from '../componentStyles/upperBody.module.css';
import mainpic from '../images/upperbodyimages/italy_01.png';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import LowerBody from './lowerBody';

export default function UpperBody() {
    
    return (
        <div className={styles.imageBody}>
            
            <img src={mainpic} alt='italy'/>
            <h1>The journey of a thousand miles begins with a single step.</h1>

            <div className={styles.searchBar}>
            <input type="text"></input>
            <Button
              size="medium"
              variant="contained"
              sx={{ height: 20, backgroundColor: "#FF395C" }}
            >Search
            </Button>
            {/* <TextField id="outlined-basic" label="Search..." variant="outlined" /> */}
            
            </div>
        </div>
    ) 
}