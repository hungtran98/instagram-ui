import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccoutItem from '~/components/AccountItem'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';


import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus, faCloudArrowUp, faEllipsisVertical, faEarthAmerica, faCircleInfo, faKeyboard, faCircleQuestion, faMessage, faUser, faCoins, faGear, faCircleDollarToSlot, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
import { UploadIcon } from '~/components/icons';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon  icon={faEarthAmerica}/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {   
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {   type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon  icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon  icon={faKeyboard}/>,
        title: 'Keyboard shortcuts'
    }
]


//handle
const handleMenuChange = (menuItem) => {
    console.log(menuItem)
} 


function Header() {
    const currentUser = true
    const  [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,4])
        }, 0)
    })


    const userMenu = [
        {
            icon: <FontAwesomeIcon  icon={faUser}/>,
            title: 'Profile',
            to: '/profile'
        },
        {
            icon: <FontAwesomeIcon  icon={faCircleDollarToSlot}/>,
            title: 'Get coin',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon  icon={faGear}/>,
            title: 'Setting',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon  icon={faArrowRightFromBracket}/>,
            title: 'Logout',
            to: '/logout',
            separet: true,
        },
    ]
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
                {
                    currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudArrowUp}/>
                            
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        
                        <>
                            <Button outline leftIcon={<FontAwesomeIcon icon={faCloudArrowUp} />} >Upload</Button>
                            {/* <Button rounded className={cx('buttonlogin')}>Log in</Button> */}
                            <Button primary >Login</Button>
                        </>
                    )
                }
                    <Menu items = { currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image 
                            src={'https://i.pinimg.com/564x/ad/28/77/d2877d5e564bc162178b54edd1e77be.jpg'}
                            className={cx('user-avatar')}
                            fallback = {'https://i.pinimg.com/736x/15/f5/a0/15f5a071081391068833c460cb4d4ff9.jpg'}
                            />
                        ) : 
                        (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                        )}
                    </Menu> 
                </div>
             
            </div>
        </header>
     );
}

export default Header;