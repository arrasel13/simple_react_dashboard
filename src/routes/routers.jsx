import { Route, Routes } from "react-router";
import MainLayout from "../layouts/mainlayout";
import Home from "../components/pages/home/home";
import TaskLists from "../components/pages/tasklists/tasklists";
import AllUsers from "../components/pages/users/allusers";
import WorkUpdate from "../components/pages/workupdate/workupdate";
import WorkReport from "../components/pages/workreport/workreport";
import Profile from "../components/pages/profile/profile";
import SignIn from "../components/pages/authentication/signin";
import SupportReport from "../components/pages/workreport/supportReport";
import ErrorNotFound from "../components/pages/errorpage/404";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskLists />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/report" element={<SupportReport />} />
          {/* <Route path="/report" element={<WorkReport />} /> */}
          <Route path="/workUpdate" element={<WorkUpdate />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </>
  );
};

export default Routers;
