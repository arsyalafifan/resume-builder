import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import ContainerUserDashboard from "../pages/userDashboard/ContainerUserDashboard";
import ContainerCreateResume from "../pages/createResume/ContainerCreateResume";

const RouteConfiguration = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/user-dashboard" element={<ContainerUserDashboard />} />
                <Route path="/user-create-resume" element={<ContainerCreateResume />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfiguration;