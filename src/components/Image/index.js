import {useState, forwardRef } from "react";
import PropTypes from 'prop-types'
import images from "~/assets/images";
import styles from './Image.module.scss'
import classNames from 'classnames'

const Image = forwardRef(({src, clasName, alt, fallback: customFallback = images.noImage , ...props}, ref) => {

    const [fallback, setFallback] = useState('')
    
    const handleError = () => {
        setFallback(customFallback)
    }     
    
    return (
        <img ref={ref} className={classNames(styles.wrapper, clasName)} src={ fallback || src} alt={alt} {...props} onError={handleError}/>
    );
})

Image.propTypes = {
    src: PropTypes.string,
    clasName: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;