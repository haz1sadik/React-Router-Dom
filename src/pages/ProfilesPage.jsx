import React from 'react'
import { NavLink, Outlet } from 'react-router';

const ProfilesPage = () => {
    const profiles = [1, 2, 3, 4, 5];
  return (
    <>
        {
            profiles.map((profile) => (
                <NavLink key={profile} to={`/profiles/${profile}`} className={({isActive}) => {
                    return isActive ? 'text-blue-500' : '';
                }}>Profile {profile}</NavLink>
            ))
        }
        <Outlet/>
    </>
  )
}

export default ProfilesPage