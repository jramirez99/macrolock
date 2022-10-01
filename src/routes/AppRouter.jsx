import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Account, AdminSettings, AgentSettings, Dashboard, Home, InventoryManagement, Login, Support } from '../../pages';


export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="account" element={ <Account /> } />
                <Route path="admin-settings" element={ <AdminSettings /> } />
                <Route path="agent-settings" element={ <AgentSettings /> } />
                <Route path="dashboard" element={ <Dashboard /> } />
                <Route path="home" element={ <Home /> } />
                <Route path="inventory-management" element={ <InventoryManagement /> } />
                <Route path="login" element={ <Login /> } />
                <Route path="support" element={ <Support /> } />

                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};
