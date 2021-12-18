import Home from './pages/Home';

import { CryptorProvider } from './contexts/CryptorContext';

function App() {
  return (
    <CryptorProvider>
      <Home />
    </CryptorProvider>
  )

}

export default App;
