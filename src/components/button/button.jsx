import React from 'react'
import './button.css'
import classNames from 'classnames';

export const Button = ({
    onClick,
    type,
    children,
    size = 's'
}) => {
    const btnClass = classNames({
        'btn': true,
        'btn--secondary': type === 'secondary',
        'btn--primary': type === 'primary',
        'btn--small': size === 's',
        'btn--medium': size === 'm',
    })
  return (
    <div className={btnClass} onClick={onClick}>
        {children}
    </div>
  )
}
