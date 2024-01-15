import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from './components/Table';

export default function Assignments() {
  return (
    <Box component="section" alignItems="center" display="flex">
      <Typography variant="h4">ETRO 106 Assignment Status</Typography>

      <Table />
    </Box>
  );
}
