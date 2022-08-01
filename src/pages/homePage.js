import Header from '../pageComponents/header';
import UpperBody from '../pageComponents/upperBody';
import LowerBody from '../pageComponents/lowerBody';
import styles from '../componentStyles/homePageStyle.module.css';

export default function HomePage () {
    return (
        <div className={styles.homePage}>
        <Header/>
        <UpperBody/>
        <LowerBody/>
        </div>

    )
}