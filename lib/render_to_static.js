const { app } = require("../routes");
// const firebaseConfig = require("../firebase_template.json");
const fs = require("fs");
const ncp = require("ncp");
const fetch = require('node-fetch');
const rimraf = require("rimraf");
const path = require("path");

const rimrafPromise = (fp) => {
    return new Promise((res, rej) => {
        return rimraf(fp, (err) => {
            if (err) return rej(err);
            return res();
        })
    })
}

const ncpPromise = (src, dest) => {
    return new Promise((res, rej) => {
        return ncp(src, dest, (err) => {
            if (err) return rej(err);
            return res();
        })
    })
}

let routes = app._router.stack.filter(r => r.route && r.route.path).map(r => r.route.path)

console.log(routes);

const server = app.listen(3000, () => console.log(`listening on port 3000!`))

const main = async () => {
    await rimrafPromise("public");
    await fs.promises.mkdir("public");
    
    for (let route of routes) {
        let str = await fetch("http://localhost:3000" + route).then(res => res.text());
        await fs.promises.mkdir(path.join("public", route), { recursive: true });
        await fs.promises.writeFile(path.join("public", route, "index.html"), str);
    }
    await ncpPromise("static", "public/static");
}

main().then(() => {
    server.close();
    console.log("Finished!");
}).catch(e => {
    server.close();
    console.error(e);
})