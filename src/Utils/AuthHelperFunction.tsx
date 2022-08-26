export const setAccessToken = (response: any) => {
    const accessToken = response?.data?.token;
    localStorage.setItem('token', accessToken);
};

export const getAccessToken = () => {
    const accessToken = localStorage.getItem('token');
    return accessToken;
};

export const getAppAdminUser = () => {
    const adminUserName = localStorage.getItem('appUser');
    return adminUserName;
};

export const setAppAdminUser = (response: any) => {
    const adminUserName = response?.data?.userName;
    localStorage.setItem('appUser', adminUserName);
};

export const logOut = (navigate: any) => {
    localStorage.removeItem('token');
    localStorage.removeItem('appUser');
    localStorage.removeItem('roomOwner');
    navigate('/');
};

export const setProfileUser = (profileName: any) => {
    localStorage.setItem('roomOwner', profileName);
};
export const getProfileUser = () => {
    const profileName = localStorage.getItem('roomOwner');
    return profileName;
};
export const removeProfileUser = () => {
    localStorage.removeItem('roomOwner');
};
