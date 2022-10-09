import './App.css';
import { MainWindow } from './components/mainWindow/MainWindow';
import { PageContextProvider } from "./store/page-context";
import { CartContextProvider } from './store/cart-context';

function App() {
  return (
    <PageContextProvider>
      <CartContextProvider>
        <MainWindow />
      </CartContextProvider>
    </PageContextProvider>
  );
}

export default App;