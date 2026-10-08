import { LocalizationProvider } from "@mui/x-date-pickers"
import JuegosForm from "./components/JuegosForm"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import JuegosContainer from "./containers/JuegosContainer"
import Header from "./layouts/Header"


function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Header></Header>      
        <JuegosContainer />
      </>
    </LocalizationProvider>
  )
}

export default App
