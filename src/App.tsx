import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import './App.css';
import useWindowDimensions from './Hooks/useWindowDimensions';
import MobileResWarning from './Pages/MobileResWarning';

function App() {
    const { width } = useWindowDimensions();

    return (
        <div className="App" style={{ background: 'rgb(7,11,13)' }}>
            {(width as number) >= 1270 &&
                width !== null &&
                width !== undefined && <Home />}
            {(width as number) < 1270 &&
                width !== null &&
                width !== undefined && <MobileResWarning />}
            {/* <NotFound /> */}
        </div>
    );
}

export default App;
