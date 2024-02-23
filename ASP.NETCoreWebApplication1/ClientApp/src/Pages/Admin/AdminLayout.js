// AdminLayout.js
import React from "react";
import { Container } from "reactstrap";
import AdminNavMenu from "./AdminNavMenu";

const AdminLayout = ({ children }) => {
    return (
        <div>
            <AdminNavMenu />
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default AdminLayout;
