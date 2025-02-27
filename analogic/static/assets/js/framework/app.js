/* global app, jQuery, Loader, QB, Render, Utils */

'use strict';

const Doc = $(document), El = {body: $('body')}, PageState = {current: '', previous: ''},
    Extensions = {
        authenticationProviders: [],
        writeExecutors: []
    },
    Widgets = {infoData: {}},
    Api = {};

let EventMap, Repository, WidgetConfig;

app.handleAjaxError = (response, widgetId) => {
    const m = (response.responseJSON ? response.responseJSON.error.message : response.responseText);

    if( Widgets[widgetId] && Widgets[widgetId].options.muteAjaxErrorHandler) {
        return;
    }

    Api.showPopup(response.statusText + ' in ' + widgetId + ':<br/><br/>' + m, 850);
};

app.handleJsError = (error, widgetId, functionName, message) => {
    Loader.stop();
    let msg = message;
    msg += widgetId ? '<br/><br/> widget id: ' + widgetId : '';
    msg += functionName ? '<br/><br/> function: ' + functionName : '';
    msg += error.stack ? '<br/><br/> stack: <br/><br/>' + error.stack : error;
    Api.showPopup(msg, 800);
    throw error;
};

window.onerror =  (msg, url, lineNum, colNum, error) => {
    app.hasError = true;
    Api.showPopup(msg + '<br/>' + url + '<br/> in line ' + lineNum + ' column ' + colNum , 800);
    return false;
};

(() => {
    Doc.ready(() => {

        app.clickEvent = Utils.isMobile() ? 'touchstart' : 'click touchstart';

        let wc, i;

        for (i in WidgetConfig) {
            wc = WidgetConfig[i];

            if (wc.type) {
                loadWidget(wc);
            }
        }

        QB.getUserData().then(start);
    }).on('touchstart', () => app.isTouched = true);

    function loadWidget(wc, parent = Widgets, parentId = null) {
        if (wc.import) {
            let wci = v(wc.import, WidgetConfig), w = new wci.type(wci);
            if (!parent[wci.id]) {
                parent[wci.id] = w;
                (wci.widgets || []).forEach(w => loadWidget(w, parent, wci.id));
            }
        } else {
            if (parent[wc.id]) {
                L('duplicated widgetid: ' + wc.id);
            }
            let wcc = new wc.type(wc);
            parent[wc.id] = wcc;
            (wc.widgets || []).forEach(w => loadWidget(w, parent, parentId));
        }
    }

    function start() {
        if (app.hasError) {
            return;
        }

        app.id = Utils.getRandomId();

        initEvents();

        Widgets.systemValueGlobalCompanyProductPlanVersion = 'Budget';//Todo ez mi? Ne töröld, amíg nem nézem meg a bpspben (Ote)

        Widgets[app.mainPage].renderWidget();
    }

    function initEvents() {
        window.onbeforeunload = () => 'Logout';
    }

    function requestClipboarReadPermissionForFireFox() {
        navigator.permissions.query({name: 'clipboard-read'}).then(result => L(result.state));
    }

})();