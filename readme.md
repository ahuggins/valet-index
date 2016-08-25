# Laravel Valet Index - Electron App

Listened to Full Stack Radio with Jessica Lord discuss Electron and how you can build desktop apps with JS, HTML and CSS. Many ideas sparked in my mind, but I thought a listing of sites ran by Valet would be a quick little app to build.

I didn't use any JS framework, other than the parts Electron provides...but I feel like Vue components (or any components) would be a good place to begin improvements.

#### To Do
1. Use Vue and all it's goodness, to improve the basic code I threw together.
2. Some sort of watching feature so that if the /.valet/config.json changes, the app should update and list any new sites added.
    1. Though really, this watcher wouldn't be on the config.json, since that would only update if a new folder was parked.
    2. So maybe a refresh button, that would update with a click.
3. Another cool feature, would be the ability to add a new site from within the app.
    1. Prompt user for sitename
    2. This would require composer to be installed.
    3. Need to know where to install...maybe a settings panel
    4. Allow for choice of framework?
4. Settings panel
    1. for things like `~/Sites` location (or wherever) in order to install new installs.
    2. Editor/IDE of choice
5. Optional click to open in Text Editor/IDE of choice
    1. Currently click opens in browser, but would be nice to have a link that opened the project in Sublime or PHPStorm.