'use strict';

module.exports = {
  'jquery': {
    exports: 'jQuery'
  },
  'bootstrap': {
    depends: {
      'jquery': 'jQuery'
    }
  },
  ngSortableDirective: {
    exports: 'ngSortableDirective',
    depends: {
      'angular': 'angular'
    }
  },
  'ui-bootstrap': {
    depends: {
      'angular': 'angular'
    }
  },
  md5: {
    exports: 'md5'
  },
  bootbox: {
    exports: 'bootbox'
  },
  codemirror: {
    exports: 'CodeMirror'
  },
  'ui-codemirror': {
    depends: {
      'angular': 'angular',
      'codemirror': 'CodeMirror'
    }
  },
  'ui-sortable': {
    depends: {
      'angular': 'angular'
    }
  },
  timeago: {
    depends: {
      jquery: 'jQuery'
    }
  }
};
