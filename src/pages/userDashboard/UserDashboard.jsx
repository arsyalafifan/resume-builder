import React from 'react';

const UserDashboard = ({
    resume
}) => {
    //console.log(resume)
    return(
        <div>
            {
                resume?.map(resume => 
                    {
                        return (
                            <div>{resume.name}</div>
                        )
                    }
                )
            }
        </div>
    )
}

export default UserDashboard;