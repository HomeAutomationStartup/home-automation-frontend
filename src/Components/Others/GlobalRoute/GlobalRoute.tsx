import { Navigate, Route, Routes } from 'react-router-dom';
import AccountConfigurationPage from '../../../Pages/AccountConfigurationPage';
import DashBoardPage from '../../../Pages/DashBoardPage';
import Home from '../../../Pages/HomePage';
import MainApplicationPage from '../../../Pages/MainApplicationPage';
import NotFound from '../../../Pages/NotFoundPage';
import PremiumPage from '../../../Pages/PremiumPage';
import RoomPage from '../../../Pages/RoomPage';
import ProtectedRoute from '../../../Services/ProtectedRoute';
import PublicRoute from '../../../Services/PublicRoute';
import { RoutePath } from './../../../Data/Constant';

const GlobalRoute = () => {
    return (
        <Routes>
            {/************************HOME PAGE*****************************/}
            <Route element={<PublicRoute />}>
                <Route path={RoutePath.home} element={<Home />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                {/***********************ADD/OPEN ACCOUNT***************************/}
                <Route
                    path={RoutePath.accountConfiguration}
                    element={<AccountConfigurationPage />}
                />
                {/**********************APPLICATION ROUTE*****************************/}
                <Route
                    path={RoutePath.mainApplication}
                    element={<MainApplicationPage />}
                >
                    <Route
                        path={RoutePath.mainApplication}
                        element={<Navigate replace to={RoutePath.dashboard} />}
                    />
                    <Route
                        path={RoutePath.dashboard}
                        element={<DashBoardPage />}
                    />
                    {/**********************NESTED ROOM ROUTE*****************************/}
                    <Route path={RoutePath.room} element={<RoomPage />} />
                    {/**********************PREMIUM ROUTE*****************************/}
                    <Route path={RoutePath.premium} element={<PremiumPage />} />
                </Route>
            </Route>
            {/************************NOT FOUND**************************/}
            <Route path="*" element={<NotFound />} />
            {/************************************************************/}
        </Routes>
    );
};

export default GlobalRoute;
