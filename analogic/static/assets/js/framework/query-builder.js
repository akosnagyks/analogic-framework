/* global app, El, EventMap, Loader, Auth, FileUpload, Repository, Server, Utils, Widgets, RestRequest */

'use strict';
const QB = {};

QB.loadData = (widgetId, widgetTypeName, useDefaultData = false, loaderFunctionPath = 'init', extraParams = {}) => {
    const executor = LoadExecutorFactory.createExecutor(widgetId, widgetTypeName, useDefaultData, loaderFunctionPath, extraParams);

    try {
      return executor.execute();
    } catch (e) {
        const widgetId = executor.context ? executor.context.getWidgetId() : false,
        functionName = executor.context ? executor.context.getLoaderFunctionName() : false;
        app.handleJsError(e, widgetId, functionName, 'Error in loading data');
    }
};

QB.refreshGridCellData = (argument, type) => {
    let t = argument.split('_');
    return QB.loadData(t[0], type, false, 'refresh_col_' + t[2], {row: t[1], col: t[2]});
};

QB.getUserData = () => {
    let extResponse, ext;

    for(ext in Extensions.authenticationProviders) {
        extResponse = Extensions.authenticationProviders[ext].getUserData();
        if (false !== extResponse) {
            return extResponse;
        }
    }

    if ('NoLogin' === app.authenticationMode) {
        return Auth.getAjaxRequest('activeUser', {}, 'GET').pipe(data => {
            Widgets.activeUser = data.username;
        });
    }

    return Auth.getAjaxRequest(QB.getUrl(app.apiSubPath + 'ActiveUser'), {}, 'GET').pipe(data => {
        Widgets.activeUser = data.Name.replace(/"/g, '\\"');
    });
};

QB.parsingControlFinished = (repositoryId) => {
    El.body.triggerHandler('parsingcontrol.' + repositoryId + '.finished');
    if (Repository[repositoryId] && Repository[repositoryId]['parsingControlFinished']) {
        Repository[repositoryId]['parsingControlFinished']();
    }
};

QB.writeData = (eventMapId, jqueryEvent, jqueryElement, resent = false) => {
    const executor = WriteExecutorFactory.createExecutor(eventMapId, jqueryEvent, jqueryElement);

    try {
      return executor.execute();
    } catch (e) {
        const widgetId = executor.context ? executor.context.getWidgetId() : false,
        functionName = executor.context ? executor.context.getEventName() : false;
        app.handleJsError(e, widgetId, functionName, 'Error in writing data');
    }
};

QB.obtainNewCellSetIdAndSendAgain = (widgetId, eventMapId) => {
    QB.loadData(widgetId, '', false, 'init').then(d => {
        QB.writeData(eventMapId, {}, {}, true);
    });
};

QB.executeEventMapAction = (eventMapId, context, response) => {
    El.body.triggerHandler(eventMapId);
    let actions = EventMap[eventMapId], a;
    if (actions) {
        for (a of actions) {
            a.action(a.argument, context.getJQueryEvent(), context.getJQueryElement(), response);
        }
    }
};

QB.getServerSideUrlAndBody = (url, body, repositoryId, path) => {
    let params = [], keyAdded = false,
        subUrl = url.includes('?') ? url.indexOf('?') !== (url.length - 1) ? '&server=1' : '' : '?server=1';
    let newUrl = url.includes('proxy') ? url : app.apiHost ? url.replace(app.apiHost, 'proxy') : 'proxy' + url;

    for (const [key, value] of Object.entries(body)) {
        params.push(`"${key}": "${value}"`);
        if ('key' === key) {
            keyAdded = true;
        }
    }
    !keyAdded && params.push(`"key" : "${repositoryId + "_" + path}"`);

    return {url: newUrl + subUrl, body: `{${params.join(',')}}`};
};

QB.getUrl = (url) => {
    return app.apiHost ? app.apiHost + url : url.includes('proxy') ? url : 'proxy' + url;
};
