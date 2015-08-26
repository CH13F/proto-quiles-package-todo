module.exports = function() {
    "use strict";
    
    // http://stackoverflow.com/a/6090287
    if (require.main === module) {
        main();
    }
    
    function main() {
        process.stdin.setEncoding("utf8");
        
        process.stdin.on("readable", function() {
            var chunk = process.stdin.read();
            console.log(chunk);
            
            process.stdout.write({
               id: "123", 
            });
            
            process.stdout.write({
               id: "456", 
            });
        });
    }
}
    