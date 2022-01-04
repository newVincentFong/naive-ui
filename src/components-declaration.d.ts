// this is global component declaration
declare module 'vue' {
  export interface GlobalComponents {
    NAffix: typeof import('./affix')['NAffix']
    NAlert: typeof import('./alert')['NAlert']
    NAnchor: typeof import('./anchor')['NAnchor']
    NAnchorLink: typeof import('./anchor')['NAnchorLink']
    NAutoComplete: typeof import('./auto-complete')['NAutoComplete']
    NAvatar: typeof import('./avatar')['NAvatar']
    NAvatarGroup: typeof import('./avatar')['NAvatarGroup']
    NBackTop: typeof import('./back-top')['NBackTop']
    NBadge: typeof import('./badge')['NBadge']
    NBreadcrumb: typeof import('./breadcrumb')['NBreadcrumb']
    NBreadcrumbItem: typeof import('./breadcrumb')['NBreadcrumbItem']
    NButton: typeof import('./button')['NButton']
    NButtonGroup: typeof import('./button')['NButtonGroup']
    NxButton: typeof import('./button')['NxButton']
    NCalendar: typeof import('./calendar')['NCalendar']
    NCard: typeof import('./card')['NCard']
    NCarousel: typeof import('./carousel')['NCarousel']
    NCascader: typeof import('./cascader')['NCascader']
    NCheckbox: typeof import('./checkbox')['NCheckbox']
    NCheckboxGroup: typeof import('./checkbox')['NCheckboxGroup']
    NCode: typeof import('./code')['NCode']
    NCollapse: typeof import('./collapse')['NCollapse']
    NCollapseItem: typeof import('./collapse')['NCollapseItem']
    NCollapseTransition: typeof import('./collapse-transition')['NCollapseTransition']
    NColorPicker: typeof import('./color-picker')['NColorPicker']
    NConfigProvider: typeof import('./config-provider')['NConfigProvider']
    NCountdown: typeof import('./countdown')['NCountdown']
    NDataTable: typeof import('./data-table')['NDataTable']
    NDatePicker: typeof import('./date-picker')['NDatePicker']
    NDescriptions: typeof import('./descriptions')['NDescriptions']
    NDescriptionsItem: typeof import('./descriptions')['NDescriptionsItem']
    NDialog: typeof import('./dialog')['NDialog']
    NDialogProvider: typeof import('./dialog')['NDialogProvider']
    NDivider: typeof import('./divider')['NDivider']
    NDrawer: typeof import('./drawer')['NDrawer']
    NDrawerContent: typeof import('./drawer')['NDrawerContent']
    NDropdown: typeof import('./dropdown')['NDropdown']
    NDynamicInput: typeof import('./dynamic-input')['NDynamicInput']
    NDynamicTags: typeof import('./dynamic-tags')['NDynamicTags']
    NEl: typeof import('./element')['NEl']
    NElement: typeof import('./element')['NElement']
    NEllipsis: typeof import('./ellipsis')['NEllipsis']
    NEmpty: typeof import('./empty')['NEmpty']
    NForm: typeof import('./form')['NForm']
    NFormItem: typeof import('./form')['NFormItem']
    NFormItemCol: typeof import('./form')['NFormItemCol']
    NFormItemGi: typeof import('./form')['NFormItemGi']
    NFormItemGridItem: typeof import('./form')['NFormItemGridItem']
    NFormItemRow: typeof import('./form')['NFormItemRow']
    NGradientText: typeof import('./gradient-text')['NGradientText']
    NGi: typeof import('./grid')['NGi']
    NGrid: typeof import('./grid')['NGrid']
    NGridItem: typeof import('./grid')['NGridItem']
    NIcon: typeof import('./icon')['NIcon']
    NImage: typeof import('./image')['NImage']
    NImageGroup: typeof import('./image')['NImageGroup']
    NInput: typeof import('./input')['NInput']
    NInputGroup: typeof import('./input')['NInputGroup']
    NInputGroupLabel: typeof import('./input')['NInputGroupLabel']
    NInputNumber: typeof import('./input-number')['NInputNumber']
    NLayout: typeof import('./layout')['NLayout']
    NLayoutContent: typeof import('./layout')['NLayoutContent']
    NLayoutFooter: typeof import('./layout')['NLayoutFooter']
    NLayoutHeader: typeof import('./layout')['NLayoutHeader']
    NLayoutSider: typeof import('./layout')['NLayoutSider']
    NCol: typeof import('./legacy-grid')['NCol']
    NRow: typeof import('./legacy-grid')['NRow']
    NList: typeof import('./list')['NList']
    NListItem: typeof import('./list')['NListItem']
    NLoadingBarProvider: typeof import('./loading-bar')['NLoadingBarProvider']
    NLog: typeof import('./log')['NLog']
    NMention: typeof import('./mention')['NMention']
    NMenu: typeof import('./menu')['NMenu']
    NMessageProvider: typeof import('./message')['NMessageProvider']
    NModal: typeof import('./modal')['NModal']
    NNotificationProvider: typeof import('./notification')['NNotificationProvider']
    NNumberAnimation: typeof import('./number-animation')['NNumberAnimation']
    NPageHeader: typeof import('./page-header')['NPageHeader']
    NPagination: typeof import('./pagination')['NPagination']
    NPopconfirm: typeof import('./popconfirm')['NPopconfirm']
    NPopover: typeof import('./popover')['NPopover']
    NPopselect: typeof import('./popselect')['NPopselect']
    NProgress: typeof import('./progress')['NProgress']
    NRadio: typeof import('./radio')['NRadio']
    NRadioButton: typeof import('./radio')['NRadioButton']
    NRadioGroup: typeof import('./radio')['NRadioGroup']
    NRate: typeof import('./rate')['NRate']
    NResult: typeof import('./result')['NResult']
    NScrollbar: typeof import('./scrollbar')['NScrollbar']
    NSelect: typeof import('./select')['NSelect']
    NSkeleton: typeof import('./skeleton')['NSkeleton']
    NSlider: typeof import('./slider')['NSlider']
    NSpace: typeof import('./space')['NSpace']
    NSpin: typeof import('./spin')['NSpin']
    NStatistic: typeof import('./statistic')['NStatistic']
    NStep: typeof import('./steps')['NStep']
    NSteps: typeof import('./steps')['NSteps']
    NSwitch: typeof import('./switch')['NSwitch']
    NTable: typeof import('./table')['NTable']
    NTbody: typeof import('./table')['NTbody']
    NTd: typeof import('./table')['NTd']
    NTh: typeof import('./table')['NTh']
    NThead: typeof import('./table')['NThead']
    NTr: typeof import('./table')['NTr']
    NTab: typeof import('./tabs')['NTab']
    NTabPane: typeof import('./tabs')['NTabPane']
    NTabs: typeof import('./tabs')['NTabs']
    NTag: typeof import('./tag')['NTag']
    NThemeEditor: typeof import('./theme-editor')['NThemeEditor']
    NThing: typeof import('./thing')['NThing']
    NTime: typeof import('./time')['NTime']
    NTimePicker: typeof import('./time-picker')['NTimePicker']
    NTimeline: typeof import('./timeline')['NTimeline']
    NTimelineItem: typeof import('./timeline')['NTimelineItem']
    NTooltip: typeof import('./tooltip')['NTooltip']
    NTransfer: typeof import('./transfer')['NTransfer']
    NTree: typeof import('./tree')['NTree']
    NTreeSelect: typeof import('./tree-select')['NTreeSelect']
    NA: typeof import('./typography')['NA']
    NBlockquote: typeof import('./typography')['NBlockquote']
    NH1: typeof import('./typography')['NH1']
    NH2: typeof import('./typography')['NH2']
    NH3: typeof import('./typography')['NH3']
    NH4: typeof import('./typography')['NH4']
    NH5: typeof import('./typography')['NH5']
    NH6: typeof import('./typography')['NH6']
    NHr: typeof import('./typography')['NHr']
    NLi: typeof import('./typography')['NLi']
    NOl: typeof import('./typography')['NOl']
    NP: typeof import('./typography')['NP']
    NText: typeof import('./typography')['NText']
    NUl: typeof import('./typography')['NUl']
    NUpload: typeof import('./upload')['NUpload']
    NUploadDragger: typeof import('./upload')['NUploadDragger']
    NUploadFileList: typeof import('./upload')['NUploadFileList']
    NUploadTrigger: typeof import('./upload')['NUploadTrigger']
    [x: string]: any
  }
}
export { }