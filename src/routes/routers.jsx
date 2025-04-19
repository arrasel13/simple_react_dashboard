import { Route, Routes } from "react-router";
import MainLayout from "../layouts/mainlayout";
import Home from "../components/pages/home/home";
import TaskLists from "../components/pages/tasklists/tasklists";
import AllUsers from "../components/pages/users/allusers";
import WorkUpdate from "../components/pages/workupdate/workupdate";
import WorkReport from "../components/pages/workreport/workreport";
import MainLayoutTest from "../layouts/mainlayouttest";
import Profile from "../components/pages/profile/profile";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskLists />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workupdate" element={<WorkUpdate />} />
          <Route path="/report" element={<WorkReport />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
