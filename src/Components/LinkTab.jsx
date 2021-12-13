import PropTypes from 'prop-types';
import React from 'react';
import Tab from '@material-ui/core/Tab';

export default function LinkTab(props) {
  const { icon } = props;
  return (
    <Tab
      component="a"
      icon={ icon }
      onClick={ (event) => {
        event.preventDefault();
      } }
      { ...props }
    />
  );
}
LinkTab.defaultProps = {
  icon: PropTypes.string,
};
LinkTab.propTypes = {
  icon: PropTypes.objectOf(PropTypes.object),
};
