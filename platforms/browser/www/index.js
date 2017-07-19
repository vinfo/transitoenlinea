document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    var ref = cordova.InAppBrowser.open('http://ciaeducon.com/transitoenlinea/index.php', '_self', 'location=no,zoom=no,enableviewportscale=yes');
}