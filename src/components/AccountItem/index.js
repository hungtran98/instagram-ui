import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import Image from "~/components/Image";


const cx = classNames.bind(styles)
function AccoutItem({ data }) {

    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} fallback={'https://i.pinimg.com/736x/11/be/35/11be35319dca286f9af527395f4fee3e.jpg'} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    { data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>}
                </p>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccoutItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccoutItem;