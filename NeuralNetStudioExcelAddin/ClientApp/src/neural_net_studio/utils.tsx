
// Helper function for treating errors
// export function errorHandler(error) {
//     // Always be sure to catch any accumulated errors that bubble up from the Excel.run execution
//     showNotification("Error", error);
//     console.log("Error: " + error);
//     if (error instanceof OfficeExtension.Error) {
//         console.log("Debug info: " + JSON.stringify(error.debugInfo));
//     }
// }

// Helper function for displaying notifications
// export function showNotification(header, content) {
//     let element = document.querySelector('.MessageBanner');
//     let messageBanner = new components.MessageBanner(element);
//     document.querySelector("#notification-header").textContent = header ;
//     document.querySelector("#notification-body").textContent = content;
//     // $("#notification-header").text(header);
//     // $("#notification-body").text(content);
//     messageBanner.showBanner();
//     messageBanner.toggleExpansion();
// }