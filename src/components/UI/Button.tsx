import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

type BaseProps = {
    children: ReactNode;
    textOnly: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<'button'> &
BaseProps & { to?: never };

type RouterLinkProps = BaseProps & LinkProps & { to: string };

type ComponentProps = ButtonProps | RouterLinkProps;

function isRouterLink(props: ComponentProps): props is RouterLinkProps{
    return 'to' in props;
}

const Button = (props: ComponentProps) => {
  
    if(isRouterLink(props)){
        const { children, textOnly, ...otherProps } = props;
        return(
            <Link className={`button ${textOnly ? 'button--text-only' : ''}`} { ...otherProps }>
                {children}
            </Link>
        )
    };

    const { children, textOnly, ...otherProps } = props;

    return(
        <button className={`button ${textOnly ? 'button--text-only' : ''}`} { ...otherProps }>{children}</button>
    )
}

export default Button