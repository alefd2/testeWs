import GlobalStyle from './styles/global';
import {Layout} from './components/Layout';
import { CarContextProvider } from './context/listContext'


function App() {
  return (
    <>
      {/*   CONTEXT OF APP   */}
      <CarContextProvider> 
          <Layout />
      </CarContextProvider>

      
      <GlobalStyle /> 

    </>

  )
}

export default App;
