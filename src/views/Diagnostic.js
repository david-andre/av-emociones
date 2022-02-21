import Chat from "./Chat";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Diagnostic = () => {
  return (
    <Box sx={{ margin: 5 }}>
      <Chat></Chat>
      <Link to="/home">
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 2
          }}
        >
          REGRESAR AL MENU PRINCIPAL
        </Button>
      </Link>
    </Box>
  );
};
export default Diagnostic;
