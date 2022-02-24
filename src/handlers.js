
const logout = (history) => {
    // const history = useHistory();

    localStorage.setItem('user',null);
    localStorage.setItem('salon',null);

    history.push('/login');
    return null;
}

export default logout;