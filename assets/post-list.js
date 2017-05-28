var app = {
  init: function() {
    // put all your "on load" code here, e.g.
    app.model.init();
    app.view.init();
    app.controller.init();
  },
  model: {
    init: function() {}
  },
  view: {
    init: function() {
      app.view.resize();},
    render: function(event) {
      app.view.resize();
    },
    resize: function() {
      var num_posts = document.querySelectorAll('.post-list .post').length;
      var post_list = document.getElementsByClassName('post-list')[0];
    //   var window_width = document.documentElement.clientWidth;
      var num_columns = Math.floor(post_list.offsetWidth / 370);
      var height = Math.floor(num_posts / num_columns) * 500;
      post_list.style.height = String(height) + 'px';
    }
  },
  controller: {
    init: function() {
      app.controller.listeners();
    },
    listeners: function() {
      window.addEventListener('resize', function(){
        app.view.render('event');
      });
    }
  }
};

DOMReady(app.init());

function DOMReady(fn) {
  try {
    if (document.readyState !== 'loading') {
        fn();
      } else {
        document.addEventListener('DOMContentLoaded', fn);
      }
    }
  catch(err) {
    document.body = 'Update your browser: ' + err.responseText;
  }
}