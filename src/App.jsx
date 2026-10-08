import { LocalizationProvider } from "@mui/x-date-pickers"
import JuegosForm from "./components/JuegosForm"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"


function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <JuegosForm />
      </>
    </LocalizationProvider>
  )
}

export default App
