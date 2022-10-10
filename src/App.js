import './App.css';
import { MainWindow } from './components/mainWindow/MainWindow';
import { PageContextProvider } from './store/page-context';
import { CartContextProvider } from './store/cart-context';
import { MenuContextProvider } from './store/menu-context';

function App() {
  return (
    <PageContextProvider>
      <CartContextProvider>
        <MenuContextProvider>
          <MainWindow />
        </MenuContextProvider>
      </CartContextProvider>
    </PageContextProvider>
  );
}

export default App;