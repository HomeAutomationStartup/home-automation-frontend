import React, { Suspense } from 'react';
import LoadingFade from '../../Others/LoadingAnimation/LoadingFade/LoadingFade';
import './index.css';

const Landing = React.lazy(() => import('./Landing/Landing'));

const UiLook = React.lazy(() => import('./UiLook/UiLook'));

const User = React.lazy(() => import('./User/User'));

const Contact = React.lazy(() => import('./Contact/Contact'));

const Index = () => {
    return (
        <div className="container">
            <Suspense fallback={<LoadingFade />}>
                <Landing />
            </Suspense>
            <Suspense fallback={<LoadingFade />}>
                <UiLook />
            </Suspense>
            <Suspense fallback={<LoadingFade />}>
                <User />
            </Suspense>
            <Suspense fallback={<LoadingFade />}>
                <Contact />
            </Suspense>
        </div>
    );
};

export default Index;
