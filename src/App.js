import './App.css';
import { MainWindow } from './components/mainWindow/MainWindow';
import { PageContextProvider } from './store/page-context';
import { CartContextProvider } from './store/cart-context';
import { MenuContextProvider } from './store/menu-context';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <PageContextProvider>
      <CartContextProvider>
        <MenuContextProvider>
          <BrowserRouter>
            <MainWindow />
          </BrowserRouter>
        </MenuContextProvider>
      </CartContextProvider>
    </PageContextProvider>
  );
}

export default App;