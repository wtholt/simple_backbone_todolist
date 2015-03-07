CrudApp.Views.Edit = Backbone.View.extend({

  template: JST['todos/edit'],

  render: function() {
    $(this.el).html(this.template());
  },

});