# Loupe Agent for Web Applications

This document outlines the simplest way to get started using Loupe logging in a React web applications, using Visual Studio and ASP.NET Core.

If you have an existing ASP.NET Core application with a React client application, you can skip to step #5.

1. From the **File** menu select **New** to launch the new project screen.
2. Select **ASP.NET Core Web Application** and click **next**.
3. Enter your project name and location, and click **Create**.
4. From the **Create a new ASP.NET Coew web application** screen select **React.js** and click **Create**.
5. Install the server component for Loupe logging:
   1. Right mouse-click on the project name and select **Manage NuGet Packages...**
   2. On the **NuGet Package Manager** screen select **Browse**
   3. In the search, enter **Loupe.Agent.AspNetCore** and select that package from the search results.
   4. Click **Install** on the right, then accept the License Agreement when it shows (this is standard for the Microsoft packages).
6. Configure the server component for Loupe logging:
   1. Open **Startup.cs**
   2. In the <code>ConfigureServices</code> method, add the following line:

   <pre>   services.AddLoupe().AddClientLogging();</pre>

   3. In the <code>Configure</code> method, find the section that has <code>app.UseEndpoints</code>, and add the following line:

   <pre>   endpoints.MapLoupeClientLogger();</pre>

7. Install the Loupe client logging components:
   1. Right mouse-click on the **ClientApp** folder, and select **Open in Terminal**.
   2. From the Developer Powershell, type the following command and wait for the command to finish:

   <pre>   npm install @gibraltarsoftware/loupe-typescript</pre>

8. Configure the client components for Loupe logging:
   1. Create a module to instantiate the Loupe agent, but adding a file **LoupeService.js** to the **ClientApp/src** folder.
   2. Add the following to the new **LoupeService.js** file:

   <pre>
      import { LoupeAgent } from '@gibraltarsoftware/loupe-typescript';

      var loupe = new LoupeAgent(window, window.document);

      export default loupe;
   </pre>

   3. Open **ClientApp/src/App.js**
   4. Import the new module by adding the following line after the other <code>import</code> statements:

   <pre>   import loupe from "./LoupeService";</pre>

   5. Add a constructor to the <code>App</code>, which logs an initial message:

   <pre>
      constructor() {
         super();
         loupe.information(this.displayName,
            'Application Started', 'The application has started');
      }
   </pre>

9. Run the application. When it starts you will notice a log message being sent to the server. This message can be seen in the browser developer tools (F12) network tab, and in [Loupe Desktop](https://onloupe.com/local-logging/free-net-log-viewer) if you have it installed.