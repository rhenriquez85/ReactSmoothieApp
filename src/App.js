import './App.css';
import { MainWindow } from './components/mainWindow/MainWindow';
import { PageContextProvider } from "./store/page-context";

function App() {
  return (
    <PageContextProvider>
      <MainWindow />
    </PageContextProvider>
  );
}

export default App;