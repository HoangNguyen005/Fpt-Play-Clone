import classNames from "classnames/bind";
import styles from './Button.module.scss';
import PropTypes from "prop-types";
import { Link } from "react-router";

const cx = classNames.bind(styles)
const emptyFunc = () => { }

function Button({
    children,
    hiddenMobileIcon,
    onClick = emptyFunc,
    disabled = false,
    className = '',
    primary,
    to = '',
    href = '',
    fontBold,
    transparent,
    unActive,
    icon,
    data,
    rounded,
    ...passProps
}) {


    let Tag = 'button';
    let slug = null;

    if(data) {
        slug = data;
    }

    const classes = cx(className, {
        primary,
        fontBold,
        transparent,
        unActive,
        rounded,
        ...passProps

    })

    const props = {
        onClick,
        ...passProps,

    }

    // Remove event listener when disable
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to
        Tag = Link;
    }
    else if (href) {
        props.href = href
        Tag = 'a';
    };

    return (
        <Tag 
            className={classes}
            data-slug = {slug}
         {...props}
         
         >
          {icon ? <span className={classNames('icon text-base  mr-2 text-center', {'hidden': hiddenMobileIcon})}>{icon}</span> : null}
           <span>{children}</span>       
        </Tag>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,  // Button is disabled when true
    primary: PropTypes.bool,
    fontBold: PropTypes.bool,
    transparent: PropTypes.bool,
    unActive: PropTypes.bool,
    className: PropTypes.string,  // additional CSS class names to be spread onto the button element
    to: PropTypes.string,
    href: PropTypes.string,
    passProps: PropTypes.object,
    icon: PropTypes.node,
    data: PropTypes.string,
    rounded: PropTypes.bool,
    hiddenMobileIcon: PropTypes.bool,
}

export default Button;