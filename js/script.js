if (location.protocol !== "https" && !location.hostname.startsWith('localhost')) {
    location.protocol = "https";
    location.reload();
}

import "./color.js";
import "./shell.js";