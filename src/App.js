import Container from "./components/container/Container"
import SalesForm from "./components/sales-form/SalesForm";
import SalesView from "./components/sales-view/SalesView";

const App = () => {
  return (
    <Container>
      <SalesForm/>
      <SalesView/>
    </Container>
  )
}
export default App;