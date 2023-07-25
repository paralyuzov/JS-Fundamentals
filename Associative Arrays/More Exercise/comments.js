function comments(data) {
    let users = {};
    let articles = {};

    for (let line of data) {
        if (line.includes("user")) {
            let user = line.split("user ")[1];
            users[user] = {}
        } else if (line.includes("article")) {
            let article = line.split("article ")[1];
            articles[article] = 0;

        } else if (line.includes("posts on")) {
            let tokens = line.split(" posts on ");
            let user = tokens.shift();
            let [article, comment] = tokens[0].split(": ");
            if (users.hasOwnProperty(user) && articles.hasOwnProperty(article)) {
                users[user][article] = comment
                articles[article] += 1;
            }
        }
    }
    let sortArticles = Object.entries(articles).sort((a, b) => b[1] - a[1]);
    let arr = Object.entries(users).sort((a, b) => a[0][0].localeCompare(b[0][0]));
    for (let [article, count] of sortArticles) {
        console.log(`Comments on ${article}`)
        for (let [user, info] of arr) {
            for (let [currArt, coment] of Object.entries(info)) {
                if (article == currArt) {
                    console.log(`--- From user ${user}: ${coment.split(", ").join(" - ")}`)
                }
            }
        }
    }

}
comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']
)