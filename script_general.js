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
var script = {"backgroundColorRatios":[0],"layout":"absolute","minHeight":0,"start":"this.init()","lockedOrientation":"portrait","minWidth":0,"backgroundColor":["#FFFFFF"],"data":{"history":{},"name":"Player545","defaultLocale":"en","textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false},"displayTooltipInTouchScreens":true,"initialScale":0.5,"locales":{"en":"locale/en.txt"}},"id":"rootPlayer","hash": "c61b625ead728942f84bc4069691e059502b9281bb9792595a940646a04ad120", "definitions": [{"children":["this.Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC"],"minHeight":20,"minWidth":20,"id":"Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","scrollBarMargin":2,"data":{"name":"Title Container-Top"},"class":"Container","overflow":"hidden","width":"100%","gap":10,"scrollBarColor":"#000000","height":"15%","backgroundOpacity":0,"layout":"absolute","propagateClick":false},{"id":"effect_0EA5B6B9_013A_3CBF_4161_D23ED08BE5E0","duration":500,"from":"right","class":"SlideInEffect"},{"iconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB.png","visible":false,"minHeight":0,"minWidth":0,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_pressed.png","id":"IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","data":{"name":"Previous"},"class":"IconButton","transparencyActive":true,"verticalAlign":"middle","width":40,"rollOverIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_rollover.png","height":40,"backgroundOpacity":0,"propagateClick":false},{"id":"effect_0EDC1E39_0129_EFBF_4165_7A635EE959E4","duration":300,"from":"left","class":"SlideInEffect"},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54.png","click":"this.openLink(this.translate('LinkBehaviour_60B411D0_6F46_66D8_41D9_B59EA2B87EFA.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png","id":"IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png","class":"IconButton","data":{"name":"T16-DIG4-FOOTBALL OVAL"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png","height":"79.58%","backgroundOpacity":0.3,"propagateClick":false},{"children":["this.HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449"],"minHeight":20,"horizontalAlign":"center","minWidth":20,"id":"Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC","scrollBarMargin":2,"right":"0%","class":"Container","data":{"name":"Title"},"overflow":"scroll","bottom":"0%","width":"100%","scrollBarColor":"#000000","height":"100%","gap":10,"backgroundOpacity":0,"layout":"horizontal","verticalAlign":"middle","propagateClick":false},{"children":["this.Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","this.IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3"],"minHeight":20,"minWidth":20,"horizontalAlign":"center","id":"Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","scrollBarWidth":5,"scrollBarMargin":0,"data":{"name":"Next Button"},"class":"Container","overflow":"scroll","width":"100%","gap":10,"scrollBarColor":"#000000","height":"50%","verticalAlign":"middle","scrollBarOpacity":0,"backgroundOpacity":0,"layout":"horizontal","propagateClick":false},{"backgroundColorRatios":[0],"label":trans('Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27.label'),"minHeight":1,"minWidth":1,"horizontalAlign":"right","fontSize":"22px","id":"Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","backgroundColor":["#000000"],"fontFamily":"Montserrat","rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"tabIndex":0,"pressedRollOverFontSize":"24px","paddingTop":0,"pressedBackgroundColorRatios":[0],"pressedFontSize":"24px","iconHeight":0,"paddingBottom":0,"paddingLeft":0,"class":"Button","data":{"name":"Button house info"},"fontColor":"#FFFFFF","paddingRight":0,"rollOverBackgroundColor":["#000000","#000000"],"rollOverShadow":false,"verticalAlign":"middle","width":"50%","rollOverBackgroundOpacity":0,"height":40,"rollOverFontSize":"24px","borderColor":"#000000","backgroundOpacity":0,"pressedBackgroundOpacity":0,"iconWidth":0,"layout":"horizontal","propagateClick":false,"pressedBackgroundColor":["#000000"]},{"aaEnabled":true,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"arrowKeysAction":"translate"},{"iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","visible":false,"minHeight":0,"minWidth":0,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png","id":"IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D","data":{"name":"Next"},"class":"IconButton","transparencyActive":true,"verticalAlign":"middle","width":40,"rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","height":40,"backgroundOpacity":0,"propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378.png","click":"this.openLink(this.translate('LinkBehaviour_B6924F97_AA07_DF79_41E2_5427144B8EEC.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","id":"IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","class":"IconButton","data":{"name":"T60-COMO DR."},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","height":"79.62%","backgroundOpacity":0.3,"propagateClick":false},{"children":["this.IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","this.IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","this.IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","this.IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","this.IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2"],"visible":false,"minHeight":20,"minWidth":20,"horizontalAlign":"center","id":"Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","scrollBarWidth":5,"scrollBarMargin":0,"data":{"name":"Page 2"},"class":"Container","overflow":"scroll","width":"100%","gap":5,"scrollBarColor":"#000000","height":"75%","verticalAlign":"middle","scrollBarOpacity":0,"backgroundOpacity":0,"layout":"horizontal","propagateClick":false},{"click":"this.openLink(this.translate('LinkBehaviour_9A96C29C_B359_3F2E_41D7_BFA6BC45A076.source'), '_blank')","minHeight":1,"minWidth":1,"id":"HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF","scrollBarWidth":5,"scrollBarMargin":0,"data":{"name":"HTMLText53815"},"class":"HTMLText","width":"100%","scrollBarColor":"#000000","height":"100%","scrollBarOpacity":0,"backgroundOpacity":0,"html":trans('HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF.html'),"propagateClick":false},{"backgroundColorRatios":[0],"label":trans('Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01.label'),"minHeight":1,"minWidth":1,"fontSize":"22px","id":"Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01","backgroundColor":["#000000"],"fontFamily":"Montserrat","rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"tabIndex":0,"pressedRollOverFontSize":"24px","paddingTop":0,"pressedBackgroundColorRatios":[0],"pressedFontSize":"24px","iconHeight":0,"paddingBottom":0,"paddingLeft":0,"class":"Button","data":{"name":"Button house info"},"fontColor":"#FFFFFF","paddingRight":0,"rollOverBackgroundColor":["#000000","#000000"],"rollOverShadow":false,"verticalAlign":"middle","width":"51%","rollOverBackgroundOpacity":0,"height":40,"rollOverFontSize":"24px","borderColor":"#000000","backgroundOpacity":0,"pressedBackgroundOpacity":0,"iconWidth":0,"layout":"horizontal","propagateClick":false,"pressedBackgroundColor":["#000000"]},{"minHeight":20,"data":{"name":"Global"},"minWidth":20,"backgroundColor":["#000000"],"left":"0%","id":"Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","right":"0.04%","scrollBarMargin":2,"class":"Container","overflow":"hidden","top":"0%","scrollBarColor":"#000000","height":"100%","backgroundOpacity":0.3,"layout":"absolute","gap":10,"backgroundColorRatios":[0],"propagateClick":false},{"children":["this.HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF"],"minHeight":20,"minWidth":20,"horizontalAlign":"center","id":"Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7","scrollBarWidth":5,"scrollBarMargin":0,"data":{"name":"Text"},"class":"Container","overflow":"scroll","width":"100%","gap":10,"scrollBarColor":"#000000","height":"50%","scrollBarOpacity":0,"backgroundOpacity":0,"layout":"horizontal","propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A.png","click":"this.openLink(this.translate('LinkBehaviour_60A5F631_6F46_2D58_4196_D543D12B9432.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png","id":"IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png","class":"IconButton","data":{"name":"T16-DIG5-MSAC"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png","height":"79.58%","backgroundOpacity":0.3,"propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5.png","click":"this.openLink(this.translate('LinkBehaviour_B767831E_AA05_A768_41E5_3C7D557BB019.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","id":"IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","class":"IconButton","data":{"name":"T60 HUCKERBY DR"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","height":"79.58%","backgroundOpacity":0.3,"propagateClick":false},{"id":"effect_0E9B7009_012A_135F_4160_9151ACACFAC0","duration":300,"class":"SlideOutEffect","to":"left"},{"playbackBarHeight":10,"playbackBarHeadWidth":6,"subtitlesTextShadowVerticalLength":1,"toolTipBorderColor":"#767676","propagateClick":false,"playbackBarProgressBorderSize":0,"width":"100%","playbackBarBackgroundColorDirection":"vertical","height":"100%","playbackBarRight":0,"toolTipFontSize":"1.11vmin","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontColor":"#606060","subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","progressBorderRadius":2,"toolTipBackgroundColor":"#F6F6F6","progressLeft":"33%","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarHeadBorderRadius":0,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionTime":2000,"progressBackgroundColorRatios":[0],"progressRight":"33%","progressOpacity":0.7,"subtitlesTextShadowOpacity":1,"progressBarBackgroundColorDirection":"horizontal","subtitlesFontColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"minHeight":50,"playbackBarHeadShadowBlurRadius":3,"minWidth":100,"vrThumbstickRotationStep":20,"surfaceReticleColor":"#FFFFFF","id":"MainViewer","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingRight":6,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"subtitlesTop":0,"vrPointerColor":"#FFFFFF","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingLeft":6,"progressBorderColor":"#000000","subtitlesFontSize":"3vmin","playbackBarHeadShadowVerticalLength":0,"progressBarBackgroundColor":["#3399FF"],"class":"ViewerArea","playbackBarHeadShadow":true,"subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"progressBottom":10,"toolTipShadowColor":"#333138","vrPointerSelectionColor":"#FF6600","playbackBarBottom":5,"firstTransitionDuration":0,"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"progressBorderSize":0,"progressHeight":2,"progressBarBorderRadius":2,"progressBackgroundColor":["#000000"],"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial"},{"id":"effect_0EC19099_012A_137F_415F_374320FBB328","duration":300,"class":"SlideOutEffect","to":"right"},{"children":["this.Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","this.Container_A634AA88_A90D_22BF_41DC_160DA6A9150B"],"minHeight":20,"horizontalAlign":"center","minWidth":20,"left":"0%","id":"Container_8539079F_AA05_AF69_41E5_1179F0905967","right":"0%","scrollBarMargin":2,"class":"Container","data":{"name":"BG"},"overflow":"scroll","top":"0%","bottom":"0%","scrollBarColor":"#000000","gap":5,"backgroundOpacity":0,"layout":"vertical","verticalAlign":"middle","propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E.png","click":"this.openLink(this.translate('LinkBehaviour_60F6293D_6F46_2748_41CE_937B916D458C.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","id":"IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","class":"IconButton","data":{"name":"T16DIG1-SUMMERHILL RD"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","height":"79.58%","backgroundOpacity":0.3,"propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE.png","click":"this.openLink(this.translate('LinkBehaviour_B456E7F6_AA0B_AEB8_41B1_3BEDD14331E4.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","id":"IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","class":"IconButton","data":{"name":"T33-DIG1-WATSON ROAD"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","height":"79.62%","backgroundOpacity":0.3,"propagateClick":false},{"click":"this.openLink(this.translate('LinkBehaviour_9A0923FC_B35F_DCEE_41DE_B49B60399DFB.source'), '_blank')","minHeight":1,"minWidth":1,"id":"HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449","scrollBarWidth":5,"scrollBarMargin":0,"paddingTop":40,"data":{"name":"HTMLText53815"},"paddingBottom":20,"paddingLeft":20,"class":"HTMLText","paddingRight":20,"width":"100%","scrollBarColor":"#000000","height":"100%","scrollBarOpacity":0,"backgroundOpacity":0,"html":trans('HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449.html'),"propagateClick":false},{"children":["this.IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","this.IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","this.IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","this.IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","this.IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE"],"minHeight":20,"minWidth":20,"horizontalAlign":"center","id":"Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","scrollBarWidth":5,"scrollBarMargin":0,"data":{"name":"Page 1"},"class":"Container","overflow":"scroll","width":"100%","gap":5,"scrollBarColor":"#000000","height":"75%","verticalAlign":"middle","scrollBarOpacity":0,"backgroundOpacity":0,"layout":"horizontal","propagateClick":false},{"id":"mainPlayList","items":[{"camera":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","media":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer"}],"class":"PlayList"},{"children":["this.IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","this.IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D"],"visible":false,"minHeight":20,"minWidth":20,"horizontalAlign":"center","id":"Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","scrollBarWidth":5,"scrollBarMargin":0,"data":{"name":"Previous and Next Buttons"},"class":"Container","overflow":"scroll","width":"100%","gap":10,"scrollBarColor":"#000000","height":"50%","verticalAlign":"middle","scrollBarOpacity":0,"backgroundOpacity":0,"layout":"horizontal","propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C.png","click":"this.openLink(this.translate('LinkBehaviour_F4FD0EFA_FB13_9599_41DA_7C3C1D948291.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","id":"IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","class":"IconButton","data":{"name":"T 16-DIG 3 - PRINCESS HIGHWAY"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","height":"79.62%","backgroundOpacity":0.3,"propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8.png","click":"this.openLink(this.translate('LinkBehaviour_B49D8306_AA0A_E75B_41D3_85E496CF6B47.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","id":"IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","class":"IconButton","data":{"name":"T60-DIG18-BEACONSFIELD"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","height":"79.58%","backgroundOpacity":0.3,"propagateClick":false},{"iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0EA5B6B9_013A_3CBF_4161_D23ED08BE5E0, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); visibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0E9B7009_012A_135F_4160_9151ACACFAC0, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); invisibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C)","minHeight":0,"minWidth":0,"tabIndex":0,"pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png","id":"IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3","data":{"name":"Next"},"class":"IconButton","transparencyActive":true,"verticalAlign":"middle","width":"50%","rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","height":40,"backgroundOpacity":0,"propagateClick":false},{"iconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB.png","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0EDC1E39_0129_EFBF_4165_7A635EE959E4, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); visibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0EC19099_012A_137F_415F_374320FBB328, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); invisibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096)","minHeight":0,"minWidth":0,"horizontalAlign":"right","tabIndex":0,"pressedIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_pressed.png","id":"IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","data":{"name":"Previous"},"class":"IconButton","transparencyActive":true,"verticalAlign":"middle","width":"49%","rollOverIconURL":"skin/IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB_rollover.png","height":40,"backgroundOpacity":0,"propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2.png","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","id":"IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","class":"IconButton","data":{"name":"IconButton"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","height":"79.62%","backgroundOpacity":0.3,"propagateClick":false},{"children":["this.IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","this.Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01"],"visible":false,"minHeight":20,"minWidth":20,"horizontalAlign":"center","id":"Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","scrollBarWidth":5,"scrollBarMargin":0,"data":{"name":"Previous Button"},"class":"Container","overflow":"scroll","width":"100%","gap":10,"scrollBarColor":"#000000","height":"50%","verticalAlign":"middle","scrollBarOpacity":0,"backgroundOpacity":0,"layout":"horizontal","propagateClick":false},{"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","frames":[{"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4096,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":48,"tags":"ondemand","rowCount":8,"width":24576},{"height":2048,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":24,"tags":"ondemand","rowCount":4,"width":12288},{"height":1024,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":12,"tags":"ondemand","rowCount":2,"width":6144},{"height":512,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","colCount":6,"tags":["ondemand","preload"],"rowCount":1,"width":3072}]}}],"class":"Panorama","vfov":180,"hfovMax":130,"data":{"label":"BG"},"label":trans('panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35.label'),"id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","hfov":360},{"class":"PanoramaCamera","id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"enterPointingToHorizon":true},{"children":["this.Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","this.Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7"],"minHeight":20,"minWidth":20,"horizontalAlign":"center","id":"Container_A634AA88_A90D_22BF_41DC_160DA6A9150B","scrollBarWidth":5,"scrollBarMargin":0,"data":{"name":"Bottom"},"class":"Container","overflow":"hidden","width":"100%","gap":10,"scrollBarColor":"#000000","height":126,"verticalAlign":"middle","scrollBarOpacity":0,"backgroundOpacity":0,"layout":"vertical","propagateClick":false},{"backgroundColorRatios":[],"iconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676.png","click":"this.openLink(this.translate('LinkBehaviour_B766373E_AA0B_AFA8_41C4_A532261954AE.source'), '_blank')","minHeight":1,"minWidth":1,"horizontalAlign":"center","tabIndex":0,"pressedIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","id":"IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","backgroundColor":[],"pressedRollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","class":"IconButton","data":{"name":"T16-DIG2-STEPHEN ROAD"},"transparencyActive":true,"width":"18.99%","verticalAlign":"middle","rollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","height":"79.58%","backgroundOpacity":0.3,"propagateClick":false}],"scrollBarMargin":2,"class":"Player","children":["this.MainViewer","this.Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","this.Container_8539079F_AA05_AF69_41E5_1179F0905967"],"scripts":{"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"clone":TDV.Tour.Script.clone,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"openLink":TDV.Tour.Script.openLink,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"disableVR":TDV.Tour.Script.disableVR,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPixels":TDV.Tour.Script.getPixels,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"executeJS":TDV.Tour.Script.executeJS,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizStart":TDV.Tour.Script.quizStart,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"enableVR":TDV.Tour.Script.enableVR,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initQuiz":TDV.Tour.Script.initQuiz,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getKey":TDV.Tour.Script.getKey,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getComponentByName":TDV.Tour.Script.getComponentByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"init":TDV.Tour.Script.init,"textToSpeech":TDV.Tour.Script.textToSpeech,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizFinish":TDV.Tour.Script.quizFinish,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"createTween":TDV.Tour.Script.createTween,"playAudioList":TDV.Tour.Script.playAudioList,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"startMeasurement":TDV.Tour.Script.startMeasurement,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"resumePlayers":TDV.Tour.Script.resumePlayers,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"existsKey":TDV.Tour.Script.existsKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"unregisterKey":TDV.Tour.Script.unregisterKey,"mixObject":TDV.Tour.Script.mixObject,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"registerKey":TDV.Tour.Script.registerKey,"shareSocial":TDV.Tour.Script.shareSocial,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initAnalytics":TDV.Tour.Script.initAnalytics,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showWindowBase":TDV.Tour.Script.showWindowBase,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleVR":TDV.Tour.Script.toggleVR,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setValue":TDV.Tour.Script.setValue,"unloadViewer":TDV.Tour.Script.unloadViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"translate":TDV.Tour.Script.translate,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setLocale":TDV.Tour.Script.setLocale,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer},"width":"100%","scrollBarColor":"#000000","height":"100%","xrPanelsEnabled":true,"watermark":false,"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"propagateClick":false};
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