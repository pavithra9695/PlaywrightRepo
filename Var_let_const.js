
const browserName = 'chrome';

function  getBrowserName () {
    if (browserName === "chrome"){
        let browserName = "firefox"
        console.log("inside the block the browser is"+browserName)

    }
console.log("outside the block the browser is" +browserName)
}

 getBrowserName()