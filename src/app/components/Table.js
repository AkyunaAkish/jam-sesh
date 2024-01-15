// 'use client';
// import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import assignments from '../data/assignments';

export default function BasicTable() {
  //   // Constants
  //   const second_milliseconds = 1000;
  //   const minute_milliseconds = 60 * second_milliseconds;
  //   const hour_milliseconds = 60 * minute_milliseconds;
  //   const day_milliseconds = 24 * hour_milliseconds;

  //   // Global Variables
  //   let current_date = null;

  //   function initializeTableUpdates() {
  //     // Initial setup
  //     current_date = new Date(Date.now());
  //     const next_day_date = new Date(
  //       current_date.getFullYear(),
  //       current_date.getMonth(),
  //       current_date.getDate() + 1
  //     );

  //     // Update table once
  //     update_assignment_status_table();

  //     // Calculate duration to midnight in milliseconds
  //     let milliseconds_til_midnight =
  //       next_day_date.getTime() - current_date.getTime();

  //     setTimeout(update_table_loop, milliseconds_til_midnight);
  //   }

  //   function update_assignment_status_table() {
  //     // Figure out how many assignments (rows) there are
  //     const table_element = document.getElementById('assignment-status-table');
  //     const assignment_rows = table_element.lastElementChild.children;
  //     let number_of_assignments = assignment_rows.length;

  //     // If table is empty, display error dialog box
  //     if (number_of_assignments <= 0) {
  //       alert('Error: No assignments in table');
  //     }

  //     // Otherwise, continue analyzing rows of the table
  //     else {
  //       // Iterate through list of assignment rows
  //       for (let i = 0; i < number_of_assignments; i++) {
  //         let current_assignment = assignment_rows[i];

  //         let assignment_status = get_assignment_status(current_assignment);

  //         update_row_status(current_assignment, assignment_status);
  //       }
  //     }

  //     console.log('Updated Assignment Table');
  //   }

  //   function get_assignment_status(assignment_row_element) {
  //     let assignment_data_columns = assignment_row_element.children;

  //     let due_date_string = assignment_data_columns[2].innerHTML;
  //     let status_string = assignment_data_columns[3].innerHTML;

  //     const assignment_due_date = new Date(due_date_string);
  //     assignment_due_date.setMinutes(assignment_due_date.getTimezoneOffset());

  //     const date_regex =
  //       /[1-9][0-9][0-9][0-9]-([0][1-9]|[1][0-2])-([0][1-9]|[1-2][0-9]|[3][0-1])/;

  //     // If the date string is too long, or doesn't match format
  //     // report error, otherwise continue with analysis
  //     if (due_date_string.length != 10 || !date_regex.test(due_date_string)) {
  //       return 'Error';
  //     } else {
  //       let days_til_due_date = days_between_dates(
  //         current_date,
  //         assignment_due_date
  //       );

  //       // Past Due Date
  //       if (days_til_due_date < 0) {
  //         if (status_string == 'Returned') {
  //           return 'Returned';
  //         } else {
  //           return 'In Grading';
  //         }
  //       } else if (days_til_due_date == 0) {
  //         return 'Due Today';
  //       } else if (days_til_due_date == 1) {
  //         return 'Due Tomorrow';
  //       } else {
  //         return 'Assigned';
  //       }
  //     }
  //   }

//   useEffect(() => {
//     initializeTableUpdates();

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  function update_row_status(row_tag, row_status) {
    let status_data_tag = row_tag.lastElementChild;

    status_data_tag.innerHTML = row_status;

    if (row_status == 'Assigned') {
      row_tag.className = 'assigned';
    } else if (row_status == 'Due Tomorrow') {
      row_tag.className = 'due-tomorrow';
    } else if (row_status == 'Due Today') {
      row_tag.className = 'due-today';
    } else if (row_status == 'In Grading') {
      row_tag.className = 'in-grading';
    } else if (row_status == 'Returned') {
      row_tag.className = 'returned';
    } else {
      row_tag.className = 'error';
      status_data_tag.innerHTML = '* Error *';
    }
  }

  function days_between_dates(date1, date2) {
    let date1_days = days_since_1970(date1);
    let date2_days = days_since_1970(date2);

    return date2_days - date1_days;
  }

  function days_since_1970(input_date) {
    let local_offset_milliseconds =
      input_date.getTimezoneOffset() * minute_milliseconds;

    let date_milliseconds = input_date.getTime() - local_offset_milliseconds;

    return Math.floor(date_milliseconds / day_milliseconds);
  }

  function update_table_loop() {
    update_assignment_status_table();

    const daily_interval = setInterval(
      update_assignment_status_table,
      day_milliseconds
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Assignment</TableCell>
            <TableCell align="right">Assigned</TableCell>
            <TableCell align="right">Due</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {assignments.map((assignment) => {
            return (
              <TableRow
                key={assignment.assignment}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {assignment.assignment}
                </TableCell>
                <TableCell align="right">{assignment.assigned}</TableCell>
                <TableCell align="right">{assignment.due}</TableCell>
                <TableCell align="right">{assignment.status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
