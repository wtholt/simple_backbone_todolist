CrudApp.Views.TodosIndex = Backbone.View.extend({

  template: JST['todos/index'],

  events: {
    'submit #new_task': 'createTask',
    'click .editTask': 'edit',
    'click .deleteTask': 'destroy',
  },

  initialize: function(){
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.render, this);
    this.model.on('destroy', this.remove, this);

  },

  render: function() {
    $(this.el).html(this.template({tasks: this.collection}));
    return this
  },

  createTask: function(event) {
    event.preventDefault();
    this.collection.create({
      name: $('#new_task_name').val(),
      wait: true,
    });
  },

  destroy: function() {
    this.model.destroy();
  },

  edit: function() {
    event.preventDefault();
  },
  

});
