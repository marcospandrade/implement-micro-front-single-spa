import { registerApplication, start } from 'single-spa';
import apps from './applications.json';

// const registerAllApps = new Promise((resolve, reject) => {
apps.applications.map(app =>
    registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact
            ? location => location.pathname === app.activeWhen
            : [app.activeWhen]
    })
);
// resolve('Sucess');
// }).finally(() => {
start({
    urlRerouteOnly: true
});
// });
