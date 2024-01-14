import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   primary = false,
   outline = false,
   small = false,
   large = false,
   text = false,
   rounded = false,
   disabled = false,
   medium=false,
   outlineBox=false,
   active=false,
   cate=false,
   className,
   leftIcon,
   rightIcon,
   onClick,
   children,
   ...passProps
}) {
   let Component = 'button';
   const props = {
      onClick,
      ...passProps,
   };

   //Remove event listener when have disabled
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }
   if (to) {
      props.to = to;
      Component = Link;
   } else if (href) {
      props.href = href;
      Component = 'a';
   }
   const classes = cx('wrapper', {
      primary: primary,
      outline,
      small,
      large,
      medium,
      outlineBox,
      cate,
      active,
      text,
      rounded,
      [className]: className,
      disabled,
   });
   return (
      <Component className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Component>
   );
}

Button.propTypes = {
   to: PropTypes.string,
   href: PropTypes.string,
   primary: PropTypes.bool,
   outline: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   text: PropTypes.bool,
   rounded: PropTypes.bool,
   disabled: PropTypes.bool,
   className: PropTypes.string,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   onClick: PropTypes.func,
   children: PropTypes.node.isRequired,
};

export default Button;
