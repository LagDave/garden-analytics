import Container from "./components/container/Container"
import SalesForm from "./components/sales-form/SalesForm";
import SalesView from "./components/sales-view/SalesView";
import { SalesProvider } from "./contexts/SalesContext";

const App = () => {
  return (
    <Container>
      <SalesForm/>
      <SalesProvider>
        <SalesView/>
      </SalesProvider>
    </Container>
  )
}
export default App;