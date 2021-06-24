# NeuralNetStudioExcel
An Excel Add-in to access the data curation and AI functionality of Neural Net Studio.

Add-in use .NET 5 as server side, React, Redux, Fluent UI on client side.  

1. Development process and local testing

1.1. Start Client app.

Open Terminal and run commands:

    Cd  “c:\ … \NeuralNetStudioExcel\NeuralNetStudioExcelAddin\ClientApp”
    npm run start

Or start from VS Code
- Open “NeuralNetStudioExcel\NeuralNetStudioExcelAddin\ClientApp” in VS code
- Go to Task Explorer and Start “start task”

This will start NodeJS local server and open client app in Excel.
It use manifest file from ClientApp folder. (https://localhost:3000/)

1.2. Start Server side project

- Go To Visual Studio solution and start Debug

This will Open Excel with server app connected to Node local server.
Now you can Debug server app and edit client app with hot reload support.
It use manifest file from Visual Studio project. (https://localhost:44317/)


2. Test UI
In index.ts file we have variable 
isUIDebug = true; 
For a test in Browser without Excel host. This may be helpful for UI tests and development.

1. Add-in Theme 
Add-in use MS FluentUI 8 Framework  https://developer.microsoft.com/ru-ru/fluentui#/controls/web
For theming, we use  ThemeProvider https://github.com/microsoft/fluentui/wiki/How-to-apply-theme-to-Fluent-UI-React-components
Theme-defined in Theme.ts file 
For easy edit theme possible use "Fluent UI Theme Designer" https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html
Also In taskpane.css - css for the add-in. And it can be used for replace Fluent UI styles

