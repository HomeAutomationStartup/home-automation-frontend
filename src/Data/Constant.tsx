export const DarkColorRules = {
    OuterBorder: 'black',
    OuterBackground: 'rgb(21, 26, 30)',
    InnerBackground: 'rgb(7, 11, 13)',
    BorderHighLight: '',
};

export const RootUrl = {
    authMS: 'http://localhost:8085',
    gateway: 'http://localhost:8086',
};

export const Url = {
    user_registration_url: RootUrl.authMS + '/api/v1/users/create',
    user_login_url: RootUrl.authMS + '/api/v1/users/authenticate',
    profile_creation_url:
        RootUrl.gateway + '/pra/api/v1/profiles/create?admin=',
    profiles_fetch_url: RootUrl.gateway + '/pra/api/v1/profiles/admin?admin=',
    profile_fetch_url: RootUrl.gateway + '/pra/api/v1/profiles/id?id=',
    devices_fetch_url: RootUrl.gateway + '/dra/api/v1/devices',
    devices_creat_url: RootUrl.gateway + '/dra/api/v1/devices/create?admin=',
    device_status_url: RootUrl.gateway + '/dra/api/v1/devices/status?id=',
};
export const RoutePath = {
    home: '/',
    accountConfiguration: '/accountconfiguration',
    mainApplication: '/app',
    room: 'room/:type',
    premium: 'app/premium',
    setting: 'app/setting',
    dashboard: 'dashboard',
    connection: 'app/connection',
};

export const AccountConfiguration = {
    form_header: 'Hi, Creative',
    form_subHeader: "Let's create your home with the basic details.",
    select_room_header: 'Please add your room here',
    select_room_error: 'Max 6 rooms can be added',
    select_profile_error: 'No profile found',
    banner_heading_to_add_profile: 'This is the first step to setup your home.',
    banner_heading_to_select_profile:
        'Select your profile based on your personal interest.',
};

export const AccountConfigurationRoomNames = [
    { roomType: 'Bathroom', value: 'Bathroom', label: 'Bathroom' },
    { roomType: 'Bedroom', value: 'Bedroom', label: 'Bedroom' },
    { roomType: 'Dining Room', value: 'Dining Room', label: 'Dining Room' },
    { roomType: 'Drawing Room', value: 'Drawing Room', label: 'Drawing Room' },
    { roomType: 'Hall', value: 'Hall', label: 'Hall' },
    { roomType: 'Kitchen', value: 'Kitchen', label: 'Kitchen' },
    { roomType: 'Living Room', value: 'Living Room', label: 'Living Room' },
    {
        roomType: 'Master Bedroom',
        value: 'Master Bedroom',
        label: 'Master Bedroom',
    },
    { roomType: 'Room', value: 'Room', label: 'Room' },
    { roomType: 'Store Room', value: 'Store Room', label: 'Store Room' },
    { roomType: 'Study Room', value: 'Study Room', label: 'Study Room' },
];
export const AccountConfigurationPicsType = [
    { picType: 'Woman', value: 'Woman', label: 'Woman' },
    { picType: 'Man', value: 'Man', label: 'Man' },
    { picType: 'Girl', value: 'Girl', label: 'Girl' },
    { picType: 'Boy', value: 'Boy', label: 'Boy' },
];

export const SpringSuspense = {
    hidden: {
        y: '-100vh',
        opacity: 0,
        transform: 'scale(0) rotateX(-360deg)',
    },
    visible: {
        y: '0vh',
        opacity: 1,
        transition: {
            duration: 0.2,
            type: 'spring',
            damping: 15,
            stiffness: 500,
        },
    },
    exit: {
        y: '-100vh',
        opacity: 0,
    },
};
