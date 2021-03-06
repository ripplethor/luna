import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'redux-react-hook';
import { withStyles } from '@material-ui/core/styles';
import { ControlTypes } from 'components/common';
import { addInstallOption } from 'models/common/actions';
import { iMessage } from 'commons/utils';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import styles from './styles/options';

const Options = ({ classes, selected }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Typography variant="subtitle1" className={classes.title}>
        {iMessage('title', 'installationOptions')}
      </Typography>
      <Divider />
      <List dense className={classes.list}>
        {selected.map(packageName => <ListItem key={packageName}>
          <ListItemText
            primary={
              <Typography variant="subtitle1">{packageName}</Typography>
            }
          />
          <ListItemSecondaryAction>
            <ControlTypes
              packageName={packageName}
              onSelect={({ name, options }) =>
                dispatch(
                  addInstallOption({
                    name,
                    options
                  })
                )
              }
            />
          </ListItemSecondaryAction>
        </ListItem>)}
      </List>
    </div>
  );
};

Options.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  selected: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(Options);
