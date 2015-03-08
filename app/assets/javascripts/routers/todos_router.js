CrudApp.Routers.Todos = Backbone.Router.extend({
  routes: {
    '': 'index',
    'entries/:id': 'show',
    'edit': 'edit',
  },

  initialize: function() {
    this.collection = new CrudApp.Collections.Todos();
    this.collection.fetch({reset :true, add :true});
    this.model = new CrudApp.Models.Todo();
  },

  index: function() {
    var view = new CrudApp.Views.TodosIndex({collection: this.collection, model: this.model});
    $('#container').html(view.render().el);
  },

  show: function(id) {
  },

  edit: function() {
    var view = new CrudApp.Views.Edit();
    $('#container').html(view.render().el);
  },



});
