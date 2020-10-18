/** 
*Jellyfin App
* Implementing Jellyfin App
*/
var JellyfinApp = JellyfinApp || {};  //Define Jellyfin App namespace.
/**
*Constructor UNAS App
*/
JellyfinApp.App = function () {
    this.id = 'Jellyfin';
    this.name = 'Jellyfin';
    this.version = '0.0.1';
    this.active = false;
    this.menuIcon = '/apps/jellyfin/images/logo.png';
    this.shortcutIcon = '/apps/jellyfin/images/logo.png';
    var self = this;
    this.JellyfinAppWindow = function () {
    	if(UNAS.CheckAppState('Jellyfin')){
    		return false;
    	}
    	self.window=new MUI.Window({
            id: 'JellyfinAppWindow',
            title: UNAS._('Jellyfin'),
            icon: '/apps/jellyfin/images/logo_small.png',
            loadMethod: 'xhr',
            width: 750,
            height: 480,
            maximizable: false,
            resizable: true,
            scrollbars: false,
            resizeLimit: { 'x': [650, 1200], 'y': [450, 900] },
            contentURL: '/apps/jellyfin/jellyfin.html',
            // require: {  css: ['/apps/jellyfin/css/jellyfin.css'] },
            onBeforeBuild: function(){UNAS.SetAppOpenedWindow("Jellyfin",'JellyfinAppWindow')}
     	});
    };
    this.JellyfinUninstall = function (){
    	UNAS.RemoveDesktopShortcut('Jellyfin');
    	UNAS.RemoveMenu('Jellyfin');
    	//UNAS.RemoveAppFromGroups('Jellyfin', 'Help');
    	UNAS.RemoveAppFromGroups('Jellyfin', 'ControlPanel');
    	UNAS.RemoveAppFromApps('Jellyfin');
    };
    new UNAS.Menu('UNAS_App_Internet_Menu', this.name, this.menuIcon, 'Jellyfin', '', this.JellyfinAppWindow);
    new UNAS.DesktopShortcut(this.name, this.shortcutIcon, 'Jellyfin', this.JellyfinAppWindow);
    //new UNAS.RegisterToAppGroup(this.name, 'ControlPanel', {'Type' : 'Internet', 'Laction' : 3, "Icon": this.shortcutIcon, "Url": this.entryUrl},{});
    //new UNAS.RegisterToAppGroup(this.name, 'Help', {'Type' : 'Internet', 'Laction' : 3, "Icon": this.shortcutIcon, "Url": this.entryHelpUrl},{});
    var OnChangeLanguage = function (e) {
    	UNAS.SetMenuTitle('Jellyfin', UNAS._('Jellyfin')); //translate menu
        UNAS.SetShortcutTitle('Jellyfin', UNAS._('Jellyfin'));
        if (typeof self.window !== 'undefined') {
        	UNAS.SetWindowTitle('JellyfinAppWindow', UNAS._('Jellyfin'));
        }
    };
    UNAS.LoadTranslation('/apps/jellyfin/languages/Translation', OnChangeLanguage);
    UNAS.Event.addEvent('ChangeLanguage', OnChangeLanguage);
    UNAS.CreateApp(this.name, this.shortcutIcon, this.JellyfinAppWindow, this.JellyfinUninstall);
};

new JellyfinApp.App();
