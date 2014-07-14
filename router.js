/**
 * Created by saipuck on 7/14/14.
 */

function route( handle, pathname, response, request ) {
  console.log( "About to route a request for " + pathname );

  if( typeof handle[ pathname ] === 'function' ) { // if pathname is one we've defined
    return handle[ pathname ]( response, request );  // call that fn!
  } else {
    console.log( "No request handler found for " + pathname );
    response.writeHead( 404, { 'Content-Type': 'text/html'});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;