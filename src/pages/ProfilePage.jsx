import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
    const params = useParams();
    return (
        <div>Profile Page {params.id}</div>
    )
}

export default ProfilePage