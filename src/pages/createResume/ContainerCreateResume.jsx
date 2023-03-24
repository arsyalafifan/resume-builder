import React, { useState } from "react";
import CreateResume from "./CreateResume";

const validateName = (input, ev) => {
    const nameRegex = /^[A-Za-z., ]*$/.test(ev.target.value);
    if(ev.target.name === "name"){
        if(!nameRegex){
            return {
                validateStatus: 'success',
                errorMsg: null,
            }
        }
        return {
            validateStatus: 'error',
            errorMsg: 'The prime between 8 and 12 is 11!',
        };
    }
}

const ContainerCreateResume = () => {

    const [formData, setFormData] = useState({
        title_experience: 'Work Experiences',
        title_education: 'Education Level',
        title_organization: 'Organization Experiences',
        title_achievements: 'Project & Achievements',
        name: '',
        email: '',
        phone_number: '',
        experience1: '',
        experience_title1: '',
        experience_period_start1: '',
        experience_period_end1: '',
        experience_location1: '',
        experience_desc1: '',
        experience_title2: '',
        experience_period_start2: '',
        experience_period_end2: '',
        experience_location2: '',
        experience_desc2: '',
        experience_title3: '',
        experience_period_start3: '',
        experience_period_end3: '',
        experience_location3: '',
        experience_desc3: '',
        experience_title4: '',
        experience_period_start4: '',
        experience_period_end4: '',
        experience_location4: '',
        experience_desc4: '',
        experience_title5: '',
        experience_period_start5: '',
        experience_period_end5: '',
        experience_location5: '',
        experience_desc5: '',
        education1: '',
        education_title1: '',
        education_start1: '',
        education_end1: '',
        education_location1: '',
        education_desc1: '',
        education2: '',
        education_title2: '',
        education_start2: '',
        education_end2: '',
        education_location2: '',
        education_desc2: '',
        organization1: '',
        organization_title1: '',
        organization_start1: '',
        organization_end1: '',
        organization_location1: '',
        organization_desc1: '',
        organization2: '',
        organization_title2: '',
        organization_start2: '',
        organization_end2: '',
        organization_location2: '',
        organization_desc2: '',
        organization3: '',
        organization_title3: '',
        organization_start3: '',
        organization_end3: '',
        organization_location3: '',
        organization_desc3: '',
        soft_skills: '',
        hard_skills: '',
        achievements: '',
    });

    const handleChangeFormData = (ev) => {
        setFormData({
            ...formData, 
            [ev.target.id]: ev.target.value
        })
        console.log(formData);
    }

    return(
        <CreateResume handleChangeFormData={handleChangeFormData} data={formData} />
    )
}


export default ContainerCreateResume;