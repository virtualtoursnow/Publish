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
var script = {"watermark":false,"id":"rootPlayer","lockedOrientation":"portrait","backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"data":{"locales":{"en":"locale/en.txt"},"history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"en","name":"Player545","initialScale":0.5,"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false}},"scripts":{"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeJS":TDV.Tour.Script.executeJS,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setLocale":TDV.Tour.Script.setLocale,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"clone":TDV.Tour.Script.clone,"quizFinish":TDV.Tour.Script.quizFinish,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"openLink":TDV.Tour.Script.openLink,"showWindow":TDV.Tour.Script.showWindow,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"mixObject":TDV.Tour.Script.mixObject,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"toggleVR":TDV.Tour.Script.toggleVR,"setValue":TDV.Tour.Script.setValue,"getMediaByName":TDV.Tour.Script.getMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getKey":TDV.Tour.Script.getKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPixels":TDV.Tour.Script.getPixels,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"enableVR":TDV.Tour.Script.enableVR,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"disableVR":TDV.Tour.Script.disableVR,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"textToSpeech":TDV.Tour.Script.textToSpeech,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"init":TDV.Tour.Script.init,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"shareSocial":TDV.Tour.Script.shareSocial,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"cloneBindings":TDV.Tour.Script.cloneBindings,"initAnalytics":TDV.Tour.Script.initAnalytics,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"createTween":TDV.Tour.Script.createTween,"resumePlayers":TDV.Tour.Script.resumePlayers,"downloadFile":TDV.Tour.Script.downloadFile,"quizShowScore":TDV.Tour.Script.quizShowScore,"existsKey":TDV.Tour.Script.existsKey,"playAudioList":TDV.Tour.Script.playAudioList,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"unloadViewer":TDV.Tour.Script.unloadViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"registerKey":TDV.Tour.Script.registerKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getComponentByName":TDV.Tour.Script.getComponentByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupImage":TDV.Tour.Script.showPopupImage,"getOverlays":TDV.Tour.Script.getOverlays,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showWindowBase":TDV.Tour.Script.showWindowBase,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"translate":TDV.Tour.Script.translate,"historyGoForward":TDV.Tour.Script.historyGoForward},"start":"this.init()","backgroundColorRatios":[0],"class":"Player","gap":10,"propagateClick":false,"minWidth":0,"minHeight":0,"xrPanelsEnabled":true,"scrollBarColor":"#000000","height":"100%","layout":"absolute","hash": "40bebb6718c198fb4f187c5f93b74bea2fdd121bd142f2ff74bc27fcf82deb64", "definitions": [{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","overflow":"scroll","scrollBarMargin":0,"scrollBarWidth":5,"layout":"horizontal","data":{"name":"Previous Button"},"class":"Container","gap":10,"propagateClick":false,"verticalAlign":"middle","minHeight":20,"minWidth":20,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":"50%","children":["this.IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","this.Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01"],"visible":false,"width":"100%"},{"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/0/{row}_{column}.webp","colCount":48,"tags":"ondemand","class":"TiledImageResourceLevel","width":24576},{"rowCount":4,"height":2048,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/1/{row}_{column}.webp","colCount":24,"tags":"ondemand","class":"TiledImageResourceLevel","width":12288},{"rowCount":2,"height":1024,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/2/{row}_{column}.webp","colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144},{"rowCount":1,"height":512,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/3/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072}]}}],"hfovMax":130,"hfov":360,"vfov":180,"label":trans('panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35.label'),"id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","data":{"label":"BG"}},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","tabIndex":0,"data":{"name":"Previous"},"class":"IconButton","iconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":40,"transparencyActive":true,"width":40,"visible":false,"rollOverIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_rollover.png","pressedIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_pressed.png"},{"id":"mainPlayList","items":[{"camera":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","media":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","id":"IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","tabIndex":0,"backgroundColor":[],"data":{"name":"T 16-DIG 3 - Princesss Highway"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","minHeight":1,"minWidth":1,"height":"79.62%","transparencyActive":true,"width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_F4FD0EFA_FB13_9599_41DA_7C3C1D948291.source'), '_blank')","rollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png"},{"id":"effect_EC73201A_FB12_8C99_41D9_061A0ADFE0AA","duration":500,"class":"SlideInEffect","from":"right"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","id":"IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","minHeight":1,"minWidth":1,"height":"79.58%","transparencyActive":true,"width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B766373E_AA0B_AFA8_41C4_A532261954AE.source'), '_blank')","rollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","id":"IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","minHeight":1,"minWidth":1,"height":"79.58%","transparencyActive":true,"width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B49D8306_AA0A_E75B_41D3_85E496CF6B47.source'), '_blank')","rollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png"},{"backgroundOpacity":0,"rollOverFontSize":"24px","width":"50%","horizontalAlign":"right","rollOverBackgroundColor":["#000000","#000000"],"paddingRight":0,"id":"Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","fontColor":"#FFFFFF","backgroundColor":["#000000"],"label":trans('Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27.label'),"rollOverBackgroundOpacity":0,"paddingTop":0,"fontSize":"22px","paddingBottom":0,"iconHeight":0,"fontFamily":"Montserrat","pressedBackgroundOpacity":0,"backgroundColorRatios":[0],"tabIndex":0,"class":"Button","pressedRollOverFontSize":"24px","verticalAlign":"middle","propagateClick":false,"layout":"horizontal","minHeight":1,"data":{"name":"Button house info"},"minWidth":1,"pressedBackgroundColor":["#000000"],"height":40,"iconWidth":0,"pressedBackgroundColorRatios":[0],"rollOverShadow":false,"rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"pressedFontSize":"24px","borderColor":"#000000","paddingLeft":0},{"backgroundOpacity":0,"horizontalAlign":"center","id":"IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D","tabIndex":0,"data":{"name":"Next"},"class":"IconButton","iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":40,"transparencyActive":true,"width":40,"visible":false,"rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7","overflow":"scroll","scrollBarMargin":0,"scrollBarWidth":5,"layout":"horizontal","data":{"name":"Text"},"class":"Container","gap":10,"propagateClick":false,"minHeight":20,"minWidth":20,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":"50%","children":["this.HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF"],"width":"100%"},{"class":"PanoramaCamera","id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"backgroundOpacity":0,"width":"100%","id":"HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF","scrollBarMargin":0,"scrollBarWidth":5,"data":{"name":"HTMLText53815"},"class":"HTMLText","propagateClick":false,"minHeight":1,"minWidth":1,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":"100%","html":trans('HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF.html'),"click":"this.openLink(this.translate('LinkBehaviour_9A96C29C_B359_3F2E_41D7_BFA6BC45A076.source'), '_blank')"},{"id":"effect_E86183C2_FB35_93E8_41D5_DACBC560420F","duration":500,"class":"FadeOutEffect"},{"id":"effect_EC8577F2_FB12_B3A9_41DD_F2433422ECB6","duration":500,"class":"FadeOutEffect"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","id":"IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","minHeight":1,"minWidth":1,"height":"79.58%","transparencyActive":true,"width":"18.99%","rollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_A634AA88_A90D_22BF_41DC_160DA6A9150B","overflow":"hidden","scrollBarMargin":0,"scrollBarWidth":5,"layout":"vertical","data":{"name":"Bottom"},"class":"Container","gap":10,"propagateClick":false,"verticalAlign":"middle","minHeight":20,"minWidth":20,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":126,"children":["this.Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","this.Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7"],"width":"100%"},{"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","displayPlaybackBar":true,"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","id":"IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","minHeight":1,"minWidth":1,"height":"79.62%","transparencyActive":true,"width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B456E7F6_AA0B_AEB8_41B1_3BEDD14331E4.source'), '_blank')","rollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png"},{"backgroundOpacity":0,"width":"100%","paddingRight":20,"id":"HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449","scrollBarMargin":0,"paddingTop":40,"scrollBarWidth":5,"data":{"name":"HTMLText53815"},"paddingBottom":20,"class":"HTMLText","propagateClick":false,"minHeight":1,"minWidth":1,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":"100%","html":trans('HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449.html'),"click":"this.openLink(this.translate('LinkBehaviour_9A0923FC_B35F_DCEE_41DE_B49B60399DFB.source'), '_blank')","paddingLeft":20},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","id":"IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","minHeight":1,"minWidth":1,"height":"79.58%","transparencyActive":true,"width":"18.99%","rollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC","overflow":"scroll","scrollBarMargin":2,"layout":"horizontal","data":{"name":"Title"},"right":"0%","class":"Container","gap":10,"propagateClick":false,"verticalAlign":"middle","minHeight":20,"minWidth":20,"bottom":"0%","scrollBarColor":"#000000","height":"100%","children":["this.HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449"],"width":"100%"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","id":"IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","minHeight":1,"minWidth":1,"height":"79.58%","transparencyActive":true,"width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B767831E_AA05_A768_41E5_3C7D557BB019.source'), '_blank')","rollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png"},{"backgroundOpacity":0.3,"id":"Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","overflow":"hidden","backgroundColor":["#000000"],"scrollBarMargin":2,"left":"0%","layout":"absolute","right":"0.04%","data":{"name":"Global"},"backgroundColorRatios":[0],"class":"Container","gap":10,"propagateClick":false,"minWidth":20,"minHeight":20,"top":"0%","scrollBarColor":"#000000","height":"100%"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","id":"IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","minHeight":1,"minWidth":1,"height":"79.58%","transparencyActive":true,"width":"18.99%","rollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"right","id":"IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","tabIndex":0,"data":{"name":"Previous"},"class":"IconButton","iconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":40,"transparencyActive":true,"width":"49%","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_E9A1AA32_FB37_9CA9_41B9_4C30732EEDFC, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); visibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_E86183C2_FB35_93E8_41D5_DACBC560420F, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); invisibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096)","rollOverIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_rollover.png","pressedIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_pressed.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","overflow":"scroll","scrollBarMargin":0,"scrollBarWidth":5,"layout":"horizontal","data":{"name":"Next Button"},"class":"Container","gap":10,"propagateClick":false,"verticalAlign":"middle","minHeight":20,"minWidth":20,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":"50%","children":["this.Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","this.IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3"],"width":"100%"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_8539079F_AA05_AF69_41E5_1179F0905967","overflow":"scroll","left":"0%","scrollBarMargin":2,"layout":"vertical","right":"0%","data":{"name":"BG"},"class":"Container","gap":5,"propagateClick":false,"verticalAlign":"middle","minHeight":20,"minWidth":20,"bottom":"0%","top":"0%","scrollBarColor":"#000000","children":["this.Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","this.Container_A634AA88_A90D_22BF_41DC_160DA6A9150B"]},{"id":"effect_E9A1AA32_FB37_9CA9_41B9_4C30732EEDFC","duration":500,"class":"SlideInEffect","from":"left"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","id":"IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","minHeight":1,"minWidth":1,"height":"79.62%","transparencyActive":true,"width":"18.99%","rollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","overflow":"scroll","scrollBarMargin":0,"scrollBarWidth":5,"layout":"horizontal","data":{"name":"Previous and Next Buttons"},"class":"Container","gap":10,"propagateClick":false,"verticalAlign":"middle","minHeight":20,"minWidth":20,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":"50%","children":["this.IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","this.IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D"],"visible":false,"width":"100%"},{"backgroundOpacity":0,"id":"IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3","tabIndex":0,"data":{"name":"Next"},"class":"IconButton","iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","verticalAlign":"middle","propagateClick":false,"minHeight":0,"minWidth":0,"height":40,"transparencyActive":true,"width":"50%","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_EC73201A_FB12_8C99_41D9_061A0ADFE0AA, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); visibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_EC8577F2_FB12_B3A9_41DD_F2433422ECB6, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); invisibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C)","rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","overflow":"scroll","scrollBarMargin":0,"scrollBarWidth":5,"layout":"horizontal","data":{"name":"Page 2"},"class":"Container","gap":5,"propagateClick":false,"verticalAlign":"middle","minHeight":20,"minWidth":20,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":"75%","children":["this.IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","this.IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","this.IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","this.IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","this.IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2"],"visible":false,"width":"100%"},{"backgroundOpacity":0,"rollOverFontSize":"24px","width":"51%","rollOverBackgroundColor":["#000000","#000000"],"paddingRight":0,"id":"Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01","fontColor":"#FFFFFF","backgroundColor":["#000000"],"label":trans('Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01.label'),"rollOverBackgroundOpacity":0,"paddingTop":0,"fontSize":"22px","paddingBottom":0,"iconHeight":0,"fontFamily":"Montserrat","pressedBackgroundOpacity":0,"backgroundColorRatios":[0],"tabIndex":0,"class":"Button","pressedRollOverFontSize":"24px","verticalAlign":"middle","propagateClick":false,"layout":"horizontal","minHeight":1,"data":{"name":"Button house info"},"minWidth":1,"pressedBackgroundColor":["#000000"],"height":40,"iconWidth":0,"pressedBackgroundColorRatios":[0],"rollOverShadow":false,"rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"pressedFontSize":"24px","borderColor":"#000000","paddingLeft":0},{"backgroundOpacity":0,"id":"Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","overflow":"hidden","scrollBarMargin":2,"layout":"absolute","data":{"name":"Title Container-Top"},"class":"Container","gap":10,"propagateClick":false,"minHeight":20,"minWidth":20,"scrollBarColor":"#000000","height":"15%","children":["this.Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC"],"width":"100%"},{"width":"100%","subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderColor":"#000000","vrPointerSelectionTime":2000,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBorderSize":0,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowOpacity":1,"progressRight":"33%","subtitlesTop":0,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"subtitlesFontColor":"#FFFFFF","toolTipPaddingLeft":6,"playbackBarLeft":0,"vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"vrPointerSelectionColor":"#FF6600","progressBarBorderColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","toolTipPaddingRight":6,"subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","playbackBarHeadShadow":true,"subtitlesBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBottom":10,"playbackBarBottom":5,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingTop":4,"progressBorderSize":0,"progressBarBorderSize":0,"class":"ViewerArea","progressBarBorderRadius":2,"firstTransitionDuration":0,"propagateClick":false,"playbackBarHeight":10,"toolTipShadowColor":"#333138","progressHeight":2,"minHeight":50,"playbackBarProgressBorderSize":0,"minWidth":100,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBottom":50,"playbackBarHeadWidth":6,"toolTipFontFamily":"Arial","progressBorderRadius":2,"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","toolTipTextShadowColor":"#000000","height":"100%","progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial"},{"backgroundOpacity":0,"horizontalAlign":"center","id":"Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","overflow":"scroll","scrollBarMargin":0,"scrollBarWidth":5,"layout":"horizontal","data":{"name":"Page 1"},"class":"Container","gap":5,"propagateClick":false,"verticalAlign":"middle","minHeight":20,"minWidth":20,"scrollBarOpacity":0,"scrollBarColor":"#000000","height":"75%","children":["this.IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","this.IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","this.IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","this.IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","this.IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5"],"width":"100%"},{"backgroundOpacity":0.3,"horizontalAlign":"center","pressedRollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","id":"IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"backgroundColorRatios":[],"class":"IconButton","iconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378.png","verticalAlign":"middle","propagateClick":false,"pressedIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","minHeight":1,"minWidth":1,"height":"79.62%","transparencyActive":true,"width":"18.99%","click":"this.openLink(this.translate('LinkBehaviour_B6924F97_AA07_DF79_41E2_5427144B8EEC.source'), '_blank')","rollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png"}],"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer","this.Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","this.Container_8539079F_AA05_AF69_41E5_1179F0905967"],"width":"100%"};
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
//Generated with v2026.1.2, Fri Oct 2 2026