import LowerBodyData from './lowerBodyData';
import styles from '../componentStyles/lowerBody.module.css';


export default function LowerBody() {
    return (
        // Main Body
        <div className={styles.mainBody}>
            <LowerBodyData/>    
        </div>
    )
}