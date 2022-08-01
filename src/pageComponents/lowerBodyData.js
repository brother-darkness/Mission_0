import NZPic from '../images/lowerbodyimages/nz.png';
import AfricaPic from '../images/lowerbodyimages/africa.png';
import NYPic from '../images/lowerbodyimages/newyork.png';
import styles from '../componentStyles/lowerBody.module.css';

export default function LowerBodyData() {
    return(

        // Main Body
        <div className={styles.randomImageBody}>

            {/* Card Data */}

            <div className={styles.cardInfo_01}> 
                <img className={styles.NZPic} src={NZPic} alt='NZ'/>
                <h3>Oceania</h3>

                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam.
                </h4>
                
            </div>
            
            <div className={styles.cardInfo_02}>
                <img className={styles.AfricaPic} src={AfricaPic} alt='Africa'/>
                <h3>Africa</h3>
                <h4>Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                </h4>
            </div>

            <div className={styles.cardInfo_03}>
                <img className={styles.NYPic} src={NYPic} alt='New York'/>
                <h3>North America</h3>
                <h4>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                     dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                </h4>
            </div>
        </div>

    )
}