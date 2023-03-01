module.exports = {
    url: process.env.URL || "http://localhost:8080",
    name: "Rewatch",

    twitterHandle: "@GoRewatch",
    twitterLink: "https://twitter.com/GoRewatch",
    githubLink: "https://github.com/rewatchtv",
    linkedinLink: "https://www.linkedin.com/company/rewatch/",

    demoLink: "/request-demo/",
    demoText: "Get a demo",

    loginLink: "https://rewatch.com/login/",
    loginText: "Login",

    // Current year
    currentYear() {
        const today = new Date();
        return today.getFullYear();
    }
};