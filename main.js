
window.watsonAssistantChatOptions = {
    integrationID: "136cffc4-6ba3-4096-a258-b642ba93a8ac", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "8d610c74-bc8b-49ef-891f-cf77bf23cc48", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
    };
setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});


// 

