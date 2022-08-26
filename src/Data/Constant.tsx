import { getAppAdminUser } from '../Utils/AuthHelperFunction';
import Shot from './../Assets/Shot.png';

const appUser = getAppAdminUser();
export const RootUrl = {
    authMS: 'http://localhost:8085',
};
export const Url = {
    user_registration_url: RootUrl.authMS + '/api/v1/users/create',
    user_login_url: RootUrl.authMS + '/api/v1/users/authenticate',
    user_create_profile:
        RootUrl.authMS + '/api/v1/profile/create?username=' + appUser,
    user_get_profile:
        'http://localhost:8081/api/v1/profile?ownername=' + appUser,
};
export const RoutePath = {
    home: '/',
    accountConfiguration: '/accountconfiguration',
    mainApplication: '/app',
    room: 'room/:type',
    premium: 'app/premium',
    dashboard: 'dashboard',
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
export const UserReview = [
    {
        id: '1',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 4,
    },
    {
        id: '2',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 3.8,
    },
    {
        id: '3',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 2.5,
    },
    {
        id: '4',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 1.5,
    },
    {
        id: '5',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 5,
    },
    {
        id: '6',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 4.5,
    },
    {
        id: '7',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 5,
    },
    {
        id: '8',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 5,
    },
    {
        id: '9',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 5,
    },
    {
        id: '10',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 5,
    },
    {
        id: '11',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 5,
    },
    {
        id: '12',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 5,
    },
];

export const BlogList = [
    {
        id: 1,
        image: Shot,
        h1: 'Now an emeritus professor at New York University School of Medicine',
        h2: 'Fruit and vegetables',
        p: 'Now an emeritus professor at New York University School of Medicine, Weissmann recalls the two of them sitting in a Cambridge pub and reflecting on the role of lipid sheets in separating the interior of the cell from the exterior milieu. This insight, they felt, was to cell function what the discovery of the double helix had been to genetics. Bangham had called his lipid structures “multilamellar smectic mesophases” or sometimes “Banghasomes”. It was Weissmann who proposed the more user-friendly term liposome',
    },
    {
        id: 2,
        image: Shot,
        h1: 'Now an emeritus professor at New York University School of Medicine',
        h2: 'Fruit and vegetables',
        p: 'Now an emeritus professor at New York University School of Medicine, Weissmann recalls the two of them sitting in a Cambridge pub and reflecting on the role of lipid sheets in separating the interior of the cell from the exterior milieu. This insight, they felt, was to cell function what the discovery of the double helix had been to genetics. Bangham had called his lipid structures “multilamellar smectic mesophases” or sometimes “Banghasomes”. It was Weissmann who proposed the more user-friendly term liposome',
    },
    {
        id: 3,
        image: Shot,
        h1: 'Now an emeritus professor at New York University School of Medicine',
        h2: 'Fruit and vegetables',
        p: 'Now an emeritus professor at New York University School of Medicine, Weissmann recalls the two of them sitting in a Cambridge pub and reflecting on the role of lipid sheets in separating the interior of the cell from the exterior milieu. This insight, they felt, was to cell function what the discovery of the double helix had been to genetics. Bangham had called his lipid structures “multilamellar smectic mesophases” or sometimes “Banghasomes”. It was Weissmann who proposed the more user-friendly term liposome',
    },
    {
        id: 4,
        image: Shot,
        h1: 'Now an emeritus professor at New York University School of Medicine',
        h2: 'Fruit and vegetables',
        p: 'Now an emeritus professor at New York University School of Medicine, Weissmann recalls the two of them sitting in a Cambridge pub and reflecting on the role of lipid sheets in separating the interior of the cell from the exterior milieu. This insight, they felt, was to cell function what the discovery of the double helix had been to genetics. Bangham had called his lipid structures “multilamellar smectic mesophases” or sometimes “Banghasomes”. It was Weissmann who proposed the more user-friendly term liposome',
    },
    {
        id: 5,
        image: Shot,
        h1: 'Now an emeritus professor at New York University School of Medicine',
        h2: 'Fruit and vegetables',
        p: 'Now an emeritus professor at New York University School of Medicine, Weissmann recalls the two of them sitting in a Cambridge pub and reflecting on the role of lipid sheets in separating the interior of the cell from the exterior milieu. This insight, they felt, was to cell function what the discovery of the double helix had been to genetics. Bangham had called his lipid structures “multilamellar smectic mesophases” or sometimes “Banghasomes”. It was Weissmann who proposed the more user-friendly term liposome',
    },
    {
        id: 6,
        image: Shot,
        h1: 'Now an emeritus professor at New York University School of Medicine',
        h2: 'Fruit and vegetables',
        p: 'Now an emeritus professor at New York University School of Medicine, Weissmann recalls the two of them sitting in a Cambridge pub and reflecting on the role of lipid sheets in separating the interior of the cell from the exterior milieu. This insight, they felt, was to cell function what the discovery of the double helix had been to genetics. Bangham had called his lipid structures “multilamellar smectic mesophases” or sometimes “Banghasomes”. It was Weissmann who proposed the more user-friendly term liposome',
    },
    {
        id: 7,
        image: Shot,
        h1: 'Now an emeritus professor at New York University School of Medicine',
        h2: 'Fruit and vegetables',
        p: 'Now an emeritus professor at New York University School of Medicine, Weissmann recalls the two of them sitting in a Cambridge pub and reflecting on the role of lipid sheets in separating the interior of the cell from the exterior milieu. This insight, they felt, was to cell function what the discovery of the double helix had been to genetics. Bangham had called his lipid structures “multilamellar smectic mesophases” or sometimes “Banghasomes”. It was Weissmann who proposed the more user-friendly term liposome',
    },
    {
        id: 8,
        image: Shot,
        h1: 'Now an emeritus professor at New York University School of Medicine',
        h2: 'Fruit and vegetables',
        p: 'Now an emeritus professor at New York University School of Medicine, Weissmann recalls the two of them sitting in a Cambridge pub and reflecting on the role of lipid sheets in separating the interior of the cell from the exterior milieu. This insight, they felt, was to cell function what the discovery of the double helix had been to genetics. Bangham had called his lipid structures “multilamellar smectic mesophases” or sometimes “Banghasomes”. It was Weissmann who proposed the more user-friendly term liposome',
    },
];
