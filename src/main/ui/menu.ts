import { Menu, MenuItemConstructorOptions, shell } from 'electron'

export const makeMainMenu = () => {
  const template: MenuItemConstructorOptions[] = [
    {
      label: 'OrangeCats',
      submenu: [
        {
          label: 'About Orange Catssss',
          role: 'about',
          toolTip: 'aaassss'
        },
        {
          label: 'Quit Lo',
          role: 'quit'
        }
      ]
    },
    {
      label: 'help',
      submenu: [
        {
          label: '反馈',
          click () {
            shell.openExternal('https://www.baidu.com')
              .catch(e => console.log(e))
          }
        },
        {
          label: '首页'
        }
      ]
    }
  ]

  // darwin表示macOS，针对macOS的设置
  if (process.platform === 'darwin') {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  } else {
    // windows及linux系统
    Menu.setApplicationMenu(null)
  }
}
