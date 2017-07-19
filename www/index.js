document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var ref = cordova.InAppBrowser.open('http://ciaeducon.com/transitoenlinea/index.php', '_self', 'location=no,zoom=no,enableviewportscale=yes');
    checkConnection();
	getDeviceProperty();
}
function getDeviceProperty() {
    console.log("getDeviceProperty");
    var deviceOS = device.platform;  //fetch the device operating system
    var deviceOSVersion = device.version;  //fetch the device OS version
    var uuid = device.uuid;
    localStorage.setItem("OS", deviceOS);
    localStorage.setItem("UUID", uuid);
    console.log("Plataforma registrada " + device.platform);
}
function checkConnection() {
    console.log("checkConnection");
    var state = true;
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';
    
    if (states[networkState] == 'No network connection') {
            alert('Problemas de conectividad a Internet!');
            state = false;
    }
    return state;
}
