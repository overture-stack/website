var jellDeskSettings = {
    sourceType: 'web',
    source: window.location.href,
    position: { horizontal: 'right', vertical: 'bottom' },
    offset: { horizontal: '25px', vertical: '25px' },
    serviceUrl:'https://extsd.oicr.on.ca/plugins/servlet/widget?jellToken=1234567890123456789&projectKey=OV&serviceDeskId=7'
};


// var iframeStyle = 'border: none;background: transparent;z-index: 0;transform: translateZ(0px);opacity: 1; right: 0px;bottom: 0px; width: 357px;max-height: 600px; z-index: 999999;height: 500px; margin-left: 15px;margin-right: 15px;margin-top: 0px;transition-property: none;transition-timing-function: unset;transition-duration: 300ms;overflow: hidden; visibility: hidden;';

// window.addEventListener("message", function (e) {
//     var iframe = document.getElementById('jelldesk-embeddable-iframe');
//     var src = iframe ? iframe.src : "";
//     if (src.indexOf(e.origin) > - 1 && e.data !== "") {
//         try {
//             var data = JSON.parse(e.data);
//             iframeStyle = iframeStyle + 'width: ' + data.width + 'px;';
//             iframeStyle = iframeStyle + 'height: ' + data.height + 'px;';
//             iframeStyle = iframeStyle + 'visibility: visible;';
//             iframe.setAttribute('style', iframeStyle);
//         }
//         catch (e) {
//             console.log(e);
//         }

//     }
// });

// window.onload = function () {

//   window.jellDeskSettings = {
//     sourceType: 'web',
//     source: window.location.href,
//     position: { horizontal: 'right', vertical: 'bottom' },
//     offset: { horizontal: '50px', vertical: '50px' },
//     serviceUrl:'https://extsd.oicr.on.ca/plugins/servlet/widget?jellToken=1234567890123456789&projectKey=OV&serviceDeskId=7'
//   };


//     var iframe = document.createElement('iframe');
//     var position = window.jellDeskSettings.position;
//     var offset = window.jellDeskSettings.offset;
//     var postionHorizontal = 'right';
//     var postionVertical = 'bottom';
//     var offsetHorizontal = '10px';
//     var offsetVertical = '10px';
//     if (position) {
//         postionHorizontal = position.horizontal || 'right';
//         postionVertical = position.vertical || 'bottom';
//     }

//     if (offset) {
//         offsetHorizontal = offset.horizontal || '10px';
//         offsetVertical = offset.vertical || '10px';
//     }
//     var source = window.jellDeskSettings.source.split('?')[0];
//     var serviceUrl = window.jellDeskSettings.serviceUrl + '&source=' + source;
//     iframe.setAttribute('id', 'jelldesk-embeddable-iframe');
//     iframe.setAttribute('src', serviceUrl);
//     iframe.setAttribute('jellDeskSettings', window.jellDeskSettings);
//     iframe.setAttribute('scrolling', 'no');
//     iframe.setAttribute('allow', 'geolocation');
//     iframe.setAttribute('allowtransparency', 'true');

//     // Check browser if it is iOS Safari
//     var ua = window.navigator.userAgent;
//     var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
//     var webkit = !!ua.match(/WebKit/i);
//     var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

//     if (iOSSafari) {
//         iframeStyle += 'position: absolute;'
//         document.body.setAttribute('style', 'position: relative');
//     } else {
//         iframeStyle += 'position: fixed;'
//     }
//     iframeStyle += postionHorizontal + ': ' + offsetHorizontal + ';' + postionVertical + ': ' + offsetVertical + ';';
//     iframe.setAttribute('style', iframeStyle);
//     var div = document.createElement('div');
//     div.appendChild(iframe);
//     document.body.appendChild(div);
// };

// <script type='text/javascript' src='https://extsd.oicr.on.ca/s/5hcqv5/75007/b6b48b2829824b869586ac216d119363/1.1.4.1/_/download/resources/com.jelldesk.apps.embeddable-widget:widget-client-resources/embeddable-client.js'></script>
