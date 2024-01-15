import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from './components/Table';

export default function Assignments() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'max-content', // Width adjusts to content
        maxWidth: '100%',
        margin: '0 auto', // Centers horizontally
        p: 4,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h4" sx={{ color: 'rgb(43,88,123)' }}>ETRO 106 Assignment Status</Typography>
      </Box>
      <Box>
        <Table />
      </Box>
    </Box>
  );
}
