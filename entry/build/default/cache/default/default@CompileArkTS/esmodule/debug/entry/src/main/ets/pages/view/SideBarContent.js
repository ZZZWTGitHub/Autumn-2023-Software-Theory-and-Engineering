export default class SideBarContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.lineHeight = 40;
        this.lineWidth = 280;
        this.pointArr = [20, 20, 20, 20, 20];
        this.__selectDay = new ObservedPropertySimplePU('今天', this, "selectDay");
        this.__isShowSideBar = new SynchedPropertySimpleTwoWayPU(params.isShowSideBar, this, "isShowSideBar");
        this.__selectCity = new SynchedPropertyObjectTwoWayPU(params.selectCity, this, "selectCity");
        this.__weatherUiModel = new SynchedPropertyObjectTwoWayPU(params.weatherUiModel, this, "weatherUiModel");
        this.setInitiallyProvidedValue(params);
        this.declareWatch("weatherUiModel", this.calculatePoint);
    }
    setInitiallyProvidedValue(params) {
        if (params.lineHeight !== undefined) {
            this.lineHeight = params.lineHeight;
        }
        if (params.lineWidth !== undefined) {
            this.lineWidth = params.lineWidth;
        }
        if (params.pointArr !== undefined) {
            this.pointArr = params.pointArr;
        }
        if (params.selectDay !== undefined) {
            this.selectDay = params.selectDay;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectDay.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowSideBar.purgeDependencyOnElmtId(rmElmtId);
        this.__selectCity.purgeDependencyOnElmtId(rmElmtId);
        this.__weatherUiModel.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectDay.aboutToBeDeleted();
        this.__isShowSideBar.aboutToBeDeleted();
        this.__selectCity.aboutToBeDeleted();
        this.__weatherUiModel.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get selectDay() {
        return this.__selectDay.get();
    }
    set selectDay(newValue) {
        this.__selectDay.set(newValue);
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.padding({ left: 38, right: 24, top: 20 });
            Column.height('100%');
            Column.width('100%');
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 头部
            Row.create();
            // 头部
            Row.width('100%');
            if (!isInitialRender) {
                // 头部
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.example.myapplicationforts_230915", "moduleName": "entry" });
            Image.width(28);
            Image.height(28);
            Image.onClick(() => {
                this.isShowSideBar = !this.isShowSideBar;
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.example.myapplicationforts_230915", "moduleName": "entry" });
            Image.width(28);
            Image.height(28);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 头部
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 天气和城市
            Row.create();
            // 天气和城市
            Row.margin({ top: 130 });
            // 天气和城市
            Row.width('100%');
            if (!isInitialRender) {
                // 天气和城市
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.weatherUiModel.nowTemp.toString());
            Text.fontSize(120);
            Text.fontColor('#E6000000');
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('°');
            Text.fontSize(48);
            Text.fontColor('#E6000000');
            Text.fontWeight(FontWeight.Bold);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.weatherUiModel.nowWeatherText);
            Text.fontSize(38);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.selectCity.locationName);
            Text.fontSize(38);
            Text.margin({ top: 50 });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        // 天气和城市
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 日期、最高温度、最低温度
            Text.create(this.weatherUiModel.date + '  ' + this.weatherUiModel.day + '  ' +
                this.weatherUiModel.tempMin + '℃' + '/' + this.weatherUiModel.tempMax + '℃');
            // 日期、最高温度、最低温度
            Text.fontSize(16);
            // 日期、最高温度、最低温度
            Text.margin({ left: 4 });
            // 日期、最高温度、最低温度
            Text.textAlign(TextAlign.Start);
            // 日期、最高温度、最低温度
            Text.width('100%');
            if (!isInitialRender) {
                // 日期、最高温度、最低温度
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 日期、最高温度、最低温度
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //未来两小时天气和风向
            Row.create();
            //未来两小时天气和风向
            Row.margin({ top: 24 });
            //未来两小时天气和风向
            Row.width('100%');
            if (!isInitialRender) {
                //未来两小时天气和风向
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundColor('#05000000');
            Column.padding({ top: 12, bottom: 15 });
            Column.border({ radius: 14 });
            Column.size({ width: 140, height: 100 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('未来两小时');
            Text.fontSize(14);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.weatherUiModel.precip > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create('有雨');
                        Text.fontSize(32);
                        Text.fontColor('#FFF7B500');
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                });
            }
            else if (this.weatherUiModel.precip >= 0) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create('无雨');
                        Text.fontSize(32);
                        Text.fontColor('#FF6DD400');
                        if (!isInitialRender) {
                            Text.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Text.create('无雨');
                        Text.fontSize(32);
                        Text.fontColor('#FF6DD400');
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
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundColor('#05000000');
            Column.padding({ top: 12, bottom: 15 });
            Column.margin({ left: 14 });
            Column.border({ radius: 14 });
            Column.size({ width: 140, height: 100 });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('风向');
            Text.fontSize(14);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.weatherUiModel.category);
            Text.fontSize(32);
            Text.fontColor('#FF6DD400');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        //未来两小时天气和风向
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 实时温度信息
            Column.create();
            // 实时温度信息
            Column.margin({ top: 39 });
            // 实时温度信息
            Column.width('100%');
            if (!isInitialRender) {
                // 实时温度信息
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            //时间
            Row.create();
            //时间
            Row.margin({ bottom: 10 });
            if (!isInitialRender) {
                //时间
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Text.create(item);
                    Text.textAlign(TextAlign.Center);
                    Text.layoutWeight(1);
                    if (!isInitialRender) {
                        Text.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, this.weatherUiModel.hoursArr, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        //时间
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            // 温度折线
            if (this.weatherUiModel.hourlyTemp.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Polyline.create({ width: this.lineWidth, height: this.lineHeight });
                        Polyline.points([[0, this.pointArr[0]],
                            [(this.lineWidth * 0.25).toString(), this.pointArr[1]], [(this.lineWidth * 0.5).toString(), this.pointArr[2]],
                            [(this.lineWidth * 0.75).toString(), this.pointArr[3]], [(this.lineWidth * 1).toString(), this.pointArr[4]]]);
                        Polyline.fillOpacity(0);
                        Polyline.stroke('#AAB8CA');
                        Polyline.strokeWidth(1);
                        if (!isInitialRender) {
                            Polyline.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Row.create();
                        Row.margin({ top: 35 });
                        if (!isInitialRender) {
                            Row.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Text.create(item.temp + '℃');
                                Text.textAlign(TextAlign.Center);
                                Text.layoutWeight(1);
                                if (!isInitialRender) {
                                    Text.pop();
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                            Text.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.weatherUiModel.hourlyTemp, forEachItemGenFunction);
                        if (!isInitialRender) {
                            ForEach.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    ForEach.pop();
                    Row.pop();
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        // 实时温度信息
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 近一周天气
            Column.create();
            // 近一周天气
            Column.margin({ top: 30 });
            // 近一周天气
            Column.width('100%');
            if (!isInitialRender) {
                // 近一周天气
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 天气icon
            Row.create();
            if (!isInitialRender) {
                // 天气icon
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.align(Alignment.Center);
                    Column.layoutWeight(1);
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create($rawfile(item.iconDay));
                    Image.size({ width: 24, height: 24 });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.weatherUiModel.iconDays, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 天气icon
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 日期
            Row.create();
            // 日期
            Row.margin({ top: 18 });
            if (!isInitialRender) {
                // 日期
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Column.create();
                    Column.layoutWeight(1);
                    Column.align(Alignment.Center);
                    if (!isInitialRender) {
                        Column.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    If.create();
                    if (item == this.selectDay) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                Text.create(item);
                                Text.fontColor(Color.White);
                                Text.textAlign(TextAlign.Center);
                                Text.height(40);
                                Text.width(40);
                                Text.border({ radius: 40 });
                                Text.fontSize(14);
                                Text.backgroundColor(Color.Black);
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
                                Text.create(item);
                                Text.textAlign(TextAlign.Center);
                                Text.height(40);
                                Text.width(40);
                                Text.fontSize(14);
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
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.weatherUiModel.dayArr, forEachItemGenFunction);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 日期
        Row.pop();
        // 近一周天气
        Column.pop();
        Column.pop();
    }
    //点位置计算
    calculatePoint() {
        if (this.weatherUiModel.hourlyTemp.length > 0) {
            for (var i = 0; i < 5; i++) {
                let tempArg = parseInt(this.weatherUiModel.hourlyTemp[0].temp);
                if (i == 0) {
                    this.pointArr[i] = this.lineHeight - tempArg;
                }
                else {
                    this.pointArr[i] = this.lineHeight -
                        (((parseInt(this.weatherUiModel.hourlyTemp[i].temp) - tempArg) * 3) +
                            parseInt(this.weatherUiModel.hourlyTemp[i].temp));
                }
            }
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=SideBarContent.js.map