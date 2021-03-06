import { defaultFont, grayColor } from 'styles/variables';
import { darken } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  tab: {
    backgroundColor: theme.palette.background.paper
  },
  label: {
    ...defaultFont,
    fontSize: 18,
    color: darken(grayColor, 0.5)
  },
  secondaryText: {
    ...defaultFont,
    color: darken(grayColor, 0.2),
    fontSize: 12
  },
  listItem: {
    margin: 0
  },
  secondaryColor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.light
  },
  warningColor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.light
  },
  errorColor: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.light
  }
});

export default styles;
