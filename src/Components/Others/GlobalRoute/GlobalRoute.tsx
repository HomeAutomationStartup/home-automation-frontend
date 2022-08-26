import React from 'react';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../../../Services/ProtectedRoute';
import PublicRoute from '../../../Services/PublicRoute';
import LoadingFade from '../LoadingAnimation/LoadingFade/LoadingFade';
import { RoutePath } from './../../../Data/Constant';

const Home = React.lazy(() => import('../../../Pages/HomePage'));
const AccountConfigurationPage = React.lazy(
    () => import('../../../Pages/AccountConfigurationPage'),
);
const MainApplicationPage = React.lazy(
    () => import('../../../Pages/MainApplicationPage'),
);
const DashBoardPage = React.lazy(() => import('../../../Pages/DashBoardPage'));
const RoomPage = React.lazy(() => import('../../../Pages/RoomPage'));
const PremiumPage = React.lazy(() => import('../../../Pages/PremiumPage'));
const NotFound = React.lazy(() => import('../../../Pages/NotFoundPage'));

const GlobalRoute = () => {
    return (
        <Suspense fallback={<LoadingFade />}>
            <Routes>
                {/************************HOME PAGE*****************************/}
                <Route element={<PublicRoute />}>
                    <Route
                        path={RoutePath.home}
                        element={
                            <Suspense fallback={<LoadingFade />}>
                                <Home />
                            </Suspense>
                        }
                    />
                </Route>
                <Route element={<ProtectedRoute />}>
                    {/***********************ADD/OPEN ACCOUNT***************************/}
                    <Route
                        path={RoutePath.accountConfiguration}
                        element={
                            <Suspense fallback={<LoadingFade />}>
                                <AccountConfigurationPage />
                            </Suspense>
                        }
                    />
                    {/**********************APPLICATION ROUTE*****************************/}
                    <Route
                        path={RoutePath.mainApplication}
                        element={
                            <Suspense fallback={<LoadingFade />}>
                                <MainApplicationPage />
                            </Suspense>
                        }
                    >
                        <Route
                            path={RoutePath.mainApplication}
                            element={
                                <Navigate replace to={RoutePath.dashboard} />
                            }
                        />
                        <Route
                            path={RoutePath.dashboard}
                            element={
                                <Suspense fallback={<LoadingFade />}>
                                    <DashBoardPage />
                                </Suspense>
                            }
                        />
                        {/**********************NESTED ROOM ROUTE*****************************/}
                        <Route
                            path={RoutePath.room}
                            element={
                                <Suspense fallback={<LoadingFade />}>
                                    <RoomPage />
                                </Suspense>
                            }
                        />
                        {/**********************PREMIUM ROUTE*****************************/}
                        <Route
                            path={RoutePath.premium}
                            element={
                                <Suspense fallback={<LoadingFade />}>
                                    <PremiumPage />
                                </Suspense>
                            }
                        />
                    </Route>
                </Route>
                {/************************NOT FOUND**************************/}
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<LoadingFade />}>
                            <NotFound />
                        </Suspense>
                    }
                />
                {/************************************************************/}
            </Routes>
        </Suspense>
    );
};

export default GlobalRoute;
