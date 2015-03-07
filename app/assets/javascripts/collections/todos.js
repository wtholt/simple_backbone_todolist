CrudApp.Collections.Todos = Backbone.Collection.extend({

  model: CrudApp.Models.Todo,
  url: '/api/tasks'

});
