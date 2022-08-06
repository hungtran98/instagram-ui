import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccoutItem from '~/components/AccountItem'
import Button from '~/components/Button'


import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles)


function Header() {
    const  [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,4,5])
        }, 0)
    })
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo-tiktok"/>
                </div>
                <Tippy 
                interactive
                visible={searchResult.length > 0}
                render={
                attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                            </PopperWrapper>
                        </div>
                ) 
                }>
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false}/>
                        <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button outline leftIcon={<FontAwesomeIcon icon={faCloudArrowUp} />} >Upload</Button>
                    {/* <Button rounded className={cx('buttonlogin')}>Log in</Button> */}
                    <Button primary >Login</Button>
                    
                </div>
            </div>
        </header>
     );
}

export default Header;