import { Box, Container } from "@mui/material";
import MyComponent from "./components/MyComponent";
import "./App.css";
import InputSlider from "./components/InputSlider";

function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <MyComponent />
        <InputSlider />
      </Box>
    </Container>
  );
}

export default App;
