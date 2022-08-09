import {useState, forwardRef } from "react";
import images from "~/assets/images";
import styles from './Image.module.scss'
import classNames from 'classnames'


console.log(images.noImage);
const Image = forwardRef(({src, clasName, alt, fallback: customFallback = images.noImage , ...props}, ref) => {

    const [fallback, setFallback] = useState('')
    
    const handleError = () => {
        setFallback(customFallback)
    }     
    
    return (
        <img ref={ref} className={classNames(styles.wrapper, clasName)} src={ fallback || src} alt={alt} {...props} onError={handleError}/>
    );
})

export default Image;