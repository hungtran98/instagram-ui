import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'


const cx = classNames.bind(styles)
function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://i.pinimg.com/564x/63/82/6f/63826fee8f494b14d53671007e0f8a59.jpg" alt="Acount item"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>billieeilish</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
                </p>
                <span className={cx('username')}>BILLIE EILISH</span>
            </div>
        </div>
    );
}

export default AccoutItem;