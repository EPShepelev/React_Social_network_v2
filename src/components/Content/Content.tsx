import { Routes, Route } from "react-router-dom";

import { NoPage } from '../NoPage/NoPage'
import { Profile } from '../Profile/Profile'
import { Messages } from '../Messages/Messages'
import { Users } from '../Users/Users'

export const Content: React.FC = () => {
  return (
    <div>
      <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/users" element={<Users />} />
      <Route path="/news" element={<NoPage />} />
      <Route path="/music" element={<NoPage />} />
      <Route path="/settings" element={<NoPage />} />
      </Routes>
    </div>
  );
}