'use client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import assignments from '../data/assignments';
import formatDate from '../utils/formatDate';
import getStatus from '../utils/getStatus';
import getStatusIcon from '../utils/getStatusIcon';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function AssignmentTable() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: 'rgb(43,88,123)' }}
      >
        <Table aria-label="assignment table">
          <TableHead>
            <TableRow>
              <TableCell>Assignment</TableCell>
              <TableCell align="left">Assigned</TableCell>
              <TableCell align="left">Due</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {assignments.map((assignment) => {
              const status = getStatus(assignment.due, assignment.returned);
              const StatusIcon = getStatusIcon(status);

              return (
                <TableRow
                  key={assignment.assignment}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {assignment.assignment}
                  </TableCell>
                  <TableCell align="left">
                    {formatDate(assignment.assigned)}
                  </TableCell>
                  <TableCell align="left">
                    {formatDate(assignment.due)}
                  </TableCell>
                  <TableCell align="left">
                    <StatusIcon
                      sx={{ verticalAlign: 'middle', marginRight: 1 }}
                    />
                    {status}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
