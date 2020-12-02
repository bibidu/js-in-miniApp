const Null = Symbol('Null')

const commonAttrs = {
  'id': '',
  'class': '',
  'style': '',
}
const attributeByTag = {
    'cover-image': {
      src: 'undefined',
      bindload: 'eventHandler',
      binderror: 'eventHandler'
    },
    'cover-view': { 'scroll-top': 'undefined' },
    'match-media': {
      'min-width': 'undefined',
      'max-width': 'undefined',
      width: 'undefined',
      'min-height': 'undefined',
      'max-height': 'undefined',
      height: 'undefined',
      orientation: 'undefined'
    },
    'movable-area': { 'scale-area': 'false' },
    'movable-view': {
      direction: 'none',
      inertia: 'false',
      'out-of-bounds': 'false',
      x: 'undefined',
      y: 'undefined',
      damping: '20',
      friction: '2',
      disabled: 'false',
      scale: 'false',
      'scale-min': '0.5',
      'scale-max': '10',
      'scale-value': '1',
      animation: 'true',
      bindchange: 'eventHandler',
      bindscale: 'eventHandler',
      htouchmove: 'eventHandler',
      vtouchmove: 'eventHandler'
    },
    'scroll-view': {
      'scroll-x': 'false',
      'scroll-y': 'false',
      'upper-threshold': '50',
      'lower-threshold': '50',
      'scroll-top': 'undefined',
      'scroll-left': 'undefined',
      'scroll-into-view': 'undefined',
      'scroll-with-animation': 'false',
      'enable-back-to-top': 'false',
      'enable-flex': 'false',
      'scroll-anchoring': 'false',
      'refresher-enabled': 'false',
      'refresher-threshold': '45',
      'refresher-default-style': '"black"',
      'refresher-background': '"#FFF"',
      'refresher-triggered': 'false',
      enhanced: 'false',
      bounces: 'true',
      'show-scrollbar': 'true',
      'paging-enabled': 'false',
      'fast-deceleration': 'false',
      binddragstart: 'eventHandler',
      binddragging: 'eventHandler',
      binddragend: 'eventHandler',
      bindscrolltoupper: 'eventHandler',
      bindscrolltolower: 'eventHandler',
      bindscroll: 'eventHandler',
      bindrefresherpulling: 'eventHandler',
      bindrefresherrefresh: 'eventHandler',
      bindrefresherrestore: 'eventHandler',
      bindrefresherabort: 'eventHandler'
    },
    swiper: {
      'indicator-dots': 'false',
      'indicator-color': 'rgba(0, 0, 0, .3)',
      'indicator-active-color': '#000000',
      autoplay: 'false',
      current: '0',
      interval: '5000',
      duration: '500',
      circular: 'false',
      vertical: 'false',
      'previous-margin': '"0px"',
      'next-margin': '"0px"',
      'snap-to-edge': '"false"',
      'display-multiple-items': '1',
      'easing-function': '"default"',
      bindchange: 'eventHandler',
      bindtransition: 'eventHandler',
      bindanimationfinish: 'eventHandler'
    },
    'swiper-item': { 'item-id': 'undefined', 'skip-hidden-item-layout': 'false' },
    view: {
      'hover-class': 'none',
      'hover-stop-propagation': 'false',
      'hover-start-time': '50',
      'hover-stay-time': '400'
    },
    icon: { type: 'undefined', size: '23', color: 'undefined' },
    progress: {
      percent: 'undefined',
      'show-info': 'false',
      'border-radius': '0',
      'font-size': '16',
      'stroke-width': '6',
      color: '#09BB07',
      activeColor: '#09BB07',
      backgroundColor: '#EBEBEB',
      active: 'false',
      'active-mode': 'backwards',
      duration: '30',
      bindactiveend: 'eventHandler'
    },
    'rich-text': { nodes: '[]', space: 'undefined' },
    text: {
      selectable: 'false',
      'user-select': 'false',
      space: 'undefined',
      decode: 'false'
    },
    button: {
      size: 'default',
      type: 'default',
      plain: 'false',
      disabled: 'false',
      loading: 'false',
      'form-type': 'undefined',
      'open-type': 'undefined',
      'hover-class': 'button-hover',
      'hover-stop-propagation': 'false',
      'hover-start-time': '20',
      'hover-stay-time': '70',
      lang: 'en',
      'session-from': 'undefined',
      'send-message-title': 'undefined',
      'send-message-path': 'undefined',
      'send-message-img': 'undefined',
      'app-parameter': 'undefined',
      'show-message-card': 'false',
      bindgetuserinfo: 'eventHandler',
      bindcontact: 'eventHandler',
      bindgetphonenumber: 'eventHandler',
      binderror: 'eventHandler',
      bindopensetting: 'eventHandler',
      bindlaunchapp: 'eventHandler'
    },
    checkbox: {
      value: 'undefined',
      disabled: 'false',
      checked: 'false',
      color: '#09BB07'
    },
    'checkbox-group': { bindchange: 'undefined' },
    editor: {
      'read-only': 'false',
      placeholder: 'undefined',
      'show-img-size': 'false',
      'show-img-toolbar': 'false',
      'show-img-resize': 'false',
      bindready: 'eventHandler',
      bindfocus: 'eventHandler',
      bindblur: 'eventHandler',
      bindinput: 'eventHandler',
      bindstatuschange: 'eventHandler'
    },
    form: {
      'report-submit': 'false',
      'report-submit-timeout': '0',
      bindsubmit: 'eventHandler',
      bindreset: 'eventHandler'
    },
    input: {
      value: 'undefined',
      type: 'text',
      password: 'false',
      placeholder: 'undefined',
      'placeholder-style': 'undefined',
      'placeholder-class': 'input-placeholder',
      disabled: 'false',
      maxlength: '140',
      'cursor-spacing': '0',
      'auto-focus': 'false',
      focus: 'false',
      'confirm-type': 'done',
      'always-embed': 'false',
      'confirm-hold': 'false',
      cursor: 'undefined',
      'selection-start': '-1',
      'selection-end': '-1',
      'adjust-position': 'true',
      'hold-keyboard': 'false',
      bindinput: 'eventHandler',
      bindfocus: 'eventHandler',
      bindblur: 'eventHandler',
      bindconfirm: 'eventHandler',
      bindkeyboardheightchange: 'eventHandler'
    },
    label: { for: 'undefined' },
    picker: {
      'header-text': 'undefined',
      mode: 'selector',
      disabled: 'false',
      bindcancel: 'eventHandler'
    },
    'picker-view': {
      value: 'undefined',
      'indicator-style': 'undefined',
      'indicator-class': 'undefined',
      'mask-style': 'undefined',
      'mask-class': 'undefined',
      bindchange: 'eventHandler',
      bindpickstart: 'eventHandler',
      bindpickend: 'eventHandler'
    },
    'picker-view-column': {},
    radio: {
      value: 'undefined',
      checked: 'false',
      disabled: 'false',
      color: '#09BB07'
    },
    'radio-group': { bindchange: 'undefined' },
    slider: {
      min: '0',
      max: '100',
      step: '1',
      disabled: 'false',
      value: '0',
      color: '#e9e9e9',
      'selected-color': '#1aad19',
      activeColor: '#1aad19',
      backgroundColor: '#e9e9e9',
      'block-size': '28',
      'block-color': '#ffffff',
      'show-value': 'false',
      bindchange: 'eventHandler',
      bindchanging: 'eventHandler'
    },
    switch: {
      checked: 'false',
      disabled: 'false',
      type: 'switch',
      color: '#04BE02',
      bindchange: 'eventHandler'
    },
    textarea: {
      value: 'undefined',
      placeholder: 'undefined',
      'placeholder-style': 'undefined',
      'placeholder-class': 'textarea-placeholder',
      disabled: 'false',
      maxlength: '140',
      'auto-focus': 'false',
      focus: 'false',
      'auto-height': 'false',
      fixed: 'false',
      'cursor-spacing': '0',
      cursor: '-1',
      'show-confirm-bar': 'true',
      'selection-start': '-1',
      'selection-end': '-1',
      'adjust-position': 'true',
      'hold-keyboard': 'false',
      'disable-default-padding': 'false',
      bindfocus: 'eventHandler',
      bindblur: 'eventHandler',
      bindlinechange: 'eventHandler',
      bindinput: 'eventHandler',
      bindconfirm: 'eventHandler',
      bindkeyboardheightchange: 'eventHandler'
    },
    'functional-page-navigator': {
      version: 'release',
      name: 'undefined',
      args: 'undefined',
      bindsuccess: 'undefined',
      bindfail: 'undefined',
      bindcancel: 'undefined'
    },
    navigator: {
      target: 'self',
      url: 'undefined',
      'open-type': 'navigate',
      delta: '1',
      'app-id': 'undefined',
      path: 'undefined',
      'extra-data': 'undefined',
      version: 'release',
      'hover-class': 'navigator-hover',
      'hover-stop-propagation': 'false',
      'hover-start-time': '50',
      'hover-stay-time': '600',
      bindsuccess: 'undefined',
      bindfail: 'undefined',
      bindcomplete: 'undefined'
    },
    audio: {
      id: 'undefined',
      src: 'undefined',
      loop: 'false',
      controls: 'false',
      poster: 'undefined',
      name: 'undefined',
      author: 'undefined',
      binderror: 'eventHandler',
      bindplay: 'eventHandler',
      bindpause: 'eventHandler',
      bindtimeupdate: 'eventHandler',
      bindended: 'eventHandler'
    },
    camera: {
      mode: 'normal',
      resolution: 'medium',
      'device-position': 'back',
      flash: 'auto',
      'frame-size': 'medium',
      bindstop: 'eventHandler',
      binderror: 'eventHandler',
      bindinitdone: 'eventHandler',
      bindscancode: 'eventHandler'
    },
    image: {
      src: 'undefined',
      mode: 'scaleToFill',
      webp: 'false',
      'lazy-load': 'false',
      'show-menu-by-longpress': 'false',
      binderror: 'eventHandler',
      bindload: 'eventHandler'
    },
    // 'live-player': {
    //   '社交': 'undefined',
    //   '教育': 'undefined',
    //   '医疗': 'undefined',
    //   '金融': 'undefined',
    //   '汽车': 'undefined',
    //   '政府主体帐号': 'undefined',
    //   '工具': 'undefined',
    //   'IT科技': 'undefined'
    // },
    // 'live-pusher': {
    //   '社交': 'undefined',
    //   '教育': 'undefined',
    //   '医疗': 'undefined',
    //   '金融': 'undefined',
    //   '汽车': 'undefined',
    //   '政府主体帐号': 'undefined',
    //   '工具': 'undefined',
    //   'IT科技': 'undefined'
    // },
    video: {
      src: 'undefined',
      duration: 'undefined',
      controls: 'true',
      'danmu-list': 'undefined',
      'danmu-btn': 'false',
      'enable-danmu': 'false',
      autoplay: 'false',
      loop: 'false',
      muted: 'false',
      'initial-time': '0',
      'page-gesture': 'false',
      direction: 'undefined',
      'show-progress': 'true',
      'show-fullscreen-btn': 'true',
      'show-play-btn': 'true',
      'show-center-play-btn': 'true',
      'enable-progress-gesture': 'true',
      'object-fit': 'contain',
      poster: 'undefined',
      'show-mute-btn': 'false',
      title: 'undefined',
      'play-btn-position': 'bottom',
      'enable-play-gesture': 'false',
      'auto-pause-if-navigate': 'true',
      'auto-pause-if-open-native': 'true',
      'vslide-gesture': 'false',
      'vslide-gesture-in-fullscreen': 'true',
      'ad-unit-id': 'undefined',
      'poster-for-crawler': 'undefined',
      'show-casting-button': 'false',
      'picture-in-picture-mode': 'undefined',
      'picture-in-picture-show-progress': 'false',
      'enable-auto-rotation': 'false',
      'show-screen-lock-button': 'false',
      'show-snapshot-button': 'false',
      bindplay: 'eventHandler',
      bindpause: 'eventHandler',
      bindended: 'eventHandler',
      bindtimeupdate: 'eventHandler',
      bindfullscreenchange: 'eventHandler',
      bindwaiting: 'eventHandler',
      binderror: 'eventHandler',
      bindprogress: 'eventHandler',
      bindloadedmetadata: 'eventHandler',
      bindcontrolstoggle: 'eventHandler',
      bindenterpictureinpicture: 'undefined',
      bindleavepictureinpicture: 'undefined',
      bindseekcomplete: 'undefined'
    },
    // 'voip-room': {
    //   '教育': 'undefined',
    //   '医疗': '/',
    //   '金融': 'undefined',
    //   '汽车': 'undefined',
    //   '政府主体帐号': 'undefined',
    //   'IT 科技': 'undefined'
    // },
    map: {
      longitude: 'undefined',
      latitude: 'undefined',
      scale: '16',
      'min-scale': '3',
      'max-scale': '20',
      markers: 'undefined',
      covers: 'undefined',
      polyline: 'undefined',
      circles: 'undefined',
      controls: 'undefined',
      'include-points': 'undefined',
      'show-location': 'false',
      polygons: 'undefined',
      subkey: 'undefined',
      'layer-style': '1',
      rotate: '0',
      skew: '0',
      'enable-3D': 'false',
      'show-compass': 'false',
      'show-scale': 'false',
      'enable-overlooking': 'false',
      'enable-zoom': 'true',
      'enable-scroll': 'true',
      'enable-rotate': 'false',
      'enable-satellite': 'false',
      'enable-traffic': 'false',
      'enable-poi': 'undefined',
      'enable-building': 'undefined',
      setting: 'undefined',
      bindtap: 'eventHandler',
      bindmarkertap: 'eventHandler',
      bindlabeltap: 'eventHandler',
      bindcontroltap: 'eventHandler',
      bindcallouttap: 'eventHandler',
      bindupdated: 'eventHandler',
      bindregionchange: 'eventHandler',
      bindpoitap: 'eventHandler',
      bindanchorpointtap: 'eventHandler'
    },
    canvas: {
      type: 'undefined',
      'canvas-id': 'undefined',
      'disable-scroll': 'false',
      bindtouchstart: 'eventHandler',
      bindtouchmove: 'eventHandler',
      bindtouchend: 'eventHandler',
      bindtouchcancel: 'eventHandler',
      bindlongtap: 'eventHandler',
      binderror: 'eventHandler'
    },
    'web-view': {
      src: 'undefined',
      bindmessage: 'undefined',
      bindload: 'undefined',
      binderror: 'undefined'
    },
    ad: {
      'unit-id': 'undefined',
      'ad-intervals': 'undefined',
      'ad-type': 'banner',
      'ad-theme': 'white',
      bindload: 'eventHandler',
      binderror: 'eventHandler',
      bindclose: 'eventHandler'
    },
    'ad-custom': {
      'unit-id': 'undefined',
      'ad-intervals': 'undefined',
      bindload: 'eventHandler',
      binderror: 'eventHandler'
    },
    'official-account': { bindload: 'undefined', binderror: 'undefined' },
    'open-data': {
      type: 'undefined',
      'open-gid': 'undefined',
      lang: 'en',
      'default-text': 'undefined',
      'default-avatar': 'undefined',
      binderror: 'eventHandler'
    },
    'native-component': {},
    'aria-component': {
      'aria-hidden': 'aria-label',
      'aria-describedby': 'aria-haspopup',
      'aria-orientation': 'aria-valuemax',
      'aria-multiselectable': 'tabindex',
      'aia-multiselectable': 'undefined'
    },
    'navigation-bar': {
      title: 'undefined',
      loading: 'false',
      'front-color': 'undefined',
      'background-color': 'undefined',
      'color-animation-duration': '0',
      'color-animation-timing-func': '"linear"'
    },
    'page-meta': {
      'background-text-style': 'undefined',
      'background-color': 'undefined',
      'background-color-top': 'undefined',
      'background-color-bottom': 'undefined',
      'root-background-color': 'undefined',
      'scroll-top': '""',
      'scroll-duration': '300',
      'page-style': '""',
      'body-font-size': '""',
      'root-font-size': '""',
      'page-orientation': '""',
      bindresize: 'eventHandler',
      bindscroll: 'eventHandler',
      bindscrolldone: 'eventHandler'
    }
}

Object.keys(attributeByTag).forEach(tag => {
  attributeByTag[tag] = {
    ...attributeByTag[tag],
    ...commonAttrs
  }
})

module.exports = attributeByTag