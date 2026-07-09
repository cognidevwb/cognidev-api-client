// Bumps the patch version in package.json — a tiny, real diff for each PR.
const fs = require("fs");
const p = "package.json";
const pkg = JSON.parse(fs.readFileSync(p, "utf8"));
const [maj, min, pat] = (pkg.version || "0.1.0").split(".").map(Number);
pkg.version = `${maj}.${min}.${(pat || 0) + 1}`;
fs.writeFileSync(p, JSON.stringify(pkg, null, 2) + "\n");
console.log("bumped to", pkg.version);
