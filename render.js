const { renderPage, renderSite } = require('@geooot/soul-patch')
// import { renderPage, renderSite } from '@geooot/soul-patch';


// interface SiteFields {
//     pages: PageFields[];
//     staticFolders?: {
//         from: string; // "webflow/js/"
//         to: string; // "public/js/"
//     }[];
//     props?: {
//         [index: string]: string;
//     };
// }
// interface PageFields {
//     input?: string;
//     inputFile?: string; // ex: "src/somepage.html"
//     route?: string;
//     outputFile?: string; // ex: "public/somepage.html"
//     props?: {
//         [index: string]: string;
//     };
// }

const site = {
    pages:[
    ],
    props: {
        siteName: "TAMUDatathon"
    }
}

renderSite(site).then(() => {
    console.log("rendered site sucessfully")
}).catch(e => {
    console.log("Failed to render site")
    console.error(e);
    process.exit(-1);
})
