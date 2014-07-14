/**
 * Created by saipuck on 7/14/14.
 */

var server = require( "./server" );
var router = require( "./router" );
var requestHandlers = require( "./requestHandlers" );

var handle = {};
handle[ "/" ]       = requrestHandlers.start;
handle[ "/start"  ] = requrestHandlers.start;
handle[ "/upload" ] = requrestHandlers.upload;

server.start( router.route, handle );