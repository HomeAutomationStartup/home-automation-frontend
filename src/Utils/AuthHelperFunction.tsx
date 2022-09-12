export const setAccessToken = (response: any) => {
    const accessToken = response?.data?.token;
    localStorage.setItem('token', accessToken);
};

export const getAccessToken = () => {
    const accessToken = localStorage.getItem('token');
    return accessToken;
};

export const removeAccessToken = () => {
    localStorage.removeItem('token');
};

export const getAppAdminUser = () => {
    const adminUserName = localStorage.getItem('appUser');
    return adminUserName;
};

export const setAppAdminUser = (response: any) => {
    const adminUserName = response?.data?.userName;
    localStorage.setItem('appUser', adminUserName);
};

export const removeAppAdminUser = () => {
    localStorage.removeItem('appUser');
};

export const setProfileId = (profileId: any) => {
    localStorage.setItem('profileId', profileId);
};

export const getProfileId = () => {
    const profileName = localStorage.getItem('profileId');
    return profileName;
};

export const removeProfileId = () => {
    localStorage.removeItem('profileId');
};

export const openProfileOnClick = (profileId: any, navigate: any) => {
    removeProfileId();
    setProfileId(profileId);
    navigate('/app');
};

export const logOut = (navigate: any) => {
    removeAccessToken();
    removeAppAdminUser();
    removeProfileId();
    navigate('/');
};
