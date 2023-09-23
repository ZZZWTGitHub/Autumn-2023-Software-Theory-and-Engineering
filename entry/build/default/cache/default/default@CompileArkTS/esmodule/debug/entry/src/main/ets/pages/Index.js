import SideBar from '@bundle:com.example.myapplicationforts_230915/entry/ets/pages/view/SideBar';
import SideBarContent from '@bundle:com.example.myapplicationforts_230915/entry/ets/pages/view/SideBarContent';
import SideBarContentBac from '@bundle:com.example.myapplicationforts_230915/entry/ets/pages/view/SideBarContentBac';
import utils from '@bundle:com.example.myapplicationforts_230915/entry/ets/utils/utils';
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__isShowSideBar = new ObservedPropertySimplePU(false, this, "isShowSideBar");
        this.__selectCity = new ObservedPropertyObjectPU({ locationId: 101280601, locationName: '深圳' }, this, "selectCity");
        this.__weatherUiModel = new ObservedPropertyObjectPU({
            nowTemp: 0,
            nowWeatherText: 0,
            tempMax: 0,
            tempMin: 0,
            category: 0,
            precip: 0,
            hourlyTemp: [],
            iconDays: [],
            date: '-月-日',
            day: '',
            dayArr: utils.getDayArr(),
            hoursArr: utils.getHoursArr(),
        }, this, "weatherUiModel");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.isShowSideBar !== undefined) {
            this.isShowSideBar = params.isShowSideBar;
        }
        if (params.selectCity !== undefined) {
            this.selectCity = params.selectCity;
        }
        if (params.weatherUiModel !== undefined) {
            this.weatherUiModel = params.weatherUiModel;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isShowSideBar.purgeDependencyOnElmtId(rmElmtId);
        this.__selectCity.purgeDependencyOnElmtId(rmElmtId);
        this.__weatherUiModel.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isShowSideBar.aboutToBeDeleted();
        this.__selectCity.aboutToBeDeleted();
        this.__weatherUiModel.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isShowSideBar() {
        return this.__isShowSideBar.get();
    }
    set isShowSideBar(newValue) {
        this.__isShowSideBar.set(newValue);
    }
    get selectCity() {
        return this.__selectCity.get();
    }
    set selectCity(newValue) {
        this.__selectCity.set(newValue);
    }
    get weatherUiModel() {
        return this.__weatherUiModel.get();
    }
    set weatherUiModel(newValue) {
        this.__weatherUiModel.set(newValue);
    }
    // 绘制界面
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            SideBarContainer.create(SideBarContainerType.Embed);
            SideBarContainer.showControlButton(false);
            SideBarContainer.showSideBar(this.isShowSideBar);
            SideBarContainer.autoHide(false);
            SideBarContainer.sideBarWidth(160);
            SideBarContainer.width('100%');
            if (!isInitialRender) {
                SideBarContainer.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // 侧边栏
                    SideBar(this, { selectCity: this.__selectCity, isShowSideBar: this.__isShowSideBar }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isShowSideBar) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new 
                                //灰底
                                SideBarContentBac(this, { isShowSideBar: this.__isShowSideBar }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new 
                                // 内容
                                SideBarContent(this, { isShowSideBar: this.__isShowSideBar, selectCity: this.__selectCity, weatherUiModel: this.__weatherUiModel }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        SideBarContainer.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Index(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=Index.js.map