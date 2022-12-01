import React, { Suspense } from 'react';
import LoadingFade from '../../Others/LoadingAnimation/LoadingFade/LoadingFade';
import './Advertisment.css';

const Landing = React.lazy(() => import('./Landing/Landing'));
const AppFeatures = React.lazy(() => import('./AppFeatures/AppFeatures'));
const UserReview = React.lazy(() => import('./UserReview/UserReview'));
const Contact = React.lazy(() => import('./Contact/Contact'));
const Advertisment = () => {
    return (
        <div className="advertisment_container">
            <Suspense fallback={<LoadingFade />}>
                <Landing />
            </Suspense>
            <Suspense fallback={<LoadingFade />}>
                <AppFeatures />
            </Suspense>
            <Suspense fallback={<LoadingFade />}>
                <UserReview />
            </Suspense>
            <Suspense fallback={<LoadingFade />}>
                <Contact />
            </Suspense>
        </div>
    );
};

export default Advertisment;
