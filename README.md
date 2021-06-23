# NeuralNetStudioExcel
An Excel Add-in to access the data curation and AI functionality of Neural Net Studio.

Add-in use .NET 5 as server side, React, Redux, Fluent UI on client side.  

1. Add-in Theme 
Add-in use MS FluentUI 8 Framework  https://developer.microsoft.com/ru-ru/fluentui#/controls/web
For theming, we use  ThemeProvider https://github.com/microsoft/fluentui/wiki/How-to-apply-theme-to-Fluent-UI-React-components
Theme-defined in Theme.ts file 
For easy edit theme possible use "Fluent UI Theme Designer" https://fluentuipr.z22.web.core.windows.net/heads/master/theming-designer/index.html
Also In taskpane.css - css for the add-in. And it can be used for replace Fluent UI styles

2. Test and dev
In index.ts file we have variable 
isUIDebug = true; 
For a test in Browser without Excel host. This may be helpful for UI tests and development.