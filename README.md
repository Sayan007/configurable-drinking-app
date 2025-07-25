<h1 align="left">Configurable Drinking App By Sayan</h1>
<h4 align="left">This has been developed in a WLA (White-Label App) approach where it can be branded by a <code>settings.json</code> file. This file is an instruction file which tells the app what/where/how to populate the UI elements. It has been deployed and find it <a href="https://sayan007.github.io/configurable-drinking-app/" target="_blank">here</a></h4>
<h3 align="left">Technologies used to implement the app - </h3>
<ul>
  <li>Angular v20</li>
  <li>TypeScript</li>
  <li>JavaScript</li>
  <li>Material UI</li>
  <li>HTML</li>
  <li>CSS</li>
</ul>

<p align="left">
  The <code>settings.json</code> file looks as follows. It has been described how the configuration is managed.
  Location of the file <code>src/settings/settings.prod.ts</code> for <strong>production</strong> and <code>src/settings/settings.dev.ts</code> for <strong>development</strong>
</p>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto">
  <pre>
    {
      api: String, //The API Url
      theme: {
        primaryColor: String, //Primary Color code. RGB, HEXCODE or NAME. ex. "black"
        secondaryColor: String, //Secondary Color code. RGB, HEXCODE or NAME. ex. "gold"
        thirdColor: String, //Accent Color code. RGB, HEXCODE or NAME. ex. "darkblue"
        titleColor: String, //Colour code for the title. RGB, HEXCODE or NAME. ex. "ffc200"
      },
      siteSettings: {
        logoUrl: String, //Logo URL. It can be a relative URL or an external URL. ex. "assets/images/logo.svg"
        logoWidth: String, //Width of the logo. ex. "64px"
        title: String, //Title of name of the app. Which should be visible on header and tab-title. ex. "The Tippler's Guide"
        dateFormat: String, //Date format, which should be followed throughout the app. ex. "dd-MMM-yyyy"
        currency: String, //Currency for the app. ex. "SEK"
        companyName: String, //Company name to use wherever it is required. ex. "Eliq"
        copyrightYear: String, //Copyright year. If it is not mentioned, it will fetch the current year. ex. "2025"
        copyrightText: String, //Copyright text for the app. ex. "All rights reserved. Copyright year "
        fontFamily: String, //Font-Family for the app. ex. "didot"
        copyrightTextColor: String, //Copyright text color. ex. "black"
        search: Boolean, //Enable or disable search functionality. Default value is false 
        typeOfDetailsPage: String, //How the details of the product should be visible. '_blank' for new page, 'dialog' for popup
      }
    }
  </pre>
</div>
<h3 align="left">🛠️ Setup process for local environment </h3>
<p>Make sure latest <strong>Node LTS Version (22.x)</strong> is installed in your system</p>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto">
  <p dir="auto">Install Angular CLI</p>
  <pre>npm install -g @angular/cli</pre>
  <p dir="auto">Clone the repository</p>
  <pre>git clone https://github.com/Sayan007/configurable-drinking-app.git</pre>
  <p dir="auto">Open command prompt and navigate to the project directory</p>
  <pre>cd configurable-drinking-app</pre>
  <p dir="auto">Install dependencies</p>
  <pre>npm install</pre>
  <p dir="auto">To serve it locally, execute</p>
  <pre>ng serve</pre>
</div>
<h3 align="left">🛠️ Build process for production environment </h3>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto">
  <p dir="auto">To build the application for production</p>
  <pre>ng build</pre>
  <p dir="auto">If you want to build for your website. Use the url as <code>--base-href</code></p>
  <pre>ng build --base-href "https://sayan007.github.io/configurable-drinking-app"</pre>
</div>
<h3 align="left">🚀 Deployment process to GitHub Pages </h3>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto">
  <p dir="auto">I am using <strong>angular-cli-ghpages</strong> to deploy it. Angular suggests using this for deployment. For this application, it has already been installed and you can find the entry in <strong>package.json</strong>. But if it is not available in your application, then run the following command.</p>
  <pre>npm add angular-cli-ghpages</pre>
  <p dir="auto">And if it is already installed, then run the following command to publish it</p>
  <pre>npx angular-cli-ghpages --dir=dist/configurable-drinking-app/browser</pre>
</div>
<h3 align="left">My Code Base</h3>
<p dir="auto">
  Git Repo URL: <a href="https://github.com/Sayan007/configurable-drinking-app">Configurable Drinking App</a>
</p>
<p dir="auto">
  GitHub Pages Deployment URL: <a href="https://sayan007.github.io/configurable-drinking-app/">The Tippler's Guide</a>
</p>
<h3 align="left">🛠️ My Configurable Settings</h3>
<div class="highlight highlight-source-shell notranslate position-relative overflow-auto">
  <pre>
    {
      api: "https://www.thecocktaildb.com/api/json/v1/1/",
      theme: {
        primaryColor: "black",
        secondaryColor: "gold",
        thirdColor: "darkblue",
        titleColor: "#ffc200"
      },
      siteSettings: {
        logoUrl: "assets/images/logo.svg",
        logoWidth: "64px",
        title: "The Tippler's Guide",
        dateFormat: "dd-MMM-yyyy",
        currency: "SEK",
        companyName: "Sayan",
        copyrightYear: "2025",
        copyrightText: "All rights reserved by {companyName}. Copyright year ",
        fontFamily: "Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif",
        copyrightTextColor: "black",
        search: true,
        typeOfDetailsPage: 'dialog'
      }
    }
  </pre>
</div>
<h3 align="left">My Approach. Main requirement was - Configurable Approach <i><u>(What, Where, How)</u></i> </h3>
<p dir="auto">
  <ul>
    <li>I used module-based structure(means <code>standalone=false</code>) to achieve lazy-loading.</li>
    <li>Logo, Title, Page Colour, Accent Colour, Footer Note are configurable. It checks <strong><i>What</i></strong></li>
    <li>As I didn't need any home page, I redirected my home page to drink-list module.</li>
    <li>Extra functionalities: Search, responsive design</li>
    <li>Here, search functionality is configurable. It checks <strong><i>What</i></strong> again.</li>
    <li>I have created a drink-details module to show details of the drink.</li>
    <li>This page has been configured in two ways. "Popup" or "Redirect"</li>
    <li>Here, "Popup" and "Redirect" are configured by <code>typeOfDetailsPage: 'dialog'</code> and <code>typeOfDetailsPage: '_blank'</code> respectively. It checks <strong><i>Where and How</i></strong></li>
    <li>Extra functionalities: Dynamic translations in details page.</li>
  </ul>
</p>
