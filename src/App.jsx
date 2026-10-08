import { LocalizationProvider } from "@mui/x-date-pickers"
import JuegosForm from "./components/JuegosForm"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import JuegosContainer from "./containers/JuegosContainer"


function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <JuegosContainer />
      </>
    </LocalizationProvider>
  )
}

export default App
