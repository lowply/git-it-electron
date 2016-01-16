module.exports = function menu (app, mainWindow) {
  var darwinMenu = [
    {
      label: 'Git-it',
      submenu: [
        {
          label: 'About Git-it',
          selector: 'orderFrontStandardAboutPanel:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          label: 'Hide Git-it',
          accelerator: 'Command+H',
          selector: 'hide:'
        },
        {
          label: 'Hide Others',
          accelerator: 'Command+Shift+H',
          selector: 'hideOtherApplications:'
        },
        {
          label: 'Show All',
          selector: 'unhideAllApplications:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit',
          accelerator: 'Command+Q',
          click: function () { app.quit() }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'Command+Z',
          selector: 'undo:'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+Command+Z',
          selector: 'redo:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Cut',
          accelerator: 'Command+X',
          selector: 'cut:'
        },
        {
          label: 'Copy',
          accelerator: 'Command+C',
          selector: 'copy:'
        },
        {
          label: 'Paste',
          accelerator: 'Command+V',
          selector: 'paste:'
        },
        {
          label: 'Select All',
          accelerator: 'Command+A',
          selector: 'selectAll:'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'Command+R',
          click: function () { mainWindow.restart() }
        },
        {
          label: 'Toggle Full Screen',
          accelerator: 'Ctrl+Command+F',
          click: function () { mainWindow.setFullScreen(!mainWindow.isFullScreen()) }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: 'Alt+Command+I',
          click: function () { mainWindow.toggleDevTools() }
        }
      ]
    },
    {
      label: 'Window',
      submenu: [
        {
          label: 'Home',
          click: function (item, focusedWindow) {
            if (focusedWindow)
              // TODO Add logic for language specific pages
              var path = require('path').join('file://', __dirname, '../index.html')
              focusedWindow.loadURL(path)
          }
        },
        {
          label: 'Dictionary',
          click: function (item, focusedWindow) {
            if (focusedWindow)
              var path = require('path').join('file://', __dirname, '../pages/dictionary.html')
              focusedWindow.loadURL(path)
          }
        },
        {
          label: 'Resources',
          click: function (item, focusedWindow) {
            if (focusedWindow)
              var path = require('path').join('file://', __dirname, '../pages/resources.html')
              focusedWindow.loadURL(path)
          }
        },
        {
          label: 'About App',
          click: function (item, focusedWindow) {
            if (focusedWindow)
              var path = require('path').join('file://', __dirname, '../pages/about.html')
              focusedWindow.loadURL(path)
          }
        },
        {
          label: 'Open Issue',
          click: function() { require('electron').shell.openExternal('https://github.com/jlord/git-it-electron/issues/new') }
        },
        {
          type: 'separator'
        },
        {
          label: 'Minimize',
          accelerator: 'Command+M',
          selector: 'performMiniaturize:'
        },
        {
          label: 'Close',
          accelerator: 'Command+W',
          selector: 'performClose:'
        },
        {
          type: 'separator'
        },
        {
          label: 'Bring All to Front',
          selector: 'arrangeInFront:'
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'Repository',
          click: function () { require('shell').openExternal('http://github.com/jlord/git-it-electron') }
        }
      ]
    }
  ]
  return darwinMenu
}
