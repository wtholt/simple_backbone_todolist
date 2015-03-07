window.CrudApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    CrudApp.Routers.Entries = new CrudApp.Routers.Todos();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  CrudApp.initialize();
});
