/**
 * Created by saipuck on 7/14/14.
 */

function route( handle, pathname, response ) {
  console.log( "About to route a request for " + pathname );

  if( typeof handle[ pathname ] === 'function' ) { // if pathname is one we've defined
    return handle[ pathname ]( response );  // call that fn!
  } else {
    response.writeHead( 404, { 'Content-Type': 'text/plain'});
    response.write( "No request handler found for " + pathname );
    response.end();
  }
}

exports.route = route;