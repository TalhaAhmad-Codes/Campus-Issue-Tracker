import { useEffect, useState } from "react";
import { checkServerHealth } from "./services/healthService";

function App() {
    // ? State for checking server status
    const [serverStatus, setServerStatus] = useState("Checking server...");

    // ? Checking the server health
    useEffect(() => {
        const checkHealth = async () => {
            try {
                const data = await checkServerHealth();

                setServerStatus(data.message);
            } catch (error) {
                console.error("Server connection failed:", error);

                setServerStatus("Unable to connect to server.");
            }
        };

        checkHealth();
    }, []);

    // ? Getting server status HTML code
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">
                Campus Issue Tracker
            </h1>

            <p className="text-gray-600">
                {serverStatus}
            </p>
        </div>
    );
}

export default App;Thunder Client