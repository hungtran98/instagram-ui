import Tippy from "@tippyjs/react/headless"
import 'tippy.js/dist/tippy.css'
import classNames from "classnames/bind"
import { useState } from "react"

import styles from './Menu.module.scss'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from "./Header"



const cx = classNames.bind(styles)
const defaultFn = () => { }


function Menu({ children, items = [], onChange = defaultFn}) {
        const [history, setHistory] = useState([{
            data: items
        }])
        const current = history[history.length - 1]

        const renderItems = () => {
            return current.data.map((item, index) =>
                {
                    const isParent = !!item.children    
                    return  (
                        <MenuItem 
                        key={index} 
                        data ={item} 
                        onClick={() => {
                            if(isParent) {
                                setHistory((prev) => [...prev, item.children])
                            } else {
                                onChange(item)
                            }
                        }}/>
                    )
                }
            )
        }
             return (   <Tippy 
                        interactive
                        // visible
                        offset={[15, 10]}
                        delay={[0, 500]}
                        placement='bottom-end'
                        render={ (attrs) => (
                            <div className={cx('menu-list')}>
                                <PopperWrapper className={cx('menu-popper')}>
                                    {history.length > 1 && <Header tiltle="Language" onBack={() => {
                                        setHistory(prev => prev.slice(0, prev.length - 1))
                                    }}/>}
                                    {renderItems()}
                                </PopperWrapper>                              
                            </div>
                        )}
                        onHide={() => setHistory(prev => prev.slice(0, 1))}
                        >
                        {children}
                    </Tippy>
    );
}

export default Menu;