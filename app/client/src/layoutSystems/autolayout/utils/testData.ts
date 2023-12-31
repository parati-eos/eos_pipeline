import { RenderModes } from "constants/WidgetConstants";
import {
  LayoutDirection,
  ResponsiveBehavior,
} from "../../common/utils/constants";

export const data = {
  "0": {
    widgetName: "MainContainer",
    backgroundColor: "none",
    rightColumn: 1224,
    snapColumns: 64,
    detachFromLayout: true,
    widgetId: "0",
    topRow: 0,
    bottomRow: 460,
    containerStyle: "none",
    snapRows: 46,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: true,
    version: 75,
    minHeight: 470,
    useAutoLayout: true,
    parentColumnSpace: 1,
    dynamicTriggerPathList: [],
    dynamicBindingPathList: [],
    leftColumn: 0,
    children: ["mglfryj65c", "vaqw5v85cs"],
    positioning: "vertical",
    flexLayers: [
      {
        children: [
          {
            id: "mglfryj65c",
            align: "start",
          },
          {
            id: "vaqw5v85cs",
            align: "start",
          },
        ],
      },
    ],
    direction: LayoutDirection.Vertical,
    renderMode: RenderModes.CANVAS,
    isLoading: false,
  },
  pt32jvs72k: {
    resetFormOnClick: false,
    boxShadow: "none",
    widgetName: "Button7",
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    displayName: "Button",
    iconSVG: "/static/media/icon.cca026338f1c8eb6df8ba03d084c2fca.svg",
    searchTags: ["click", "submit"],
    topRow: 0,
    bottomRow: 4,
    parentRowSpace: 10,
    type: "BUTTON_WIDGET",
    hideCard: false,
    animateLoading: true,
    parentColumnSpace: 8.796875,
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "buttonColor",
      },
      {
        key: "borderRadius",
      },
    ],
    text: "Submit",
    isDisabled: false,
    key: "jvfayx7kel",
    isDeprecated: false,
    rightColumn: 16,
    isDefaultClickDisabled: true,
    widgetId: "pt32jvs72k",
    minWidth: 120,
    isVisible: true,
    recaptchaType: "V3",
    version: 1,
    parentId: "a3lldg1wg9",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Hug,
    disabledWhenInvalid: false,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    alignment: "start",
  },
  tg6jcd1kjp: {
    resetFormOnClick: false,
    boxShadow: "none",
    widgetName: "Button8",
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    displayName: "Button",
    iconSVG: "/static/media/icon.cca026338f1c8eb6df8ba03d084c2fca.svg",
    searchTags: ["click", "submit"],
    topRow: 0,
    bottomRow: 4,
    parentRowSpace: 10,
    type: "BUTTON_WIDGET",
    hideCard: false,
    animateLoading: true,
    parentColumnSpace: 8.796875,
    leftColumn: 48,
    dynamicBindingPathList: [
      {
        key: "buttonColor",
      },
      {
        key: "borderRadius",
      },
    ],
    text: "Submit",
    isDisabled: false,
    key: "jvfayx7kel",
    isDeprecated: false,
    rightColumn: 64,
    isDefaultClickDisabled: true,
    widgetId: "tg6jcd1kjp",
    minWidth: 120,
    isVisible: true,
    recaptchaType: "V3",
    version: 1,
    parentId: "a3lldg1wg9",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Hug,
    originalTopRow: 11,
    disabledWhenInvalid: false,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    originalBottomRow: 15,
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    alignment: "start",
  },
  a3lldg1wg9: {
    widgetName: "Canvas6",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: ["pt32jvs72k", "tg6jcd1kjp"],
    key: "7gw94mobie",
    isDeprecated: false,
    rightColumn: 1166,
    detachFromLayout: true,
    widgetId: "a3lldg1wg9",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "mglfryj65c",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Fill,
    flexLayers: [
      {
        children: [
          {
            id: "pt32jvs72k",
            align: "start",
          },
          {
            id: "tg6jcd1kjp",
            align: "end",
          },
        ],
      },
    ],
  },
  mglfryj65c: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container2",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 0,
    bottomRow: 10,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.21875,
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["a3lldg1wg9"],
    borderWidth: "1",
    key: "bxkxveofyb",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 32,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "mglfryj65c",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Fill,
    originalTopRow: 0,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 11,
    alignment: "start",
    minDynamicHeight: 10,
  },
  "2ydfwnmayi": {
    widgetName: "Canvas5",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: [],
    key: "7gw94mobie",
    isDeprecated: false,
    rightColumn: 1166,
    detachFromLayout: true,
    widgetId: "2ydfwnmayi",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "vaqw5v85cs",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Fill,
    flexLayers: [],
  },
  vaqw5v85cs: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container1",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 0,
    bottomRow: 11,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.21875,
    leftColumn: 32,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["2ydfwnmayi"],
    borderWidth: "1",
    key: "bxkxveofyb",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 64,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "vaqw5v85cs",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: RenderModes.CANVAS,
    isLoading: false,
    responsiveBehavior: ResponsiveBehavior.Fill,
    originalTopRow: 0,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 11,
    alignment: "start",
    minDynamicHeight: 10,
  },
};

export const dataForgetCanvasDimensions = {
  "0": {
    widgetName: "MainContainer",
    backgroundColor: "none",
    rightColumn: 1224,
    snapColumns: 64,
    detachFromLayout: true,
    widgetId: "0",
    topRow: 0,
    bottomRow: 380,
    containerStyle: "none",
    snapRows: 82,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: true,
    version: 77,
    minHeight: 840,
    useAutoLayout: true,
    parentColumnSpace: 1,
    dynamicTriggerPathList: [],
    dynamicBindingPathList: [],
    leftColumn: 0,
    children: [
      "kv4o6eopdn",
      "l29m7e6zds",
      "xrf1j3juvs",
      "341mei61on",
      "w1g8kwyww5",
      "c3qord3aex",
      "sy88tbxp13",
    ],
    positioning: "vertical",
    direction: "Vertical",
    flexLayers: [
      {
        children: [
          {
            id: "kv4o6eopdn",
            align: "start",
          },
        ],
      },
      {
        children: [
          {
            id: "l29m7e6zds",
            align: "start",
          },
        ],
      },
      {
        children: [
          {
            id: "xrf1j3juvs",
            align: "start",
          },
          {
            id: "341mei61on",
            align: "start",
          },
          {
            id: "w1g8kwyww5",
            align: "start",
          },
          {
            id: "c3qord3aex",
            align: "start",
          },
        ],
      },
      {
        children: [
          {
            id: "sy88tbxp13",
            align: "start",
          },
        ],
      },
    ],
  },
  kv4o6eopdn: {
    resetFormOnClick: false,
    boxShadow: "none",
    widgetName: "Button0",
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    displayName: "Button",
    iconSVG: "/static/media/icon.cca026338f1c8eb6df8ba03d084c2fca.svg",
    searchTags: ["click", "submit"],
    topRow: 0,
    bottomRow: 4,
    parentRowSpace: 10,
    type: "BUTTON_WIDGET",
    hideCard: false,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    dynamicTriggerPathList: [],
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "buttonColor",
      },
      {
        key: "borderRadius",
      },
    ],
    text: "Button 0",
    isDisabled: false,
    key: "pr2n39s4pf",
    isDeprecated: false,
    rightColumn: 6.632124352331606,
    isDefaultClickDisabled: true,
    widgetId: "kv4o6eopdn",
    minWidth: 120,
    isVisible: true,
    recaptchaType: "V3",
    version: 1,
    parentId: "0",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "hug",
    disabledWhenInvalid: false,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    alignment: "start",
  },
  phf8e237zg: {
    resetFormOnClick: false,
    boxShadow: "none",
    widgetName: "Button1",
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    displayName: "Button",
    iconSVG: "/static/media/icon.cca026338f1c8eb6df8ba03d084c2fca.svg",
    searchTags: ["click", "submit"],
    topRow: 0,
    bottomRow: 4,
    parentRowSpace: 10,
    type: "BUTTON_WIDGET",
    hideCard: false,
    animateLoading: true,
    parentColumnSpace: 17.703125,
    dynamicTriggerPathList: [],
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "buttonColor",
      },
      {
        key: "borderRadius",
      },
    ],
    text: "Button 1",
    isDisabled: false,
    key: "pr2n39s4pf",
    isDeprecated: false,
    rightColumn: 6.748681898066784,
    isDefaultClickDisabled: true,
    widgetId: "phf8e237zg",
    minWidth: 120,
    isVisible: true,
    recaptchaType: "V3",
    version: 1,
    parentId: "r8zx3uttvz",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "hug",
    disabledWhenInvalid: false,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    alignment: "start",
  },
  r8zx3uttvz: {
    widgetName: "Canvas1",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: ["phf8e237zg"],
    key: "t3ruwylkhy",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "r8zx3uttvz",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "l29m7e6zds",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [
      {
        children: [
          {
            id: "phf8e237zg",
            align: "start",
          },
        ],
      },
    ],
  },
  l29m7e6zds: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container1",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 4,
    bottomRow: 14,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["r8zx3uttvz"],
    borderWidth: "1",
    key: "el0i1qkdxm",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 64,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "l29m7e6zds",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 4,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 15,
    alignment: "start",
    minDynamicHeight: 10,
  },
  alvcydt4he: {
    resetFormOnClick: false,
    boxShadow: "none",
    widgetName: "Button2",
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    displayName: "Button",
    iconSVG: "/static/media/icon.cca026338f1c8eb6df8ba03d084c2fca.svg",
    searchTags: ["click", "submit"],
    topRow: 0,
    bottomRow: 4,
    parentRowSpace: 10,
    type: "BUTTON_WIDGET",
    hideCard: false,
    animateLoading: true,
    parentColumnSpace: 17.703125,
    dynamicTriggerPathList: [],
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "buttonColor",
      },
      {
        key: "borderRadius",
      },
    ],
    text: "Button 2",
    isDisabled: false,
    key: "pr2n39s4pf",
    isDeprecated: false,
    rightColumn: 28.49721706864564,
    isDefaultClickDisabled: true,
    widgetId: "alvcydt4he",
    minWidth: 120,
    isVisible: true,
    recaptchaType: "V3",
    version: 1,
    parentId: "r2f7mqcbhz",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "hug",
    disabledWhenInvalid: false,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    alignment: "start",
  },
  r2f7mqcbhz: {
    widgetName: "Canvas2",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: ["alvcydt4he"],
    key: "t3ruwylkhy",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "r2f7mqcbhz",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "xrf1j3juvs",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [
      {
        children: [
          {
            id: "alvcydt4he",
            align: "start",
          },
        ],
      },
    ],
  },
  xrf1j3juvs: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container2",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 14,
    bottomRow: 24,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["r2f7mqcbhz"],
    borderWidth: "1",
    key: "el0i1qkdxm",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 16,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "xrf1j3juvs",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 15,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 26,
    alignment: "start",
    minDynamicHeight: 10,
  },
  xjcm9uf1d8: {
    widgetName: "Canvas10",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: [],
    key: "fkqrygr3nj",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "xjcm9uf1d8",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "341mei61on",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [],
  },
  "341mei61on": {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container10",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 14,
    bottomRow: 24,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    leftColumn: 16,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["xjcm9uf1d8"],
    borderWidth: "1",
    key: "4yx1z5m6mk",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 32,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "341mei61on",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 15,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 26,
    alignment: "start",
    minDynamicHeight: 10,
  },
  kffoaq7o8d: {
    widgetName: "Canvas7",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: [],
    key: "t3ruwylkhy",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "kffoaq7o8d",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "w1g8kwyww5",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [],
  },
  w1g8kwyww5: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container7",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 14,
    bottomRow: 24,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    leftColumn: 32,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["kffoaq7o8d"],
    borderWidth: "1",
    key: "el0i1qkdxm",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 48,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "w1g8kwyww5",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 15,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 26,
    alignment: "start",
    minDynamicHeight: 10,
  },
  eqa5amaxqe: {
    widgetName: "Canvas6",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: [],
    key: "t3ruwylkhy",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "eqa5amaxqe",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "c3qord3aex",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [],
  },
  c3qord3aex: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container6",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 14,
    bottomRow: 24,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    leftColumn: 48,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["eqa5amaxqe"],
    borderWidth: "1",
    key: "el0i1qkdxm",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 64,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "c3qord3aex",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 15,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 26,
    alignment: "start",
    minDynamicHeight: 10,
  },
  cq25w8hz6n: {
    resetFormOnClick: false,
    boxShadow: "none",
    widgetName: "Button3",
    buttonColor: "{{appsmith.theme.colors.primaryColor}}",
    displayName: "Button",
    iconSVG: "/static/media/icon.cca026338f1c8eb6df8ba03d084c2fca.svg",
    searchTags: ["click", "submit"],
    topRow: 0,
    bottomRow: 4,
    parentRowSpace: 10,
    type: "BUTTON_WIDGET",
    hideCard: false,
    animateLoading: true,
    parentColumnSpace: 17.703125,
    dynamicTriggerPathList: [],
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "buttonColor",
      },
      {
        key: "borderRadius",
      },
    ],
    text: "Button 3",
    isDisabled: false,
    key: "pr2n39s4pf",
    isDeprecated: false,
    rightColumn: 29.035916824196597,
    isDefaultClickDisabled: true,
    widgetId: "cq25w8hz6n",
    minWidth: 120,
    isVisible: true,
    recaptchaType: "V3",
    version: 1,
    parentId: "b91wojl19o",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "hug",
    disabledWhenInvalid: false,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    buttonVariant: "PRIMARY",
    placement: "CENTER",
    alignment: "start",
  },
  b91wojl19o: {
    widgetName: "Canvas3",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: ["cq25w8hz6n"],
    key: "t3ruwylkhy",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "b91wojl19o",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "hibb5668qy",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [
      {
        children: [
          {
            id: "cq25w8hz6n",
            align: "start",
          },
        ],
      },
    ],
  },
  hibb5668qy: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container3",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 0,
    bottomRow: 10,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["b91wojl19o"],
    borderWidth: "1",
    key: "el0i1qkdxm",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 16,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "hibb5668qy",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "xp6lxmot21",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 0,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 11,
    alignment: "start",
    minDynamicHeight: 10,
  },
  hatp88y71d: {
    widgetName: "Canvas9",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: [],
    key: "fkqrygr3nj",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "hatp88y71d",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "vjdtark0mi",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [],
  },
  vjdtark0mi: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container9",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 0,
    bottomRow: 10,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 17.703125,
    leftColumn: 16,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["hatp88y71d"],
    borderWidth: "1",
    key: "4yx1z5m6mk",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 32,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "vjdtark0mi",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "xp6lxmot21",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 0,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 11,
    alignment: "start",
    minDynamicHeight: 10,
  },
  o1fc1zt9kd: {
    widgetName: "Canvas8",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: [],
    key: "fkqrygr3nj",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "o1fc1zt9kd",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "jl6pk4uoaz",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [],
  },
  jl6pk4uoaz: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container8",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 0,
    bottomRow: 10,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 17.703125,
    leftColumn: 32,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["o1fc1zt9kd"],
    borderWidth: "1",
    key: "4yx1z5m6mk",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 48,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "jl6pk4uoaz",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "xp6lxmot21",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 0,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 11,
    alignment: "start",
    minDynamicHeight: 10,
  },
  uh83f0dzzi: {
    widgetName: "Canvas5",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 100,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: [],
    key: "t3ruwylkhy",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "uh83f0dzzi",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "ji56m4kt8i",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [],
  },
  ji56m4kt8i: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container5",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 0,
    bottomRow: 10,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    leftColumn: 48,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["uh83f0dzzi"],
    borderWidth: "1",
    key: "el0i1qkdxm",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 64,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "ji56m4kt8i",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "xp6lxmot21",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 0,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 11,
    alignment: "start",
    minDynamicHeight: 10,
  },
  xp6lxmot21: {
    widgetName: "Canvas4",
    displayName: "Canvas",
    topRow: 0,
    bottomRow: 120,
    parentRowSpace: 1,
    type: "CANVAS_WIDGET",
    canExtend: false,
    hideCard: true,
    minHeight: 100,
    parentColumnSpace: 1,
    leftColumn: 0,
    dynamicBindingPathList: [],
    children: ["hibb5668qy", "vjdtark0mi", "jl6pk4uoaz", "ji56m4kt8i"],
    key: "t3ruwylkhy",
    isDeprecated: false,
    rightColumn: 64,
    detachFromLayout: true,
    widgetId: "xp6lxmot21",
    containerStyle: "none",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "sy88tbxp13",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    flexLayers: [
      {
        children: [
          {
            id: "hibb5668qy",
            align: "start",
          },
          {
            id: "vjdtark0mi",
            align: "start",
          },
          {
            id: "jl6pk4uoaz",
            align: "start",
          },
          {
            id: "ji56m4kt8i",
            align: "end",
          },
        ],
      },
    ],
  },
  sy88tbxp13: {
    boxShadow: "{{appsmith.theme.boxShadow.appBoxShadow}}",
    widgetName: "Container4",
    borderColor: "#E0DEDE",
    isCanvas: true,
    displayName: "Container",
    iconSVG: "/static/media/icon.1977dca3370505e2db3a8e44cfd54907.svg",
    searchTags: ["div", "parent", "group"],
    topRow: 24,
    bottomRow: 36,
    parentRowSpace: 10,
    type: "CONTAINER_WIDGET",
    hideCard: false,
    shouldScrollContents: true,
    animateLoading: true,
    parentColumnSpace: 18.015625,
    leftColumn: 0,
    dynamicBindingPathList: [
      {
        key: "borderRadius",
      },
      {
        key: "boxShadow",
      },
    ],
    children: ["xp6lxmot21"],
    borderWidth: "1",
    key: "el0i1qkdxm",
    backgroundColor: "#FFFFFF",
    isDeprecated: false,
    rightColumn: 64,
    dynamicHeight: "AUTO_HEIGHT",
    widgetId: "sy88tbxp13",
    containerStyle: "card",
    minWidth: 450,
    isVisible: true,
    version: 1,
    parentId: "0",
    renderMode: "CANVAS",
    isLoading: false,
    responsiveBehavior: "fill",
    originalTopRow: 26,
    borderRadius: "{{appsmith.theme.borderRadius.appBorderRadius}}",
    maxDynamicHeight: 9000,
    originalBottomRow: 39,
    alignment: "start",
    minDynamicHeight: 10,
  },
};
