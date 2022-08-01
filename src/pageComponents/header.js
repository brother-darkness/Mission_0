import Button from '@mui/material/Button';
import styles from '../componentStyles/headerStyle.module.css';
import profilepic from '../images/headerimages/profilepic.png';

export default function Header() {
    return (

            // Main Header Body
            <div className={styles.headerBody}>
                  {/* Company Profile */}
                    <div className={styles.companyProfile}>
                        <img src={profilepic} alt='profile picture'/>
                        <h3>Trip Minder</h3>

                     </div>

                     {/* Button Group */}
                     <div className={styles.buttonGroup}>
                     <Button  sx={{ height: 35, mr: 4, backgroundColor:"#151E34", fontWeight:"bold", fontStyle:"italic" }} variant="contained" size="medium">Book Now</Button>
                     <Button  sx={{ height: 35, mr: 4, backgroundColor:"#151E34", fontWeight:"bold", fontStyle:"italic" }} variant="contained" size="medium">FAQ</Button>
                     <Button  sx={{ height: 35, mr: 4, backgroundColor:"#151E34", fontWeight:"bold", fontStyle:"italic" }} variant="contained" size="medium">About Us</Button>
                     <Button  sx={{ height: 35, mr: 4, backgroundColor:"#FF395C", fontWeight:"bold" }} variant="contained" size="medium">LOGIN</Button>
                     </div>

                  
            </div>
            
        

        

        
    )
}