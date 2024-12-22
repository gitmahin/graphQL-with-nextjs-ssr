import mongoose from "mongoose";

// Define the ConnectionObject type to track the connection status.
// `isConnected` is optional and will be used to track whether the database is connected or not.
type ConnectionObject = {
  isConnected?: number; // Represents the connection state: 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
};

// Create a connection object to store the connection status.
const connection: ConnectionObject = {};

// Async function to handle the database connection logic.
async function connDb(): Promise<void> {
  // Check if the connection is already established. If so, skip the connection process.
  if (connection.isConnected) {
    console.log("Database already connected");
    return; // Exit the function if already connected.
  }

  try {
    // Attempt to connect to MongoDB using the URI stored in the environment variable.
    const db = await mongoose.connect(process.env.MONGO_URI || "");

    // Store the connection status in the `connection` object.
    // `db.connections[0].readyState` gives the current connection state.
    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully");
  } catch (error) {
    // Log an error if the connection fails.
    console.log("Database connection failed", error);
    // Exit the process with an error code to indicate failure.
    process.exit(1);
  }
}

// Export the `connDb` function to be used in other parts of the application.
export default connDb;
