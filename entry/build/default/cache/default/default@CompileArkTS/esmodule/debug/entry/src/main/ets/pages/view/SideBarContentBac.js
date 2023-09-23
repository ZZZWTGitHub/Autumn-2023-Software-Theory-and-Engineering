export default class SideBarContentBac extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__isShowSideBar = new SynchedPropertySimpleTwoWayPU(params.isShowSideBar, this, "isShowSideBar");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isShowSideBar.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isShowSideBar.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isShowSideBar() {
        return this.__isShowSideBar.get();
    }
    set isShowSideBar(newValue) {
        this.__isShowSideBar.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //灰色背景
            Column.create();
            //灰色背景
            Column.size({ width: '100%', height: '100%' });
            //灰色背景
            Column.backgroundColor('#FF818385');
            //灰色背景
            Column.onClick(() => {
                this.isShowSideBar = !this.isShowSideBar;
            });
            if (!isInitialRender) {
                //灰色背景
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        //灰色背景
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=SideBarContentBac.js.map