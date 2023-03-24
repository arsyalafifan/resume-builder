import React, { useState, useEffect } from 'react';
// import axiosInstance from '../../config/AxiosInstance';
import { client } from '../../config/api.js';
import UserDashboard from './UserDashboard';

const ContainerUserDashboard = () => {

    const [resume, setResume] = useState([]);

    const resumeData = async () => {
        const response = await client.get('/');
        return response.data.resumeBuilder_resume;
    }

    useEffect(() => {
        resumeData()
        .then(res => {
            console.log(res)
            setResume(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    //console.log(resumeData);

    return(
        <UserDashboard resume={resume} />
    )
}

export default ContainerUserDashboard;