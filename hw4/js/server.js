function sendNotification(msg) {
    /*
    var headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic NjA0ZTdiMTUtN2RiNi00MzRkLThhNzUtMjFmNmE4ZGMwYjRj'
    };

    var options = {
        host: 'onesignal.com',
        port: 443,
        path: '/api/v1/notifications',
        method: 'POST',
        headers: headers
    };
    */

    var req = new XMLHttpRequest();
    req.open('POST', 'https://onesignal.com/api/v1/notifications', true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Authorization',
        'Basic NjA0ZTdiMTUtN2RiNi00MzRkLThhNzUtMjFmNmE4ZGMwYjRj');

    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            console.log(req.response);
        }
    }

    var message = {
        app_id: '8f5de3fb-7578-4e0b-83e2-984979ad8b6d',
        contents: {'en': msg},
        include_player_ids: [oneSignalId]
    };

    console.log('SENDING msg:');
    console.log(message);

    req.send(JSON.stringify(message));
}
