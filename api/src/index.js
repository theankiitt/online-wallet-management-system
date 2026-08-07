import app from "./app.js";
import dbConnection from "./config/db.config.js";
import env from "./config/env.config.js";

(async () => {
    try {
        await dbConnection();
        app.listen(env.port, () => {
            console.log(`Server running on port ${env.port}`);
        });

    } catch (e) {
        console.error("Failed to connect:", e.message);
        process.exit(1);
    }
})();