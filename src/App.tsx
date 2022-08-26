import { BrowserRouter as Router } from 'react-router-dom';
import useWindowDimensions from './Hooks/useWindowDimensions';
import MobileResWarning from './Pages/MobileResWarningPage';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalRoute from './Components/Others/GlobalRoute/GlobalRoute';
import { useState } from 'react';
import './App.css';
const queryClient = new QueryClient();
function App() {
    const [notificationColor] = useState('rgb(7,11,13)');
    const { width } = useWindowDimensions();
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App" style={{ background: notificationColor }}>
                <Router>
                    {(width as number) >= 1270 &&
                        width !== null &&
                        width !== undefined && <GlobalRoute />}
                    {(width as number) < 1270 &&
                        width !== null &&
                        width !== undefined && <MobileResWarning />}
                </Router>
            </div>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    );
}

export default App;
