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
var script = {"watermark":false,"backgroundColorRatios":[0],"start":"this.init()","lockedOrientation":"portrait","id":"rootPlayer","backgroundColor":["#FFFFFF"],"data":{"history":{},"locales":{"en":"locale/en.txt"},"initialScale":0.5,"textToSpeechConfig":{"volume":1,"rate":1,"speechOnInfoWindow":false,"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false},"displayTooltipInTouchScreens":true,"name":"Player545","defaultLocale":"en"},"hash": "37908766b2c35b7eead90bdf7418c6ff9fe43a0905d3da64d79092212289e39c", "definitions": [{"backgroundColorRatios":[0],"data":{"name":"Global"},"id":"Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","backgroundColor":["#000000"],"left":"0%","right":"0.04%","layout":"absolute","class":"Container","scrollBarMargin":2,"minHeight":20,"minWidth":20,"top":"0%","overflow":"hidden","scrollBarColor":"#000000","height":"100%","gap":10,"backgroundOpacity":0.3,"propagateClick":false},{"class":"PanoramaCamera","id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","initialPosition":{"class":"PanoramaCameraPosition","pitch":0,"yaw":0},"enterPointingToHorizon":true},{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","media":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}]},{"backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B456E7F6_AA0B_AEB8_41B1_3BEDD14331E4.source'), '_blank')","horizontalAlign":"center","iconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE.png","tabIndex":0,"pressedIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","id":"IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","data":{"name":"IconButton"},"class":"IconButton","verticalAlign":"middle","minHeight":1,"transparencyActive":true,"minWidth":1,"rollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","width":"18.99%","backgroundOpacity":0.3,"height":"79.62%","propagateClick":false},{"children":["this.Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","this.Container_A634AA88_A90D_22BF_41DC_160DA6A9150B"],"horizontalAlign":"center","id":"Container_8539079F_AA05_AF69_41E5_1179F0905967","left":"0%","right":"0%","layout":"vertical","class":"Container","scrollBarMargin":2,"data":{"name":"BG"},"verticalAlign":"middle","minHeight":20,"minWidth":20,"top":"0%","overflow":"scroll","bottom":"0%","scrollBarColor":"#000000","gap":5,"backgroundOpacity":0,"propagateClick":false},{"children":["this.HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449"],"horizontalAlign":"center","id":"Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC","layout":"horizontal","scrollBarMargin":2,"right":"0%","class":"Container","data":{"name":"Title"},"verticalAlign":"middle","minHeight":20,"minWidth":20,"overflow":"scroll","bottom":"0%","width":"100%","scrollBarColor":"#000000","gap":10,"backgroundOpacity":0,"height":"100%","propagateClick":false},{"children":["this.Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC"],"id":"Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","layout":"absolute","scrollBarMargin":2,"data":{"name":"Title Container-Top"},"class":"Container","minHeight":20,"minWidth":20,"overflow":"hidden","width":"100%","scrollBarColor":"#000000","gap":10,"backgroundOpacity":0,"height":189,"propagateClick":false},{"backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B766373E_AA0B_AFA8_41C4_A532261954AE.source'), '_blank')","horizontalAlign":"center","iconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676.png","tabIndex":0,"pressedIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","id":"IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","data":{"name":"IconButton"},"class":"IconButton","verticalAlign":"middle","minHeight":1,"transparencyActive":true,"minWidth":1,"rollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","width":"18.99%","backgroundOpacity":0.3,"height":"79.58%","propagateClick":false},{"backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B49D8306_AA0A_E75B_41D3_85E496CF6B47.source'), '_blank')","horizontalAlign":"center","iconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8.png","tabIndex":0,"pressedIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","id":"IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","data":{"name":"IconButton"},"class":"IconButton","verticalAlign":"middle","minHeight":1,"transparencyActive":true,"minWidth":1,"rollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","width":"18.99%","backgroundOpacity":0.3,"height":"79.58%","propagateClick":false},{"children":["this.IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","this.IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","this.IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","this.IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","this.IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8"],"horizontalAlign":"center","id":"Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","scrollBarWidth":5,"layout":"horizontal","scrollBarMargin":0,"data":{"name":"Body - Center"},"class":"Container","verticalAlign":"middle","minWidth":20,"overflow":"scroll","minHeight":20,"scrollBarOpacity":0,"width":"100%","scrollBarColor":"#000000","gap":5,"backgroundOpacity":0,"height":"75%","propagateClick":false},{"paddingLeft":20,"click":"this.openLink(this.translate('LinkBehaviour_9A96C29C_B359_3F2E_41D7_BFA6BC45A076.source'), '_blank')","id":"HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF","scrollBarWidth":5,"paddingRight":20,"paddingTop":20,"scrollBarMargin":0,"right":"0%","paddingBottom":20,"class":"HTMLText","data":{"name":"HTMLText53815"},"minHeight":1,"minWidth":1,"bottom":"0%","scrollBarOpacity":0,"width":"100%","scrollBarColor":"#000000","backgroundOpacity":0,"html":trans('HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF.html'),"height":"100%","propagateClick":false},{"progressBackgroundColor":["#000000"],"playbackBarHeight":10,"playbackBarHeadWidth":6,"subtitlesTextShadowVerticalLength":1,"toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderSize":0,"width":"100%","playbackBarBackgroundColorDirection":"vertical","height":"100%","playbackBarRight":0,"toolTipFontSize":"1.11vmin","playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","toolTipFontColor":"#606060","progressBorderRadius":2,"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowHorizontalLength":0,"progressLeft":"33%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"subtitlesGap":0,"playbackBarBorderSize":0,"toolTipPaddingLeft":6,"vrPointerSelectionTime":2000,"progressRight":"33%","progressOpacity":0.7,"progressBackgroundColorRatios":[0],"progressBarBackgroundColorDirection":"horizontal","subtitlesFontColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingBottom":4,"vrThumbstickRotationStep":20,"surfaceReticleColor":"#FFFFFF","id":"MainViewer","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingRight":6,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"subtitlesTop":0,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"progressBorderColor":"#000000","class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadow":true,"subtitlesFontSize":"3vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"minHeight":50,"playbackBarBottom":5,"toolTipShadowColor":"#333138","toolTipPaddingTop":4,"progressBottom":10,"firstTransitionDuration":0,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"progressBarBorderRadius":2,"subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","progressHeight":2,"propagateClick":false},{"backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B767831E_AA05_A768_41E5_3C7D557BB019.source'), '_blank')","horizontalAlign":"center","iconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5.png","tabIndex":0,"pressedIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","id":"IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","data":{"name":"IconButton"},"class":"IconButton","verticalAlign":"middle","minHeight":1,"transparencyActive":true,"minWidth":1,"rollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","width":"18.99%","backgroundOpacity":0.3,"height":"79.58%","propagateClick":false},{"backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B6924F97_AA07_DF79_41E2_5427144B8EEC.source'), '_blank')","horizontalAlign":"center","iconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378.png","tabIndex":0,"pressedIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","id":"IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","data":{"name":"IconButton"},"class":"IconButton","verticalAlign":"middle","minHeight":1,"transparencyActive":true,"minWidth":1,"rollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","width":"18.99%","backgroundOpacity":0.3,"height":"79.62%","propagateClick":false},{"children":["this.HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF"],"horizontalAlign":"center","id":"Container_A634AA88_A90D_22BF_41DC_160DA6A9150B","scrollBarWidth":5,"layout":"absolute","scrollBarMargin":0,"data":{"name":"Bottom"},"class":"Container","minHeight":20,"minWidth":20,"overflow":"hidden","width":"100%","scrollBarOpacity":0,"scrollBarColor":"#000000","gap":10,"backgroundOpacity":0,"height":117,"propagateClick":false},{"paddingLeft":20,"click":"this.openLink(this.translate('LinkBehaviour_9A0923FC_B35F_DCEE_41DE_B49B60399DFB.source'), '_blank')","id":"HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449","scrollBarWidth":5,"paddingRight":20,"paddingTop":40,"scrollBarMargin":0,"paddingBottom":20,"data":{"name":"HTMLText53815"},"class":"HTMLText","minWidth":1,"minHeight":1,"scrollBarOpacity":0,"width":"100%","scrollBarColor":"#000000","backgroundOpacity":0,"html":trans('HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449.html'),"height":"100%","propagateClick":false},{"class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true},{"class":"Panorama","thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":4096,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/0/{row}_{column}.webp","colCount":48,"tags":"ondemand","width":24576,"rowCount":8},{"class":"TiledImageResourceLevel","height":2048,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/1/{row}_{column}.webp","colCount":24,"tags":"ondemand","width":12288,"rowCount":4},{"class":"TiledImageResourceLevel","height":1024,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/2/{row}_{column}.webp","colCount":12,"tags":"ondemand","width":6144,"rowCount":2},{"class":"TiledImageResourceLevel","height":512,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/3/{row}_{column}.webp","colCount":6,"tags":["ondemand","preload"],"width":3072,"rowCount":1}]}}],"data":{"label":"BG"},"vfov":180,"hfov":360,"label":trans('panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35.label'),"id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","hfovMax":130}],"class":"Player","scrollBarMargin":2,"layout":"absolute","children":["this.MainViewer","this.Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","this.Container_8539079F_AA05_AF69_41E5_1179F0905967"],"minHeight":0,"minWidth":0,"scripts":{"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initQuiz":TDV.Tour.Script.initQuiz,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlays":TDV.Tour.Script.getOverlays,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"openLink":TDV.Tour.Script.openLink,"setLocale":TDV.Tour.Script.setLocale,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"clone":TDV.Tour.Script.clone,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cloneBindings":TDV.Tour.Script.cloneBindings,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"playAudioList":TDV.Tour.Script.playAudioList,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"setValue":TDV.Tour.Script.setValue,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPixels":TDV.Tour.Script.getPixels,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startMeasurement":TDV.Tour.Script.startMeasurement,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getKey":TDV.Tour.Script.getKey,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"initAnalytics":TDV.Tour.Script.initAnalytics,"getComponentByName":TDV.Tour.Script.getComponentByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"showWindowBase":TDV.Tour.Script.showWindowBase,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"init":TDV.Tour.Script.init,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"unloadViewer":TDV.Tour.Script.unloadViewer,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"toggleVR":TDV.Tour.Script.toggleVR,"showPopupImage":TDV.Tour.Script.showPopupImage,"downloadFile":TDV.Tour.Script.downloadFile,"disableVR":TDV.Tour.Script.disableVR,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"registerKey":TDV.Tour.Script.registerKey,"executeJS":TDV.Tour.Script.executeJS,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"mixObject":TDV.Tour.Script.mixObject,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowScore":TDV.Tour.Script.quizShowScore,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"enableVR":TDV.Tour.Script.enableVR,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"createTween":TDV.Tour.Script.createTween,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizStart":TDV.Tour.Script.quizStart,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizFinish":TDV.Tour.Script.quizFinish,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"showWindow":TDV.Tour.Script.showWindow,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"translate":TDV.Tour.Script.translate,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"existsKey":TDV.Tour.Script.existsKey,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateVideoCues":TDV.Tour.Script.updateVideoCues},"width":"100%","scrollBarColor":"#000000","xrPanelsEnabled":true,"gap":10,"height":"100%","defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false};
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
//Generated with v2026.1.2, Fri Sep 18 2026