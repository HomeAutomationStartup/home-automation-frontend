import { BrowserRouter as Router } from 'react-router-dom';
import useWindowDimensions from './Hooks/useWindowDimensions';
import MobileResWarning from './Pages/MobileResWarningPage';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import GlobalRoute from './Components/Others/GlobalRoute/GlobalRoute';
import { useState } from 'react';
import './App.css';
import { DarkColorRules } from './Data/Constant';
const queryClient = new QueryClient();
function App() {
    const [notificationColor] = useState(DarkColorRules.OuterBorder);
    const responsiveValue = 0; //1270;
    const { width } = useWindowDimensions();
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App" style={{ background: notificationColor }}>
                {/* <div className="App"> */}
                <Router>
                    {(width as number) >= responsiveValue &&
                        width !== null &&
                        width !== undefined && <GlobalRoute />}
                    {(width as number) < responsiveValue &&
                        width !== null &&
                        width !== undefined && <MobileResWarning />}
                </Router>
            </div>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
    );
}

export default App;
