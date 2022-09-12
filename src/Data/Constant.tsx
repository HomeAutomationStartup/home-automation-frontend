import Shot from './../Assets/Shot.png';

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
    { roomType: 'Dining Room', value: 'DiningRoom', label: 'Dining Room' },
    { roomType: 'Drawing Room', value: 'DrawingRoom', label: 'Drawing Room' },
    { roomType: 'Hall', value: 'Hall', label: 'Hall' },
    { roomType: 'Kitchen', value: 'Kitchen', label: 'Kitchen' },
    { roomType: 'Living Room', value: 'LivingRoom', label: 'Living Room' },
    {
        roomType: 'Master Bedroom',
        value: 'MasterBedroom',
        label: 'Master Bedroom',
    },
    { roomType: 'Room', value: 'Room', label: 'Room' },
    { roomType: 'Store Room', value: 'StoreRoom', label: 'Store Room' },
    { roomType: 'Study Room', value: 'StudyRoom', label: 'Study Room' },
];
export const AccountConfigurationPicsType = [
    { picType: 'Woman', value: 'Woman', label: 'Woman' },
    { picType: 'Man', value: 'Man', label: 'Man' },
    { picType: 'Girl', value: 'Girl', label: 'Girl' },
    { picType: 'Boy', value: 'Boy', label: 'Boy' },
];
export const UserReview = [
    {
        id: '1',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English..The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        dateAndTime: '11:20AM - 29 Nov 2022',
        rating: 4,
    },
    {
        id: '2',
        subtitle:
            'Variants are pre-defined visual states that a component can be in. By giving a component.',
        title: 'Shubham kumar singh',
        description:
            'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English..The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
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
