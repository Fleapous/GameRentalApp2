// Admin.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import { GameAdmin } from "./GameAdmin/GameAdmin";

const Admin = () => {
    return (
        <AdminLayout>
            <Routes>
                <Route path="GameAdmin" element={<GameAdmin />} />
            </Routes>
        </AdminLayout>
    );
};

export default Admin;
