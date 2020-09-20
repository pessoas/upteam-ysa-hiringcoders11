import React, { useEffect } from 'react';


declare global {
    interface Window {
        kommunicate: any
    }
}

function Chat(){

    useEffect(() => {
        (function (_d: any, m: any) {
            var kommunicateSettings = { "appId": "b9e080f270d9861066abce62b78b8ead", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    });

    return (
        <>
        </>
    );

}



export default Chat