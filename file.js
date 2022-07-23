const fs = require("fs");

const quote = "teamwork makes the dream work.";
fs.writeFile("./awesome.html", quote, (err) => {

    console.log("Completed writing !!!");

});

const quote2 = "Live more worry less ";

for (let i=1; i<=10; i++) {

    fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
        console.log("Completed writing !!!");

    });
}
