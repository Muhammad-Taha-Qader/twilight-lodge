// lib/socket.js
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:4000"; 
const socket = io(SOCKET_SERVER_URL);

export default socket;
