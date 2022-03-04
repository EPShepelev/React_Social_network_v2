import { Routes, Route } from "react-router-dom";

import { NoPage } from '../NoPage/NoPage'
import { Profile } from '../Profile/Profile'
import { Dialogs } from '../Dialogs/Dialogs'
import { Users } from '../Users/Users'

export const Content: React.FC = () => {
  return (
    <div>
      <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/dialogs" element={<Dialogs />} />
      <Route path="/users" element={<Users />} />
      <Route path="/news" element={<NoPage />} />
      <Route path="/music" element={<NoPage />} />
      <Route path="/settings" element={<NoPage />} />
      </Routes>
    </div>
  );
}