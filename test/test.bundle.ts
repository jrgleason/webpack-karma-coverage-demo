import "../src/polyfills";
import "../src/test";
import "./sanity.spec";

const componentsContext = require.context('../src/', true, /\.js$/);
componentsContext.keys().forEach(componentsContext);
