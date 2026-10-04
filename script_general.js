(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"width":"100%","start":"this.init()","scripts":{"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"clone":TDV.Tour.Script.clone,"initQuiz":TDV.Tour.Script.initQuiz,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"openLink":TDV.Tour.Script.openLink,"quizStart":TDV.Tour.Script.quizStart,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"mixObject":TDV.Tour.Script.mixObject,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"translate":TDV.Tour.Script.translate,"setValue":TDV.Tour.Script.setValue,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getKey":TDV.Tour.Script.getKey,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"enableVR":TDV.Tour.Script.enableVR,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"shareSocial":TDV.Tour.Script.shareSocial,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"registerKey":TDV.Tour.Script.registerKey,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"init":TDV.Tour.Script.init,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMapLocation":TDV.Tour.Script.setMapLocation,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizFinish":TDV.Tour.Script.quizFinish,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"isPanorama":TDV.Tour.Script.isPanorama,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"createTween":TDV.Tour.Script.createTween,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"downloadFile":TDV.Tour.Script.downloadFile,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlays":TDV.Tour.Script.getOverlays,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"playAudioList":TDV.Tour.Script.playAudioList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"unloadViewer":TDV.Tour.Script.unloadViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"showWindowBase":TDV.Tour.Script.showWindowBase,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showWindow":TDV.Tour.Script.showWindow,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"toggleVR":TDV.Tour.Script.toggleVR,"executeJS":TDV.Tour.Script.executeJS,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"existsKey":TDV.Tour.Script.existsKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"disableVR":TDV.Tour.Script.disableVR,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setLocale":TDV.Tour.Script.setLocale,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMainViewer":TDV.Tour.Script.getMainViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore},"xrPanelsEnabled":true,"data":{"locales":{"en":"locale/en.txt"},"name":"Player545","defaultLocale":"en","displayTooltipInTouchScreens":true,"initialScale":0.5,"history":{},"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1,"speechOnQuizQuestion":false}},"backgroundColor":["#FFFFFF"],"id":"rootPlayer","layout":"absolute","propagateClick":false,"class":"Player","minHeight":0,"minWidth":0,"gap":10,"backgroundColorRatios":[0],"scrollBarMargin":2,"scrollBarColor":"#000000","watermark":false,"lockedOrientation":"portrait","defaultMenu":["fullscreen","mute","rotation"],"height":"100%","children":["this.MainViewer","this.Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","this.Container_8539079F_AA05_AF69_41E5_1179F0905967"],"hash": "f90891f3c4468eedb5028d1fe73068f6a0e8f3b4448d2d313f39a981470cd2e6", "definitions": [{"rollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","id":"IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.62%","width":"18.99%","pressedIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","enterPointingToHorizon":true},{"horizontalAlign":"center","backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"overflow":"scroll","id":"Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7","layout":"horizontal","data":{"name":"Text"},"propagateClick":false,"class":"Container","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"scrollBarColor":"#000000","height":"50%","children":["this.HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF"],"width":"100%"},{"backgroundOpacity":0,"scrollBarMargin":2,"overflow":"hidden","id":"Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","layout":"absolute","data":{"name":"Title Container-Top"},"propagateClick":false,"class":"Container","minHeight":20,"minWidth":20,"gap":10,"scrollBarColor":"#000000","height":"15%","children":["this.Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC"],"width":"100%"},{"horizontalAlign":"center","backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"overflow":"scroll","id":"Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","layout":"horizontal","data":{"name":"Next Button"},"propagateClick":false,"class":"Container","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"scrollBarColor":"#000000","height":"50%","verticalAlign":"middle","children":["this.Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","this.IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3"],"width":"100%"},{"rollOverIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_rollover.png","horizontalAlign":"center","backgroundOpacity":0,"tabIndex":0,"id":"IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","data":{"name":"Previous"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":40,"width":40,"transparencyActive":true,"visible":false,"pressedIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_pressed.png"},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"viewerArea":"this.MainViewer","aaEnabled":true,"displayPlaybackBar":true,"arrowKeysAction":"translate"},{"id":"effect_0EA5B6B9_013A_3CBF_4161_D23ED08BE5E0","duration":500,"class":"SlideInEffect","from":"right"},{"rollOverIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_rollover.png","horizontalAlign":"right","backgroundOpacity":0,"tabIndex":0,"id":"IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","data":{"name":"Previous"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":40,"transparencyActive":true,"width":"49%","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0EDC1E39_0129_EFBF_4165_7A635EE959E4, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); visibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0EC19099_012A_137F_415F_374320FBB328, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); invisibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096)","pressedIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_pressed.png"},{"html":trans('HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449.html'),"paddingRight":20,"backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"id":"HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449","paddingTop":40,"paddingBottom":20,"data":{"name":"HTMLText53815"},"propagateClick":false,"class":"HTMLText","minHeight":1,"scrollBarOpacity":0,"minWidth":1,"scrollBarColor":"#000000","height":"100%","width":"100%","click":"this.openLink(this.translate('LinkBehaviour_9A0923FC_B35F_DCEE_41DE_B49B60399DFB.source'), '_blank')","paddingLeft":20},{"backgroundOpacity":0.3,"left":"0%","backgroundColor":["#000000"],"overflow":"hidden","id":"Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","layout":"absolute","right":"0.04%","propagateClick":false,"class":"Container","minHeight":20,"minWidth":20,"gap":10,"backgroundColorRatios":[0],"top":"0%","scrollBarColor":"#000000","data":{"name":"Global"},"scrollBarMargin":2,"height":"100%"},{"backgroundOpacity":0,"horizontalAlign":"center","scrollBarMargin":2,"overflow":"scroll","id":"Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC","layout":"horizontal","right":"0%","propagateClick":false,"class":"Container","data":{"name":"Title"},"minHeight":20,"minWidth":20,"gap":10,"bottom":"0%","scrollBarColor":"#000000","height":"100%","verticalAlign":"middle","children":["this.HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449"],"width":"100%"},{"horizontalAlign":"center","backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"overflow":"scroll","id":"Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","layout":"horizontal","data":{"name":"Page 1"},"propagateClick":false,"class":"Container","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":5,"scrollBarColor":"#000000","height":"75%","verticalAlign":"middle","children":["this.IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","this.IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","this.IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","this.IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","this.IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5"],"width":"100%"},{"pressedBackgroundColorRatios":[0],"paddingRight":0,"pressedBackgroundOpacity":0,"backgroundOpacity":0,"fontSize":"22px","backgroundColor":["#000000"],"fontFamily":"Montserrat","tabIndex":0,"id":"Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01","paddingTop":0,"rollOverBackgroundColor":["#000000","#000000"],"layout":"horizontal","pressedBackgroundColor":["#000000"],"paddingBottom":0,"rollOverBackgroundOpacity":0,"iconHeight":0,"fontColor":"#FFFFFF","pressedRollOverFontSize":"24px","label":trans('Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01.label'),"propagateClick":false,"class":"Button","data":{"name":"Button house info"},"rollOverFontSize":"24px","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[0],"pressedFontSize":"24px","height":40,"borderColor":"#000000","iconWidth":0,"width":"51%","rollOverShadow":false,"rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"paddingLeft":0},{"rollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","id":"IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.58%","width":"18.99%","pressedIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png"},{"horizontalAlign":"center","backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"overflow":"scroll","id":"Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","layout":"horizontal","data":{"name":"Previous and Next Buttons"},"propagateClick":false,"class":"Container","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"scrollBarColor":"#000000","height":"50%","verticalAlign":"middle","children":["this.IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","this.IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D"],"visible":false,"width":"100%"},{"id":"effect_0E9B7009_012A_135F_4160_9151ACACFAC0","duration":300,"class":"SlideOutEffect","to":"left"},{"id":"effect_0EDC1E39_0129_EFBF_4165_7A635EE959E4","duration":300,"class":"SlideInEffect","from":"left"},{"rollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","id":"IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.58%","width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B766373E_AA0B_AFA8_41C4_A532261954AE.source'), '_blank')","pressedIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png"},{"rollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","id":"IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.58%","width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B767831E_AA05_A768_41E5_3C7D557BB019.source'), '_blank')","pressedIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png"},{"rollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","id":"IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","data":{"name":"T 16-DIG 3 - Princesss Highway"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.62%","width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_F4FD0EFA_FB13_9599_41DA_7C3C1D948291.source'), '_blank')","pressedIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png"},{"rollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","id":"IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.58%","width":"18.99%","pressedIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png"},{"rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","horizontalAlign":"center","backgroundOpacity":0,"tabIndex":0,"id":"IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D","data":{"name":"Next"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":40,"width":40,"transparencyActive":true,"visible":false,"pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png"},{"rollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","id":"IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.62%","width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B6924F97_AA07_DF79_41E2_5427144B8EEC.source'), '_blank')","pressedIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_8539079F_AA05_AF69_41E5_1179F0905967","scrollBarMargin":2,"overflow":"scroll","layout":"vertical","left":"0%","right":"0%","propagateClick":false,"class":"Container","minHeight":20,"minWidth":20,"gap":5,"top":"0%","bottom":"0%","data":{"name":"BG"},"scrollBarColor":"#000000","verticalAlign":"middle","children":["this.Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","this.Container_A634AA88_A90D_22BF_41DC_160DA6A9150B"]},{"rollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","id":"IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.62%","width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B456E7F6_AA0B_AEB8_41B1_3BEDD14331E4.source'), '_blank')","pressedIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png"},{"rollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","id":"IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.58%","width":"18.99%","pressedIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png"},{"rollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","backgroundOpacity":0.3,"horizontalAlign":"center","tabIndex":0,"backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","id":"IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","data":{"name":"IconButton"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8.png","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[],"transparencyActive":true,"height":"79.58%","width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B49D8306_AA0A_E75B_41D3_85E496CF6B47.source'), '_blank')","pressedIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png"},{"horizontalAlign":"center","backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"overflow":"hidden","id":"Container_A634AA88_A90D_22BF_41DC_160DA6A9150B","layout":"vertical","data":{"name":"Bottom"},"propagateClick":false,"class":"Container","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"scrollBarColor":"#000000","height":126,"verticalAlign":"middle","children":["this.Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","this.Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7"],"width":"100%"},{"html":trans('HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF.html'),"backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"id":"HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF","data":{"name":"HTMLText53815"},"propagateClick":false,"class":"HTMLText","minHeight":1,"scrollBarOpacity":0,"minWidth":1,"scrollBarColor":"#000000","height":"100%","width":"100%","click":"this.openLink(this.translate('LinkBehaviour_9A96C29C_B359_3F2E_41D7_BFA6BC45A076.source'), '_blank')"},{"id":"effect_0EC19099_012A_137F_415F_374320FBB328","duration":300,"class":"SlideOutEffect","to":"right"},{"class":"Panorama","thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","data":{"label":"BG"},"vfov":180,"hfov":360,"label":trans('panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35.label'),"id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","rowCount":8,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","height":4096,"colCount":48,"width":24576},{"tags":"ondemand","rowCount":4,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","height":2048,"colCount":24,"width":12288},{"tags":"ondemand","rowCount":2,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","height":1024,"colCount":12,"width":6144},{"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","height":512,"colCount":6,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp"}],"hfovMax":130},{"horizontalAlign":"center","backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"overflow":"scroll","id":"Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","layout":"horizontal","data":{"name":"Previous Button"},"propagateClick":false,"class":"Container","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"scrollBarColor":"#000000","height":"50%","verticalAlign":"middle","children":["this.IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","this.Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01"],"visible":false,"width":"100%"},{"id":"mainPlayList","items":[{"camera":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","media":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"horizontalAlign":"center","backgroundOpacity":0,"scrollBarWidth":5,"scrollBarMargin":0,"overflow":"scroll","id":"Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","layout":"horizontal","data":{"name":"Page 2"},"propagateClick":false,"class":"Container","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":5,"scrollBarColor":"#000000","height":"75%","verticalAlign":"middle","children":["this.IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","this.IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","this.IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","this.IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","this.IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2"],"visible":false,"width":"100%"},{"progressBorderRadius":2,"width":"100%","toolTipFontColor":"#606060","playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowHorizontalLength":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"surfaceReticleColor":"#FFFFFF","progressOpacity":0.7,"subtitlesTextShadowOpacity":1,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","toolTipPaddingBottom":4,"subtitlesFontColor":"#FFFFFF","subtitlesTop":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"vrThumbstickRotationStep":20,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarLeft":0,"toolTipPaddingRight":6,"playbackBarHeadHeight":15,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadShadowVerticalLength":0,"playbackBarHeadBorderSize":0,"id":"MainViewer","subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadow":true,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"progressBackgroundColor":["#000000"],"firstTransitionDuration":0,"subtitlesBottom":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"propagateClick":false,"class":"ViewerArea","toolTipShadowColor":"#333138","minHeight":50,"playbackBarBottom":5,"progressHeight":2,"minWidth":100,"vrPointerSelectionTime":2000,"progressBarBorderSize":0,"toolTipFontFamily":"Arial","progressBorderSize":0,"playbackBarHeight":10,"progressBarBorderRadius":2,"toolTipTextShadowColor":"#000000","toolTipBorderColor":"#767676","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarRight":0,"playbackBarHeadWidth":6,"playbackBarProgressBorderRadius":0,"height":"100%","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","progressLeft":"33%"},{"rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","backgroundOpacity":0,"tabIndex":0,"id":"IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3","data":{"name":"Next"},"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","minHeight":0,"minWidth":0,"verticalAlign":"middle","height":40,"transparencyActive":true,"width":"50%","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0EA5B6B9_013A_3CBF_4161_D23ED08BE5E0, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); visibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0E9B7009_012A_135F_4160_9151ACACFAC0, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); invisibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C)","pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png"},{"pressedBackgroundColorRatios":[0],"paddingRight":0,"horizontalAlign":"right","pressedBackgroundOpacity":0,"backgroundOpacity":0,"fontSize":"22px","backgroundColor":["#000000"],"fontFamily":"Montserrat","tabIndex":0,"id":"Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","paddingTop":0,"rollOverBackgroundColor":["#000000","#000000"],"layout":"horizontal","pressedBackgroundColor":["#000000"],"paddingBottom":0,"rollOverBackgroundOpacity":0,"iconHeight":0,"fontColor":"#FFFFFF","pressedRollOverFontSize":"24px","label":trans('Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27.label'),"propagateClick":false,"class":"Button","data":{"name":"Button house info"},"rollOverFontSize":"24px","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColorRatios":[0],"pressedFontSize":"24px","height":40,"borderColor":"#000000","iconWidth":0,"width":"50%","rollOverShadow":false,"rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"paddingLeft":0}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Sat Oct 3 2026