import Tippy from "@tippyjs/react/headless"
import 'tippy.js/dist/tippy.css'
import styles from './Menu.module.scss'
import classNames from "classnames/bind"
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'


const cx = classNames.bind(styles)



function Menu({ children, items = []}) {
        const renderItems = () => {

            return items.map((item, index) => (
                    <MenuItem key={index} data ={item}/>
            ))
        }
             return (   <Tippy 
                        interactive
                        delay={[0, 500]}
                        placement='bottom-end'
                        render={ (attrs) => (
                            <div className={cx('menu-list')}>
                                <PopperWrapper className={cx('menu-popper')}>
                                    {renderItems()}
                                </PopperWrapper>                              
                            </div>
                        )}
                        >
                        {children}
                    </Tippy>
    );
}

export default Menu;