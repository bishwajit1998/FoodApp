import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Bishwajit Adhikary",
    role: "frontend developer",
    state: "Goa",
  },
});

export default UserContext;
