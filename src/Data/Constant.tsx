import { getAppAdminUser } from '../Utils/AuthHelperFunction';

const appUser = getAppAdminUser();
export const RootUrl = {
    authMS: 'http://localhost:8085',
};
export const Url = {
    user_registration_url: RootUrl.authMS + '/api/v1/users/create',
    user_login_url: RootUrl.authMS + '/api/v1/users/authenticate',
    user_create_profile:
        RootUrl.authMS + '/api/v1/profile/create?username=' + appUser,
};
export const RoutePath = {
    home: '/',
    accountConfiguration: '/accountconfiguration',
    mainApplication: '/app',
    room: 'room/:type',
    premium: 'app/premium',
    dashboard: 'dashboard',
};
export const HeaderMessage = {
    accountConfiguration_form_header: 'Hi, Creative',
    accountConfiguration_form_subHeader:
        "Let's create your home with the basic details.",
    accountConfiguration_room_form_header: 'Please add your room here',
};

export const RoomNames = [
    { type: 'Bathroom', value: 'Bathroom', label: 'Bathroom' },
    { type: 'Bedroom', value: 'Bedroom', label: 'Bedroom' },
    { type: 'Dining Room', value: 'DiningRoom', label: 'Dining Room' },
    { type: 'Drawing Room', value: 'DrawingRoom', label: 'Drawing Room' },
    { type: 'Hall', value: 'Hall', label: 'Hall' },
    { type: 'Kitchen', value: 'Kitchen', label: 'Kitchen' },
    { type: 'Living Room', value: 'LivingRoom', label: 'Living Room' },
    {
        type: 'Master Bedroom',
        value: 'MasterBedroom',
        label: 'Master Bedroom',
    },
    { type: 'Room', value: 'Room', label: 'Room' },
    { type: 'Store Room', value: 'StoreRoom', label: 'Store Room' },
    { type: 'Study Room', value: 'StudyRoom', label: 'Study Room' },
];
