export default function (server) {
  window.server = server;

  server.createList('feature', 10, 'withComments');
}
