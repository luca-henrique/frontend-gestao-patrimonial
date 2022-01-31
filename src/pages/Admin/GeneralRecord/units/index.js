import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import UnitsPage from './table';

import {Creators as CreatorsUnits} from '~/store/ducks/units';

import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();

  const visible = useSelector((state) => state.units.units_list.visible);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if (!isExpanded) {
      dispatch(CreatorsUnits.hideAccordingUnits());
    }
  };

  return (
    <div className={classes.root} style={{marginTop: '50px'}}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        disabled={visible}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography className={classes.heading}>Unidades</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <UnitsPage />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
