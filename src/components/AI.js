import React, { useEffect } from 'react';

const AI = () => {
    useEffect(() => {
        // Initialize the chatbot after the component mounts
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            // Initialize the chatbot
            window.Chatbot.initFull({
                chatflowid: "74168cdd-c1b0-4c74-b815-f52bd8660b2d",
                apiHost: "https://fw.telaeris.com",
                
            });
        };

        // Cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <br></br>
            <br></br>
            <flowise-fullchatbot></flowise-fullchatbot>
        </div>
    );
};

export default AI;
// import React, { useEffect } from 'react';

// const AI = () => {
//     let observer;

//     useEffect(() => {
//         const initChatbot = () => {
//             console.log('Initializing chatbot...');
//             if (window.Chatbot && window.Chatbot.initFull) {
//                 console.log('Chatbot object found. Initializing...');
//                 window.Chatbot.initFull({
//                     chatflowid: "74168cdd-c1b0-4c74-b815-f52bd8660b2d",
//                     apiHost: "https://fw.telaeris.com",
//                     theme: {
//                         chatWindow: {
//                             welcomeMessage: "Hello! This is custom welcome message",
//                             backgroundColor: "#ffffff",
//                             height: 700,
//                             width: 400,
//                             fontSize: 16,
//                             poweredByTextColor: "#303235",
//                             botMessage: {
//                                 backgroundColor: "#f7f8ff",
//                                 textColor: "#303235",
//                                 showAvatar: true,
//                                 avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
//                             },
//                             userMessage: {
//                                 backgroundColor: "#3B81F6",
//                                 textColor: "#ffffff",
//                                 showAvatar: true,
//                                 avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
//                             },
//                             textInput: {
//                                 placeholder: "Type your question",
//                                 backgroundColor: "#ffffff",
//                                 textColor: "#303235",
//                                 sendButtonColor: "#3B81F6",
//                             }
//                         }
//                     }
//                 });
//             } else {
//                 console.error('Chatbot object or initFull method not found.');
//             }
//         };

//         const initChatbotWhenAvailable = () => {
//             console.log('Checking if <flowise-fullchatbot> element is available...');
//             if (document.querySelector('flowise-fullchatbot')) {
//                 console.log('<flowise-fullchatbot> element found. Initializing chatbot...');
//                 initChatbot();
//                 observer.disconnect(); // Disconnect observer once the element is found
//             }
//         };

//         initChatbotWhenAvailable();

//         observer = new MutationObserver(initChatbotWhenAvailable);
//         observer.observe(document.body, { childList: true, subtree: true });

//         return () => {
//             if (observer) {
//                 observer.disconnect();
//             }
//         };
//     }, []);

//     return (
//         <div>
//             <flowise-fullchatbot></flowise-fullchatbot>
//         </div>
//     );
// };

// export default AI;
