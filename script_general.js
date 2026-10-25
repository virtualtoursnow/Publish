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
var script = {"layout":"absolute","class":"Player","watermark":false,"id":"rootPlayer","lockedOrientation":"portrait","backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"data":{"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"defaultLocale":"en","name":"Player545","initialScale":0.5,"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false},"history":{}},"minHeight":0,"minWidth":0,"start":"this.init()","scripts":{"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setValue":TDV.Tour.Script.setValue,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"mixObject":TDV.Tour.Script.mixObject,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"clone":TDV.Tour.Script.clone,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"openLink":TDV.Tour.Script.openLink,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showWindowBase":TDV.Tour.Script.showWindowBase,"showWindow":TDV.Tour.Script.showWindow,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"textToSpeech":TDV.Tour.Script.textToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPixels":TDV.Tour.Script.getPixels,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"existsKey":TDV.Tour.Script.existsKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"registerKey":TDV.Tour.Script.registerKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"playAudioList":TDV.Tour.Script.playAudioList,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"disableVR":TDV.Tour.Script.disableVR,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"showPopupImage":TDV.Tour.Script.showPopupImage,"init":TDV.Tour.Script.init,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"shareSocial":TDV.Tour.Script.shareSocial,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"enableVR":TDV.Tour.Script.enableVR,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"createTween":TDV.Tour.Script.createTween,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeJS":TDV.Tour.Script.executeJS,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"isPanorama":TDV.Tour.Script.isPanorama,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"quizStart":TDV.Tour.Script.quizStart,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"startMeasurement":TDV.Tour.Script.startMeasurement,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"initQuiz":TDV.Tour.Script.initQuiz,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizFinish":TDV.Tour.Script.quizFinish,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"unloadViewer":TDV.Tour.Script.unloadViewer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMainViewer":TDV.Tour.Script.getMainViewer,"translate":TDV.Tour.Script.translate,"setLocale":TDV.Tour.Script.setLocale},"backgroundColorRatios":[0],"propagateClick":false,"xrPanelsEnabled":true,"width":"100%","scrollBarColor":"#000000","left":589.65,"height":"100%","gap":10,"hash": "8ccd29642978fc5597b011d9c824cfed7ef47d857a0bbb1f5cb84f272c815eb7", "definitions": [{"backgroundOpacity":0,"layout":"horizontal","class":"Container","id":"Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC","overflow":"scroll","scrollBarMargin":2,"right":"0%","minHeight":20,"minWidth":20,"horizontalAlign":"center","propagateClick":false,"data":{"name":"Title"},"bottom":"0%","scrollBarColor":"#000000","height":"100%","width":"100%","children":["this.HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449"],"gap":10,"verticalAlign":"middle"},{"backgroundOpacity":0,"layout":"horizontal","class":"Container","id":"Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","overflow":"scroll","scrollBarMargin":0,"minHeight":20,"scrollBarWidth":5,"minWidth":20,"horizontalAlign":"center","propagateClick":false,"scrollBarOpacity":0,"data":{"name":"Page 1"},"scrollBarColor":"#000000","height":"75%","width":"100%","children":["this.IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","this.IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","this.IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","this.IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","this.IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE"],"gap":5,"verticalAlign":"middle"},{"backgroundOpacity":0,"class":"IconButton","id":"IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D","tabIndex":0,"data":{"name":"Next"},"minHeight":0,"minWidth":0,"horizontalAlign":"center","iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","propagateClick":false,"width":40,"height":40,"transparencyActive":true,"visible":false,"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png"},{"backgroundOpacity":0.3,"layout":"absolute","class":"Container","id":"Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","overflow":"hidden","backgroundColor":["#000000"],"scrollBarMargin":2,"left":"0%","right":"0.04%","minHeight":20,"minWidth":20,"backgroundColorRatios":[0],"propagateClick":false,"top":"0%","scrollBarColor":"#000000","data":{"name":"Global"},"height":"100%","gap":10},{"backgroundOpacity":0,"layout":"horizontal","class":"Container","id":"Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","overflow":"scroll","scrollBarMargin":0,"minHeight":20,"scrollBarWidth":5,"minWidth":20,"horizontalAlign":"center","propagateClick":false,"scrollBarOpacity":0,"data":{"name":"Previous and Next Buttons"},"scrollBarColor":"#000000","height":"50%","width":"100%","children":["this.IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","this.IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D"],"visible":false,"gap":10,"verticalAlign":"middle"},{"backgroundOpacity":0,"layout":"horizontal","class":"Container","id":"Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","overflow":"scroll","scrollBarMargin":0,"minHeight":20,"scrollBarWidth":5,"minWidth":20,"horizontalAlign":"center","propagateClick":false,"scrollBarOpacity":0,"data":{"name":"Page 2"},"scrollBarColor":"#000000","height":"75%","width":"100%","children":["this.IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","this.IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","this.IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","this.IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","this.IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2"],"visible":false,"gap":5,"verticalAlign":"middle"},{"backgroundOpacity":0,"layout":"vertical","class":"Container","id":"Container_8539079F_AA05_AF69_41E5_1179F0905967","overflow":"scroll","scrollBarMargin":2,"left":"0%","right":"0%","minHeight":20,"minWidth":20,"horizontalAlign":"center","propagateClick":false,"data":{"name":"BG"},"top":"0%","bottom":"0%","scrollBarColor":"#000000","children":["this.Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","this.Container_A634AA88_A90D_22BF_41DC_160DA6A9150B"],"gap":5,"verticalAlign":"middle"},{"backgroundOpacity":0,"class":"IconButton","id":"IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","tabIndex":0,"data":{"name":"Previous"},"minHeight":0,"minWidth":0,"horizontalAlign":"center","iconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB.png","propagateClick":false,"width":40,"height":40,"transparencyActive":true,"visible":false,"verticalAlign":"middle","rollOverIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_rollover.png","pressedIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_pressed.png"},{"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"subtitlesTextShadowOpacity":1,"progressRight":"33%","playbackBarHeadShadowHorizontalLength":0,"subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","toolTipPaddingLeft":6,"progressBarBorderColor":"#000000","vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","playbackBarLeft":0,"subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","class":"ViewerArea","progressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","playbackBarHeadShadow":true,"vrThumbstickRotationStep":20,"subtitlesBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"minHeight":50,"minWidth":100,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"progressHeight":2,"toolTipPaddingTop":4,"progressBorderSize":0,"progressBarBorderSize":0,"toolTipShadowColor":"#333138","progressBarBorderRadius":2,"firstTransitionDuration":0,"propagateClick":false,"playbackBarHeight":10,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBackgroundColorDirection":"vertical","progressBorderRadius":2,"toolTipBorderColor":"#767676","playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBottom":50,"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","width":"100%","toolTipTextShadowColor":"#000000","height":"100%","progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"subtitlesFontFamily":"Arial"},{"backgroundOpacity":0,"layout":"absolute","class":"Container","id":"Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","overflow":"hidden","scrollBarMargin":2,"minHeight":20,"minWidth":20,"propagateClick":false,"data":{"name":"Title Container-Top"},"scrollBarColor":"#000000","height":"15%","width":"100%","children":["this.Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC"],"gap":10},{"backgroundOpacity":0,"class":"IconButton","id":"IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","tabIndex":0,"data":{"name":"Previous"},"minHeight":0,"minWidth":0,"horizontalAlign":"right","iconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB.png","propagateClick":false,"height":40,"transparencyActive":true,"width":"49%","verticalAlign":"middle","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0EDC1E39_0129_EFBF_4165_7A635EE959E4, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); visibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0EC19099_012A_137F_415F_374320FBB328, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); invisibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096)","rollOverIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_rollover.png","pressedIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_pressed.png"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png","class":"IconButton","id":"IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","tabIndex":0,"backgroundColor":[],"data":{"name":"T16-DIG4-FOOTBALL OVAL"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54.png","propagateClick":false,"height":"79.58%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_60B411D0_6F46_66D8_41D9_B59EA2B87EFA.source'), '_blank')","rollOverIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png","pressedIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","class":"IconButton","id":"IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","tabIndex":0,"backgroundColor":[],"data":{"name":"T60-COMO DR."},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378.png","propagateClick":false,"height":"79.62%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_B6924F97_AA07_DF79_41E2_5427144B8EEC.source'), '_blank')","rollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","pressedIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png","class":"IconButton","id":"IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","tabIndex":0,"backgroundColor":[],"data":{"name":"T16-DIG5-MSAC"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A.png","propagateClick":false,"height":"79.58%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_60A5F631_6F46_2D58_4196_D543D12B9432.source'), '_blank')","rollOverIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png","pressedIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","class":"IconButton","id":"IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","tabIndex":0,"backgroundColor":[],"data":{"name":"T60 HUCKERBY DR"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5.png","propagateClick":false,"height":"79.58%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_B767831E_AA05_A768_41E5_3C7D557BB019.source'), '_blank')","rollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","pressedIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png"},{"id":"mainPlayList","items":[{"camera":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","media":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","frames":[{"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","cube":{"levels":[{"height":4096,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/0/{row}_{column}.webp","rowCount":8,"colCount":48,"tags":"ondemand","width":24576,"class":"TiledImageResourceLevel"},{"height":2048,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/1/{row}_{column}.webp","rowCount":4,"colCount":24,"tags":"ondemand","width":12288,"class":"TiledImageResourceLevel"},{"height":1024,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/2/{row}_{column}.webp","rowCount":2,"colCount":12,"tags":"ondemand","width":6144,"class":"TiledImageResourceLevel"},{"height":512,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/3/{row}_{column}.webp","rowCount":1,"colCount":6,"tags":["ondemand","preload"],"width":3072,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","hfovMax":130,"hfov":360,"vfov":180,"label":trans('panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35.label'),"id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","data":{"label":"BG"}},{"backgroundOpacity":0,"layout":"horizontal","class":"Container","id":"Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7","overflow":"scroll","scrollBarMargin":0,"minHeight":20,"scrollBarWidth":5,"minWidth":20,"horizontalAlign":"center","propagateClick":false,"scrollBarOpacity":0,"data":{"name":"Text"},"scrollBarColor":"#000000","height":"50%","width":"100%","children":["this.HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF"],"gap":10},{"id":"effect_0EC19099_012A_137F_415F_374320FBB328","duration":300,"to":"right","class":"SlideOutEffect"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","class":"IconButton","id":"IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","tabIndex":0,"backgroundColor":[],"data":{"name":"T16-DIG2-STEPHEN ROAD"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676.png","propagateClick":false,"height":"79.58%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_B766373E_AA0B_AFA8_41C4_A532261954AE.source'), '_blank')","rollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","pressedIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png"},{"backgroundOpacity":0,"layout":"horizontal","class":"Container","id":"Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","overflow":"scroll","scrollBarMargin":0,"minHeight":20,"scrollBarWidth":5,"minWidth":20,"horizontalAlign":"center","propagateClick":false,"scrollBarOpacity":0,"data":{"name":"Next Button"},"scrollBarColor":"#000000","height":"50%","width":"100%","children":["this.Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","this.IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3"],"gap":10,"verticalAlign":"middle"},{"backgroundOpacity":0,"layout":"horizontal","class":"Container","id":"Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","overflow":"scroll","scrollBarMargin":0,"minHeight":20,"scrollBarWidth":5,"minWidth":20,"horizontalAlign":"center","propagateClick":false,"scrollBarOpacity":0,"data":{"name":"Previous Button"},"scrollBarColor":"#000000","height":"50%","width":"100%","children":["this.IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","this.Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01"],"visible":false,"gap":10,"verticalAlign":"middle"},{"enterPointingToHorizon":true,"id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","initialPosition":{"pitch":0,"yaw":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera"},{"id":"effect_0EDC1E39_0129_EFBF_4165_7A635EE959E4","duration":300,"class":"SlideInEffect","from":"left"},{"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","aaEnabled":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate"},{"rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"backgroundOpacity":0,"rollOverFontSize":"24px","layout":"horizontal","rollOverBackgroundColor":["#000000","#000000"],"class":"Button","pressedBackgroundColorRatios":[0],"id":"Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01","fontColor":"#FFFFFF","rollOverShadow":false,"backgroundColor":["#000000"],"data":{"name":"Button house info"},"rollOverBackgroundOpacity":0,"pressedBackgroundColor":["#000000"],"minHeight":1,"fontSize":"22px","minWidth":1,"fontFamily":"Montserrat","pressedBackgroundOpacity":0,"backgroundColorRatios":[0],"tabIndex":0,"propagateClick":false,"paddingTop":0,"iconHeight":0,"pressedRollOverFontSize":"24px","paddingBottom":0,"paddingLeft":0,"height":40,"paddingRight":0,"pressedFontSize":"24px","iconWidth":0,"verticalAlign":"middle","width":"51%","borderColor":"#000000","label":trans('Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01.label')},{"backgroundOpacity":0,"layout":"vertical","class":"Container","id":"Container_A634AA88_A90D_22BF_41DC_160DA6A9150B","overflow":"hidden","scrollBarMargin":0,"minHeight":20,"scrollBarWidth":5,"minWidth":20,"horizontalAlign":"center","data":{"name":"Bottom"},"propagateClick":false,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":126,"width":"100%","children":["this.Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","this.Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7"],"gap":10,"verticalAlign":"middle"},{"backgroundOpacity":0,"class":"HTMLText","id":"HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449","scrollBarMargin":0,"minHeight":1,"scrollBarWidth":5,"minWidth":1,"propagateClick":false,"paddingTop":40,"scrollBarOpacity":0,"paddingBottom":20,"paddingLeft":20,"scrollBarColor":"#000000","data":{"name":"HTMLText53815"},"height":"100%","paddingRight":20,"width":"100%","html":trans('HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449.html'),"click":"this.openLink(this.translate('LinkBehaviour_9A0923FC_B35F_DCEE_41DE_B49B60399DFB.source'), '_blank')"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","class":"IconButton","id":"IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","tabIndex":0,"backgroundColor":[],"data":{"name":"T16DIG1-SUMMERHILL RD"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E.png","propagateClick":false,"height":"79.58%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_60F6293D_6F46_2748_41CE_937B916D458C.source'), '_blank')","rollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","pressedIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png"},{"id":"effect_0E9B7009_012A_135F_4160_9151ACACFAC0","duration":300,"to":"left","class":"SlideOutEffect"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","class":"IconButton","id":"IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2.png","propagateClick":false,"height":"79.62%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","pressedIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png"},{"backgroundOpacity":0,"class":"HTMLText","id":"HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF","scrollBarMargin":0,"minHeight":1,"scrollBarWidth":5,"minWidth":1,"propagateClick":false,"scrollBarOpacity":0,"scrollBarColor":"#000000","data":{"name":"HTMLText53815"},"height":"100%","width":"100%","html":trans('HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF.html'),"click":"this.openLink(this.translate('LinkBehaviour_9A96C29C_B359_3F2E_41D7_BFA6BC45A076.source'), '_blank')"},{"id":"effect_0EA5B6B9_013A_3CBF_4161_D23ED08BE5E0","duration":500,"class":"SlideInEffect","from":"right"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","class":"IconButton","id":"IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","tabIndex":0,"backgroundColor":[],"data":{"name":"T 16-DIG 3 - PRINCESS HIGHWAY"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C.png","propagateClick":false,"height":"79.62%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_F4FD0EFA_FB13_9599_41DA_7C3C1D948291.source'), '_blank')","rollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","pressedIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png"},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","class":"IconButton","id":"IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","tabIndex":0,"backgroundColor":[],"data":{"name":"T60-DIG18-BEACONSFIELD"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8.png","propagateClick":false,"height":"79.58%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_B49D8306_AA0A_E75B_41D3_85E496CF6B47.source'), '_blank')","rollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","pressedIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png"},{"rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"backgroundOpacity":0,"rollOverFontSize":"24px","layout":"horizontal","rollOverBackgroundColor":["#000000","#000000"],"class":"Button","pressedBackgroundColorRatios":[0],"id":"Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","fontColor":"#FFFFFF","rollOverShadow":false,"backgroundColor":["#000000"],"data":{"name":"Button house info"},"rollOverBackgroundOpacity":0,"pressedBackgroundColor":["#000000"],"minHeight":1,"fontSize":"22px","minWidth":1,"horizontalAlign":"right","fontFamily":"Montserrat","pressedBackgroundOpacity":0,"backgroundColorRatios":[0],"tabIndex":0,"propagateClick":false,"paddingTop":0,"iconHeight":0,"pressedRollOverFontSize":"24px","paddingBottom":0,"paddingLeft":0,"height":40,"paddingRight":0,"pressedFontSize":"24px","iconWidth":0,"verticalAlign":"middle","width":"50%","borderColor":"#000000","label":trans('Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27.label')},{"backgroundOpacity":0.3,"pressedRollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","class":"IconButton","id":"IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","tabIndex":0,"backgroundColor":[],"data":{"name":"T33-DIG1-WATSON ROAD"},"minHeight":1,"minWidth":1,"horizontalAlign":"center","backgroundColorRatios":[],"iconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE.png","propagateClick":false,"height":"79.62%","transparencyActive":true,"width":"18.99%","verticalAlign":"middle","click":"this.openLink(this.translate('LinkBehaviour_B456E7F6_AA0B_AEB8_41B1_3BEDD14331E4.source'), '_blank')","rollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","pressedIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png"},{"backgroundOpacity":0,"class":"IconButton","id":"IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3","tabIndex":0,"data":{"name":"Next"},"minHeight":0,"minWidth":0,"iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","propagateClick":false,"height":40,"transparencyActive":true,"width":"50%","verticalAlign":"middle","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0EA5B6B9_013A_3CBF_4161_D23ED08BE5E0, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); visibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0E9B7009_012A_135F_4160_9151ACACFAC0, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); invisibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C)","rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png"}],"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer","this.Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","this.Container_8539079F_AA05_AF69_41E5_1179F0905967"]};
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
//Generated with v2026.1.2, Sun Oct 25 2026