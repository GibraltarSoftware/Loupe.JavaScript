# Loupe Agent for Web Applications

This document outlines the simplest way to get started using Loupe logging in an Angular web applications, using Visual Studio and ASP.NET Core.

If you have an existing ASP.NET Core application with an Angular client application, you can skip to step #5.

1. From the **File** menu select **New** to launch the new project screen.
2. Select **ASP.NET Core Web Application** and click **next**.
3. Enter your project name and location, and click **Create**.
4. From the **Create a new ASP.NET Coew web application** screen select **Angular** and click **Create**.
5. Install the server component for Loupe logging:
   1. Right mouse-click on the project name and select **Manage NuGet Packages...**
   2. On the **NuGet Package Manager** screen select **Browse**
   3. In the search, enter **Loupe.Agent.AspNetCore** and select that package from the search results.
   4. Click **Install** on the right, then accept the License Agreement when it shows (this is standard for the Microsoft packages).
6. Configure the server component for Loupe logging:
   1. Open **Startup.cs**
   2. In the <code>ConfigureServices</code> method, add the following line:

<pre>      services.AddLoupe().AddClientLogging();</pre>

   3. In the <code>Configure</code> method, find the section that has <code>app.UseEndpoints</code>, and add the following line:

<pre>      endpoints.MapLoupeClientLogger();</pre>

7. Install the Loupe client logging components:
   1. Right mouse-click on the **ClientApp** folder, and select **Open in Terminal**.
   2. From the Developer Powershell, type the following command and wait for the command to finish:

<pre>       npm install @gibraltarsoftware/loupe-angular</pre>

8. Configure the client components for Loupe logging:
   1. Open **ClientApp/src/app/app.component.ts**
   2. Import the Loupe logging service by adding the following line after the other <code>import</code> statements:

<pre>      import { LoupeService } from '@gibraltarsoftware/loupe-angular';</pre>

   3. Add a constructor to the <code>AppComponent</code> that injects the service and logs an initial message:

<pre>
      constructor(private readonly loupe: LoupeService) {
         this.loupe.information(this.title,
            'Application Started', 'The application has started');
      }
</pre>

   You can use the same injection pattern in any component.

9. If you wish to utilise the automatic logging of uncaught errors, then you can use the Loupe error hander:
   1. Open **ClientApp/src/app/app.module.ts**
   2. Import the Loupe error handler by adding the following after the other imports:

<pre>
      import { LoupeErrorHandler } from '@gibraltarsoftware/loupe-angular';
</pre>

   3. If <code>ErrorHandler</code> doesn't exist in the <code>@angular/core</code> import, add it:

<pre>      import { NgModule, ErrorHandler } from '@angular/core';</pre>

   4. Add the following to the <code>providers</code> array:

<pre>      { provide: ErrorHandler, useClass: LoupeErrorHandler } </pre>

9. Run the application. When it starts you will notice a log message being sent to the server. This message can be seen in the browser developer tools (F12) network tab, and in [Loupe Desktop](https://onloupe.com/local-logging/free-net-log-viewer) if you have it installed. Any uncaught errors, such as navigation to missing routes, will automatically be logged to Loupe as an exception.
