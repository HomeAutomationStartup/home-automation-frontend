import { DarkColorRules } from '../Data/Constant';

export const ProfileConfigurationPageStyles = {
    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '0.5rem',
        background: DarkColorRules.InnerBackground,
    },
    outerSection: {
        height: '85%',
        width: '90%',
        display: 'grid',
        gridTemplateColumns: '1.5fr 2.5fr',
        gridAutoRows: '100%',
        gridGap: '10px',
        borderRadius: '0.5rem',
    },
    innerSection: {
        borderRadius: '0.6rem',
        padding: '1rem',
        background: DarkColorRules.OuterBackground,
    },
};

export const mainApplicationPageStyles = {
    mainDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    outerUl: {
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '0.2fr 3.8fr',
        paddingLeft: '0',
        listStyle: 'none',
        overflow: 'hidden',
        color: 'white',
        gridGap: '8px',
    },
    outerList_1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '0.5rem',
        background: '#1A1A1A',
        padding: '0.5rem',
        minWidth: '75px',
        maxWidth: '75px',
    },
    outerList_2: {
        borderRadius: '0.5rem',
        padding: '0.5rem',
        background: '#1A1A1A',
    },
    navSpan: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F0F0F',
        width: '100%',

        borderRadius: '0.5rem',
    },
    navList: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        gap: '2rem',
    },
    li: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
    },
    motionDiv: { width: '100%', height: '100%' },
    mainAppContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '0.5rem',
    },
};
