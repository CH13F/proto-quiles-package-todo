module.exports = function() {
    "use strict";
    
    // http://stackoverflow.com/a/6090287
    if (require.main === module) {
        main();
    }
    
    function main() {
        process.stdin.setEncoding("utf8");
        
        process.stdin.on("readable", function() {
            // TODO: Converters should also be routines...
            // TODO: Wrapper needs to determine to/from.
            // TODO: How do you ensure an entire message is read?
            // TODO: Determine what message is read and dispatch for each message type.
            var chunk = process.stdin.read();
            console.log(chunk);
            
            process.stdout.write(chunk);
        });
    }
}
