
async function fetchProfileData() {
    const url = 'https://github.com/Gonsallez1/Site1/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
