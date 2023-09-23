export default class SideBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__selectCity = new SynchedPropertyObjectTwoWayPU(params.selectCity, this, "selectCity");
        this.__isShowSideBar = new SynchedPropertySimpleTwoWayPU(params.isShowSideBar, this, "isShowSideBar");
        this.__cityArr = new ObservedPropertyObjectPU([
            { locationId: 101010100, locationName: '北京' }, { locationId: 101280601, locationName: '深圳' },
            { locationId: 101020100, locationName: '上海' }, { locationId: 101250101, locationName: '长沙' },
            { locationId: 101310101, locationName: '海口' }, { locationId: 101070201, locationName: '大连' }
        ], this, "cityArr");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.cityArr !== undefined) {
            this.cityArr = params.cityArr;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectCity.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowSideBar.purgeDependencyOnElmtId(rmElmtId);
        this.__cityArr.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectCity.aboutToBeDeleted();
        this.__isShowSideBar.aboutToBeDeleted();
        this.__cityArr.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get selectCity() {
        return this.__selectCity.get();
    }
    set selectCity(newValue) {
        this.__selectCity.set(newValue);
    }
    get isShowSideBar() {
        return this.__isShowSideBar.get();
    }
    set isShowSideBar(newValue) {
        this.__isShowSideBar.set(newValue);
    }
    get cityArr() {
        return this.__cityArr.get();
    }
    set cityArr(newValue) {
        this.__cityArr.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.align(Alignment.TopStart);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('城市选择');
            Text.fontSize(28);
            Text.width('100%');
            Text.fontColor('#E6000000');
            Text.padding({ top: 15, left: 22 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: 8, initialIndex: 0 });
            List.width('100%');
            List.height('80%');
            List.margin({ top: 26 });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.onClick(() => {
                            this.selectCity = item;
                            this.isShowSideBar = !this.isShowSideBar;
                        });
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            If.create();
                            if (this.selectCity.locationName == item.locationName) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(item.locationName);
                                        Text.width('100%');
                                        Text.fontSize(20);
                                        Text.fontColor('#E64F7EFD');
                                        Text.backgroundColor('#1A4F7EFD');
                                        Text.padding({ top: 10, bottom: 10, left: 22 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(item.locationName);
                                        Text.width('100%');
                                        Text.fontSize(20);
                                        Text.borderRadius(10);
                                        Text.fontColor('#E6000000');
                                        Text.padding({ top: 10, bottom: 10, left: 22 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                });
                            }
                            if (!isInitialRender) {
                                If.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        If.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            If.create();
                            if (this.selectCity.locationName == item.locationName) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(item.locationName);
                                        Text.width('100%');
                                        Text.fontSize(20);
                                        Text.fontColor('#E64F7EFD');
                                        Text.backgroundColor('#1A4F7EFD');
                                        Text.padding({ top: 10, bottom: 10, left: 22 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                    this.observeComponentCreation((elmtId, isInitialRender) => {
                                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                        Text.create(item.locationName);
                                        Text.width('100%');
                                        Text.fontSize(20);
                                        Text.borderRadius(10);
                                        Text.fontColor('#E6000000');
                                        Text.padding({ top: 10, bottom: 10, left: 22 });
                                        if (!isInitialRender) {
                                            Text.pop();
                                        }
                                        ViewStackProcessor.StopGetAccessRecording();
                                    });
                                    Text.pop();
                                });
                            }
                            if (!isInitialRender) {
                                If.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        If.pop();
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.cityArr, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=SideBar.js.map