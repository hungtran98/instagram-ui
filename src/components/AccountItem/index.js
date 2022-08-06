import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'


const cx = classNames.bind(styles)
function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://i.pinimg.com/736x/78/c2/76/78c276ab4b635897691028d8e7bbf7e3.jpg" alt="Acount item"/>
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