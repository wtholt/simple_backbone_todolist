CrudApp.Views.TodosIndex = Backbone.View.extend({

  template: JST['todos/index'],

  events: {
    'submit #new_task': 'createTask',
    'click .editTask': 'edit',
  },

  initialize: function(){
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.render, this);

  },

  render: function() {
    $(this.el).html(this.template({tasks: this.collection}));
    return this
  },

  createTask: function(event) {
    event.preventDefault();
    this.collection.create({
      name: $('#new_task_name').val(),
    });
  },

  edit: function() {
    event.preventDefault();
  },
  

});
