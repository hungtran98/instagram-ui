import clsx from 'clsx'
import { useEffect, useState } from "react"
import React from 'react'
import styles from './Content.module.scss'


function Content() {

    const [avatar, setAvatar] = useState()

    useEffect(()=> {

        //cleanup

        console.log('callback');
        return () => {

           avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handleReviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }

    return (
        <div className={clsx(styles.contentContainer)}>
            <input
            type='file'
            onChange={handleReviewAvatar}
            />
            {avatar && (<img src={avatar.preview} alt='' width='75%'/> )}
        </div>
    )
}


export default Content
