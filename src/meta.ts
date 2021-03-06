﻿/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />

module CustomItems {
    export var WEBPAGE_EXTENSION_NAME = 'WebPage';

    export var webPageMeta = {
        bindings: <Array<DevExpress.Dashboard.ICustomItemBinding>>[{
            propertyName: 'Attribute',
            dataItemType: 'Dimension',
            array: false,
            displayName: "Attribute",
            emptyPlaceholder: 'Set Attribute',
            selectedPlaceholder: "Configure Attribute"
        }],
        properties: <Array<DevExpress.Dashboard.ICustomItemProperty>>[{
            propertyName: 'Url',
            editor: DevExpress.Dashboard.Metadata.editorTemplates.text,
            displayName: "Url",
            sectionName: "Custom Options",
            defaultVal: 'https://en.wikipedia.org/wiki/{0}'
        }],
        icon: WEBPAGE_EXTENSION_NAME,
        title: "Web Page",
        index: 2
    };
}