function route(handle, pathname, response) {
    // (typeof handle[pathname] === 'function')
    if (handle.hasOwnProperty(pathname)) {
      console.log("A punto de rutear una peticion para " + pathname);
      handle[pathname](response);
    } else {
      console.log("No hay manipulador de peticion para " + pathname);
      response.writeHead(404, {"Content-Type": "text/html"});
      response.write("404 No Encontrado");
      response.end();
   }
  }
  
  exports.route = route;