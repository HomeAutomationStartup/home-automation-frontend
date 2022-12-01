export const ColorRules = [
    {
        OuterBorder: '#1F2123',
        // OuterBorder: '#0F0F0F',
        OuterBackground: '#25292D',
        // OuterBackground: '#1F2123',
        InnerBackground: '#2E3438',
        // InnerBackground: '#1A1A1A',
        BorderColor: 'grey',
        HeadingColor: 'lavender',
        subHeadingColor: '#909ba6',
        InfoColor: '#e2ff00',

        formBackground: '#1f2123',
    },
    {
        OuterBorder: 'red',
        OuterBackground: 'white',
        InnerBackground: 'wheat',
        BorderColor: 'grey',
        HeadingColor: 'black',
        subHeadingColor: 'black',
        InfoColor: '#e2ff00',
        formBackground: 'grey',
    },
];
export const DarkColorRules = {
    OuterBorder: '#1F2123',
    OuterBackground: '#25292D',
    InnerBackground: '#2E3438',
    BorderColor: 'grey',
    HeadingColor: 'lavender',
    subHeadingColor: '#909ba6',
    formBackground: '#1f2123',
};
// export const LightColorRules = {
//     OuterBorder: 'red',
//     OuterBackground: 'white',
//     InnerBackground: 'wheat',
//     BorderColor: 'grey',
//     HeadingColor: 'black',
//     subHeadingColor: 'black',
//     formBackground: 'grey',
// };

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

export const PolicyStatement = [
    {
        type: 'Privacy Policy',
        date: 'Last Updated : 26 Jan, 2022',
        statement:
            "This policy will be render from server Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum This policy will be render from server Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum This policy will be render from server Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum This policy will be render from server Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
        type: 'Cookie Policy',
        date: 'Last Updated : 26 Jan, 2022',
        statement:
            "This policy will be render from server Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
];
