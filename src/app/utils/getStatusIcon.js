import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from '@mui/material/styles';

const getStatusIcon = (status) => {
  switch (status) {
    case 'Due Tomorrow':
      const StyledWarningIcon = styled(WarningIcon)`
        color: rgb(237, 187, 64);
      `;

      return StyledWarningIcon;

    case 'Due Today':
      const StyledErrorIcon = styled(ErrorIcon)`
        color: rgb(208, 46, 38);
      `;

      return StyledErrorIcon;

    case 'In Grading':
      const StyledGradingIcon = styled(ManageSearchIcon)`
        color: grey;
      `;

      return StyledGradingIcon;

    case 'Returned':
      const StyledReturnedIcon = styled(AssignmentTurnedInIcon)`
        color: rgb(90, 147, 78);
      `;

      return StyledReturnedIcon;

    default:
      const StyledAssignedIcon = styled(AssignmentIcon)`
        color: rgb(157, 215, 223);
      `;

      return StyledAssignedIcon;
  }
};

export default getStatusIcon;
