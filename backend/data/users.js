import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Nicolas",
    email: "nicolas@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Iohjan",
    email: "iohjan@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
