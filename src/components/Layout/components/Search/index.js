import { useEffect, useState, useRef } from 'react'
import AccoutItem from '~/components/AccountItem'
import HeadlessTippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'

import { Wrapper as PopperWrapper } from '~/components/Popper'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)


function Search() {

    const  [searchResult, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()
    
    useEffect(() => {
        if(!searchValue.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)

        let result = `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`
       fetch(result)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch( () => {
                setLoading(false)
            })
    }, [searchValue])


    //handle
    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }


    return (
        <HeadlessTippy 
        interactive
        onClickOutside={handleHideResult}
        visible={showResult && searchResult.length > 0}
        render={
        attrs => ( 
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {   searchResult.map((result) => (
                            <AccoutItem data={result} key={result.id}/> 
                        ))
                        }
                    </PopperWrapper>
                </div>
        )
        
        }>
            <div className={cx('search')}>
                <input 
                ref={inputRef}
                placeholder='Search accounts and videos'
                spellCheck={false}
                value= {searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onFocus={() => setShowResult(true)}
                />
               { !!searchValue && !loading && (
                <button className={cx('clear-btn')} onClick={handleClear}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
               )  
                }
                { loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search