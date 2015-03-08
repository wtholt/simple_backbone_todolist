CrudApp.Models.Todo = Backbone.Model.extend({
  url: 'api/tasks',
  defaults: function() {
    return {
      name: 'name',
    };
  },

  initialize: function() {
    console.log('model initialized');

  },

  toJSON: function() {
    return {task: this.attributes};
  }
});
