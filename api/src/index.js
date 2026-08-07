import app from "./app.js";
import dbConnection from "./config/db.config.js";

(async () => {
    try {
        await dbConnection();

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });

    } catch (e) {
        console.error("Failed to connect:", e.message);
        process.exit(1);
    }
})();