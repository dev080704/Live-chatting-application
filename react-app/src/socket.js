import { io } from "socket.io-client";

const socket = io("http://localhost:3001"); // Update the port if your backend uses a different one

export default socket;