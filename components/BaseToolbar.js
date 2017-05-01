import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons'

const BaseToolbar = (props) => <Toolbar {...props} />;

BaseToolbar.propTypes = Toolbar.propTypes;
BaseToolbar.defaultProps = {
  ...Toolbar.defaultProps,
  nav:<Button icon key="home">restaurant</Button>,
  title: <div>Chefbook</div>,
  actions: [
    <Button icon key="search">search</Button>,
    <Button icon key="person_pin">person_pin</Button>
  ],
};

export default BaseToolbar;