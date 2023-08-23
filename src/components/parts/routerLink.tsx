import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

type Props = LinkProps & {
  linkType?: 'redirect' | 'route';
  onClickEvent?: (e?: React.MouseEvent) => void;
};

export const RouterLink: React.FC<Props> = (linkProps) => {
  const { className, children, onClickEvent, linkType, ...props } = linkProps;

  const handleClickLink = (e: React.MouseEvent) => {
    if (onClickEvent) {
      onClickEvent(e);
    }
  };

  const url = props.to as string;

  if (linkType === 'redirect') {
    return (
      <a href={url} className={className} onClick={(e) => handleClickLink(e)} {...props}>
        {children}
      </a>
    );
  } else {
    return (
      <Link className={className} onClick={(e) => handleClickLink(e)} {...props} to={url}>
        {children}
      </Link>
    );
  }
};
