import { useMemo } from "react";
// import { useSelector } from "react-redux";
/******************************************************************
 * IT IS USE TO CHECK WHEATHER THE LOGGED IN USER IS ADMIN OR NOT *
 ******************************************************************/

function useIsUser() {
//   const isUser = useSelector(
//     (state) => state.auth?.record?.userProfile?.userRoleID
//   );
    const isUser = JSON.parse(localStorage.getItem('user'))
  return useMemo(() => isUser, [isUser]);
  // return true;
}

export default useIsUser;