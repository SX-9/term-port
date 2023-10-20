if (location.host.indexOf("localhost") < 0 && location.protocol.toLowerCase() !== "https:") {
    const url = `https://${location.host}`;
    location.replace(url);
}

import "./color.js";
import "./shell.js";
