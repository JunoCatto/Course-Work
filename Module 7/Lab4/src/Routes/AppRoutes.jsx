import { Routes, Route } from "react-router";
import Homepage from "../pages/Homepage.jsx";
import DashboardPage from "../DashboardPage.jsx";
import AboutPage from "../pages/Aboutpage.jsx";
import PageNotFound from "../PageNotFound.jsx";
import Loginpage from "../pages/Loginpage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PostsPage, { Post, PostList } from "../pages/PostsPage.jsx";
import { DashboardMessages, DashboardTasks } from "../DashboardPage.jsx";
// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}
import BitcoinRates from "../BitcoinRates.jsx";

function AppRoutes(props) {
  return (
    <>
      <Routes>
        {/* index matches on default/home URL: / */}
        <Route index element={<Homepage {...props} />} />
        {/* nested routes, matches on /dash/messages etc */}
        <Route path="/login" element={<Loginpage {...props} />} />
        <Route path="dash" element={<DashboardPage {...props} />}>
          <Route path="messages" element={<DashboardMessages />} />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>
        <Route path="/about" element={<AboutPage {...props} />} />
        {/* special route to handle if none of the above match */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/btc" element={<BitcoinRates />} />

        <Route path="/posts" element={<PostsPage {...props} />}>
          <Route index element={<PostList />} />
          {/* dynamic param taken from route, stored in variable called id */}
          <Route path=":id" element={<Post />} />
        </Route>
        <Route
          path="dash"
          element={
            <ProtectedRoute>
              <DashboardPage {...props} />
            </ProtectedRoute>
          }
        >
          <Route path="messages" element={<DashboardMessages />} />
          <Route path="tasks" element={<DashboardTasks />} />
        </Route>
        {/* <Route path="login" element={<LoginForm />} /> */}
      </Routes>
    </>
  );
}
export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'
