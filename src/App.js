import logo from './logo.svg';
import './App.css';
import FlexLayoutReact from './FLexLayout/FlexLayout';
import { Box } from '@mui/material';
import AddWidget from './FLexLayout/AddWidget';

function App() {
  return (
    <Box>
      <AddWidget/>
      <FlexLayoutReact/>
    </Box>
  );
}

export default App;
