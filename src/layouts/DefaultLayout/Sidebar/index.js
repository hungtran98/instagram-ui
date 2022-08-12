
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'


const cx = classNames.bind(styles)
function Sidebar() {
    return ( 
        <div className={cx('wrapper')}>
            <h3>Sidebar</h3>
        </div>
     );
}

export default Sidebar;