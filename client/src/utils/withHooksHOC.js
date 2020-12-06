import React, { useContext } from 'react';
import StoreContext from '../components/Store/Context';

export const withHooksHOC = (Component) => {
  return (props) => {
    const { token } = useContext(StoreContext);

    return <Component token={token} {...props} />;
  };
};