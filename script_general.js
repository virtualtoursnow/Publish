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
var script = {"children":["this.MainViewer","this.Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","this.Container_8539079F_AA05_AF69_41E5_1179F0905967"],"propagateClick":false,"scrollBarMargin":2,"hash": "09858f03b6eb985d226edd5255357e27de5894d90a4b390d291d16424a0fe7aa", "definitions": [{"class":"Panorama","hfovMax":130,"hfov":360,"data":{"label":"BG"},"vfov":180,"label":trans('panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35.label'),"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp","id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4096,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/0/{row}_{column}.webp","colCount":48,"rowCount":8,"class":"TiledImageResourceLevel","width":24576,"tags":"ondemand"},{"height":2048,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/1/{row}_{column}.webp","colCount":24,"rowCount":4,"class":"TiledImageResourceLevel","width":12288,"tags":"ondemand"},{"height":1024,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/2/{row}_{column}.webp","colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand"},{"height":512,"url":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_0/{face}/3/{row}_{column}.webp","colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_t.webp"}]},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":0,"class":"Container","backgroundOpacity":0,"scrollBarWidth":5,"id":"Container_A634AA88_A90D_22BF_41DC_160DA6A9150B","data":{"name":"Bottom"},"layout":"vertical","scrollBarColor":"#000000","overflow":"hidden","verticalAlign":"middle","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"width":"100%","children":["this.Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","this.Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7"],"height":126},{"html":trans('HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF.html'),"propagateClick":false,"scrollBarMargin":0,"class":"HTMLText","backgroundOpacity":0,"scrollBarWidth":5,"id":"HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF","data":{"name":"HTMLText53815"},"scrollBarColor":"#000000","minHeight":1,"scrollBarOpacity":0,"minWidth":1,"width":"100%","height":"100%","click":"this.openLink(this.translate('LinkBehaviour_9A96C29C_B359_3F2E_41D7_BFA6BC45A076.source'), '_blank')"},{"aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"arrowKeysAction":"translate","displayPlaybackBar":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","class":"PanoramaPlayer","mouseControlMode":"drag_rotation"},{"pressedIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T16-DIG4-FOOTBALL OVAL"},"pressedRollOverIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_60B411D0_6F46_66D8_41D9_B59EA2B87EFA.source'), '_blank')","height":"79.58%"},{"pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png","propagateClick":false,"horizontalAlign":"center","class":"IconButton","backgroundOpacity":0,"tabIndex":0,"id":"IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D","data":{"name":"Next"},"verticalAlign":"middle","minHeight":0,"rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","minWidth":0,"transparencyActive":true,"width":40,"iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","height":40,"visible":false},{"pressedIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T60-DIG18-BEACONSFIELD"},"pressedRollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B49D8306_AA0A_E75B_41D3_85E496CF6B47.source'), '_blank')","height":"79.58%"},{"pressedIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_pressed.png","propagateClick":false,"class":"IconButton","backgroundOpacity":0,"tabIndex":0,"id":"IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3","data":{"name":"Next"},"verticalAlign":"middle","minHeight":0,"rollOverIconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D_rollover.png","minWidth":0,"transparencyActive":true,"width":"50%","iconURL":"skin/IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D.png","height":40,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0EA5B6B9_013A_3CBF_4161_D23ED08BE5E0, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); visibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0E9B7009_012A_135F_4160_9151ACACFAC0, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); invisibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C)"},{"pressedIconURL":"skin/IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC_pressed.png","propagateClick":false,"horizontalAlign":"right","class":"IconButton","backgroundOpacity":0,"tabIndex":0,"id":"IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","data":{"name":"Previous"},"verticalAlign":"middle","minHeight":0,"rollOverIconURL":"skin/IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC_rollover.png","minWidth":0,"transparencyActive":true,"width":"49%","iconURL":"skin/IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC.png","height":40,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_0EDC1E39_0129_EFBF_4165_7A635EE959E4, 'showEffect', false)}.bind(this); visibleFunc(this.Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368); visibleFunc(this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0EC19099_012A_137F_415F_374320FBB328, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E); invisibleFunc(this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096)"},{"html":trans('HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449.html'),"paddingLeft":20,"propagateClick":false,"scrollBarMargin":0,"class":"HTMLText","backgroundOpacity":0,"scrollBarWidth":5,"id":"HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449","data":{"name":"HTMLText53815"},"paddingTop":40,"paddingRight":20,"paddingBottom":20,"scrollBarColor":"#000000","minHeight":1,"scrollBarOpacity":0,"minWidth":1,"width":"100%","height":"100%","click":"this.openLink(this.translate('LinkBehaviour_9A0923FC_B35F_DCEE_41DE_B49B60399DFB.source'), '_blank')"},{"propagateClick":false,"scrollBarMargin":2,"class":"Container","backgroundOpacity":0,"id":"Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","data":{"name":"Title Container-Top"},"layout":"absolute","scrollBarColor":"#000000","overflow":"hidden","minHeight":20,"minWidth":20,"gap":10,"width":"100%","children":["this.Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC"],"height":"15%"},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":2,"class":"Container","backgroundOpacity":0,"id":"Container_8539079F_AA05_AF69_41E5_1179F0905967","left":"0%","right":"0%","overflow":"scroll","data":{"name":"BG"},"layout":"vertical","scrollBarColor":"#000000","verticalAlign":"middle","minHeight":20,"minWidth":20,"top":"0%","gap":5,"bottom":"0%","children":["this.Container_A54E2697_A8FD_22D0_41D4_2E92FC286857","this.Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","this.Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","this.Container_A634AA88_A90D_22BF_41DC_160DA6A9150B"]},{"pressedIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T60 HUCKERBY DR"},"pressedRollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B767831E_AA05_A768_41E5_3C7D557BB019.source'), '_blank')","height":"79.58%"},{"progressBorderSize":0,"playbackBarHeadShadow":true,"progressBarBorderRadius":2,"height":"100%","propagateClick":false,"subtitlesTextShadowVerticalLength":1,"progressBarBorderSize":0,"playbackBarBottom":5,"toolTipFontSize":"1.11vmin","class":"ViewerArea","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesFontFamily":"Arial","toolTipPaddingRight":6,"progressBorderRadius":2,"progressLeft":"33%","toolTipPaddingTop":4,"playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundColorDirection":"vertical","surfaceReticleColor":"#FFFFFF","data":{"name":"Main Viewer"},"toolTipPaddingBottom":4,"playbackBarProgressBorderRadius":0,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerSelectionTime":2000,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowOpacity":0.7,"toolTipShadowColor":"#333138","subtitlesGap":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","toolTipFontFamily":"Arial","playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"progressBackgroundColorRatios":[0],"id":"MainViewer","playbackBarHeadBorderRadius":0,"progressRight":"33%","playbackBarBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","progressOpacity":0.7,"progressBarBorderColor":"#000000","toolTipTextShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"subtitlesBorderColor":"#FFFFFF","progressBorderColor":"#000000","minHeight":50,"playbackBarBackgroundOpacity":1,"minWidth":100,"subtitlesFontColor":"#FFFFFF","toolTipFontColor":"#606060","progressBackgroundColor":["#000000"],"vrThumbstickRotationStep":20,"subtitlesTextShadowHorizontalLength":1,"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadHeight":15,"progressBottom":10,"subtitlesTop":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"toolTipPaddingLeft":6,"width":"100%","progressHeight":2,"playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50},{"rollOverFontSize":"24px","paddingLeft":0,"propagateClick":false,"pressedBackgroundOpacity":0,"horizontalAlign":"right","pressedBackgroundColor":["#000000"],"class":"Button","backgroundOpacity":0,"fontSize":"22px","fontColor":"#FFFFFF","id":"Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","backgroundColor":["#000000"],"tabIndex":0,"data":{"name":"Button house info"},"paddingTop":0,"paddingRight":0,"paddingBottom":0,"rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"iconHeight":0,"layout":"horizontal","pressedBackgroundColorRatios":[0],"pressedFontSize":"24px","verticalAlign":"middle","minHeight":1,"rollOverBackgroundOpacity":0,"minWidth":1,"pressedRollOverFontSize":"24px","rollOverShadow":false,"rollOverBackgroundColor":["#000000","#000000"],"iconWidth":0,"fontFamily":"Montserrat","width":"50%","backgroundColorRatios":[0],"height":40,"borderColor":"#000000","label":trans('Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27.label')},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":0,"class":"Container","backgroundOpacity":0,"scrollBarWidth":5,"id":"Container_F4F87EF9_FB13_959B_41C5_D2783B5DA096","data":{"name":"Page 2"},"layout":"horizontal","scrollBarColor":"#000000","overflow":"scroll","verticalAlign":"middle","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":5,"width":"100%","children":["this.IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","this.IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","this.IconButton_B8F57B19_AA0B_A769_4193_4C7CD1B23CF5","this.IconButton_B8FCF191_AA0A_6379_41DC_37C11EF1BEF8","this.IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2"],"visible":false,"height":"75%"},{"id":"effect_0EDC1E39_0129_EFBF_4165_7A635EE959E4","class":"SlideInEffect","duration":300,"from":"left"},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":2,"class":"Container","backgroundOpacity":0,"id":"Container_A56AD368_A8FB_227F_41D6_80DE2667ECEC","data":{"name":"Title"},"right":"0%","overflow":"scroll","layout":"horizontal","scrollBarColor":"#000000","verticalAlign":"middle","minHeight":20,"minWidth":20,"gap":10,"bottom":"0%","width":"100%","children":["this.HTMLText_A4EAEBFE_A907_6250_41E3_DE01C7837449"],"height":"100%"},{"pressedIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T16DIG1-SUMMERHILL RD"},"pressedRollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_60F6293D_6F46_2748_41CE_937B916D458C.source'), '_blank')","height":"79.58%"},{"pressedIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"IconButton"},"pressedRollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_F4FCEEFB_FB13_9598_41B4_C5D2BC94C1F2.png","width":"18.99%","backgroundColorRatios":[],"height":"79.62%"},{"pressedIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T16-DIG2-STEPHEN ROAD"},"pressedRollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_B8E6B26D_AA0A_A1A9_41E2_BCA8EA446676.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B766373E_AA0B_AFA8_41C4_A532261954AE.source'), '_blank')","height":"79.58%"},{"pressedIconURL":"skin/IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC_pressed.png","propagateClick":false,"horizontalAlign":"center","class":"IconButton","backgroundOpacity":0,"tabIndex":0,"id":"IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","data":{"name":"Previous"},"verticalAlign":"middle","minHeight":0,"rollOverIconURL":"skin/IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC_rollover.png","minWidth":0,"transparencyActive":true,"width":40,"iconURL":"skin/IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC.png","height":40,"visible":false},{"pressedIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T16-DIG5-MSAC"},"pressedRollOverIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_60A5F631_6F46_2D58_4196_D543D12B9432.source'), '_blank')","height":"79.58%"},{"pressedIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T 16-DIG 3 - PRINCESS HIGHWAY"},"pressedRollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_F4FD0EFA_FB13_9599_41DA_7C3C1D948291.source'), '_blank')","height":"79.62%"},{"id":"effect_0E9B7009_012A_135F_4160_9151ACACFAC0","to":"left","class":"SlideOutEffect","duration":300},{"pressedIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T60-COMO DR."},"pressedRollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_BB2E0922_AA06_635B_41B4_3BBF7571E378.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B6924F97_AA07_DF79_41E2_5427144B8EEC.source'), '_blank')","height":"79.62%"},{"id":"effect_0EA5B6B9_013A_3CBF_4161_D23ED08BE5E0","class":"SlideInEffect","duration":500,"from":"right"},{"propagateClick":false,"scrollBarMargin":2,"id":"Container_8E6B0BD1_AF42_814D_41B8_AD785E9ACDE3","class":"Container","backgroundOpacity":0.3,"left":"0%","backgroundColor":["#000000"],"data":{"name":"Global"},"right":"0.04%","overflow":"hidden","layout":"absolute","scrollBarColor":"#000000","minHeight":20,"minWidth":20,"top":"0%","gap":10,"height":"100%","backgroundColorRatios":[0]},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":0,"class":"Container","backgroundOpacity":0,"scrollBarWidth":5,"id":"Container_E971EE82_FB3F_9468_41CE_E6A3D33A344E","data":{"name":"Previous Button"},"layout":"horizontal","scrollBarColor":"#000000","overflow":"scroll","verticalAlign":"middle","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"width":"100%","children":["this.IconButton_E975CE82_FB3F_9468_41E6_4D91EFDC78FC","this.Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01"],"visible":false,"height":"50%"},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":0,"class":"Container","backgroundOpacity":0,"scrollBarWidth":5,"id":"Container_EBC5B16B_FB12_8CB8_41DB_54B160758B3C","data":{"name":"Previous and Next Buttons"},"layout":"horizontal","scrollBarColor":"#000000","overflow":"scroll","verticalAlign":"middle","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"width":"100%","children":["this.IconButton_EA6CAB55_FB36_BCEB_4191_2170F13CBFBB","this.IconButton_EA6C3B55_FB36_BCEB_41D8_0CD6E45E4E1D"],"visible":false,"height":"50%"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"id":"panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","class":"PanoramaCamera","enterPointingToHorizon":true},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":0,"class":"Container","backgroundOpacity":0,"scrollBarWidth":5,"id":"Container_A7AAAB18_A90D_23D0_41D8_5FF5356F447C","data":{"name":"Page 1"},"layout":"horizontal","scrollBarColor":"#000000","overflow":"scroll","verticalAlign":"middle","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":5,"width":"100%","children":["this.IconButton_F4F30EFB_FB13_9598_41DD_CB9C4D3D657E","this.IconButton_F4F37EFB_FB13_959F_41E6_7297B5C4A38A","this.IconButton_F4FD4EFA_FB13_9599_41D8_A022F5D5AB54","this.IconButton_F4F89EF9_FB13_959B_41EA_16754CE67B6C","this.IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE"],"height":"75%"},{"pressedIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","propagateClick":false,"horizontalAlign":"center","id":"IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE","class":"IconButton","backgroundOpacity":0.3,"tabIndex":0,"backgroundColor":[],"data":{"name":"T33-DIG1-WATSON ROAD"},"pressedRollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","verticalAlign":"middle","minHeight":1,"rollOverIconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE_rollover.png","minWidth":1,"transparencyActive":true,"iconURL":"skin/IconButton_B928E4CB_AA0A_A2E9_41DC_783A8DE90ADE.png","width":"18.99%","backgroundColorRatios":[],"click":"this.openLink(this.translate('LinkBehaviour_B456E7F6_AA0B_AEB8_41B1_3BEDD14331E4.source'), '_blank')","height":"79.62%"},{"id":"effect_0EC19099_012A_137F_415F_374320FBB328","to":"right","class":"SlideOutEffect","duration":300},{"id":"mainPlayList","items":[{"camera":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35_camera","media":"this.panorama_A4AC5C32_A8FD_E5D0_41E2_819D4F1C9A35","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"rollOverFontSize":"24px","paddingLeft":0,"propagateClick":false,"pressedBackgroundOpacity":0,"pressedBackgroundColor":["#000000"],"class":"Button","backgroundOpacity":0,"fontSize":"22px","fontColor":"#FFFFFF","id":"Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01","backgroundColor":["#000000"],"tabIndex":0,"data":{"name":"Button house info"},"paddingTop":0,"paddingRight":0,"paddingBottom":0,"rollOverBackgroundColorRatios":[0.7490196078431373,0.7529411764705882],"iconHeight":0,"layout":"horizontal","pressedBackgroundColorRatios":[0],"pressedFontSize":"24px","verticalAlign":"middle","minHeight":1,"rollOverBackgroundOpacity":0,"minWidth":1,"pressedRollOverFontSize":"24px","rollOverShadow":false,"rollOverBackgroundColor":["#000000","#000000"],"iconWidth":0,"fontFamily":"Montserrat","width":"51%","backgroundColorRatios":[0],"height":40,"borderColor":"#000000","label":trans('Button_DB4A5EFF_FC76_CE9D_41E5_1378A8639A01.label')},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":0,"class":"Container","backgroundOpacity":0,"scrollBarWidth":5,"id":"Container_EBEC68C7_FB2D_9DE8_41E6_D7B19489F2A7","data":{"name":"Text"},"layout":"horizontal","scrollBarColor":"#000000","overflow":"scroll","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"width":"100%","children":["this.HTMLText_B9C63CCC_A905_26B0_41AE_1D5AB0F606EF"],"height":"50%"},{"propagateClick":false,"horizontalAlign":"center","scrollBarMargin":0,"class":"Container","backgroundOpacity":0,"scrollBarWidth":5,"id":"Container_E8F14B62_FB3E_FCA8_41E3_A358E0624368","data":{"name":"Next Button"},"layout":"horizontal","scrollBarColor":"#000000","overflow":"scroll","verticalAlign":"middle","minHeight":20,"scrollBarOpacity":0,"minWidth":20,"gap":10,"width":"100%","children":["this.Button_DDB7CD41_FC69_F3E5_41E6_5A820A52BF27","this.IconButton_E8F56B62_FB3E_FCA9_41E1_880EEBC415E3"],"height":"50%"}],"start":"this.init()","id":"rootPlayer","class":"Player","xrPanelsEnabled":true,"data":{"displayTooltipInTouchScreens":true,"history":{},"initialScale":0.5,"textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1},"locales":{"en":"locale/en.txt"},"name":"Player545","defaultLocale":"en"},"backgroundColor":["#FFFFFF"],"scripts":{"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"disableVR":TDV.Tour.Script.disableVR,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setLocale":TDV.Tour.Script.setLocale,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"registerKey":TDV.Tour.Script.registerKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"clone":TDV.Tour.Script.clone,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openLink":TDV.Tour.Script.openLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizStart":TDV.Tour.Script.quizStart,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"unloadViewer":TDV.Tour.Script.unloadViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setValue":TDV.Tour.Script.setValue,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getComponentByName":TDV.Tour.Script.getComponentByName,"showWindowBase":TDV.Tour.Script.showWindowBase,"getPixels":TDV.Tour.Script.getPixels,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"quizFinish":TDV.Tour.Script.quizFinish,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"init":TDV.Tour.Script.init,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getKey":TDV.Tour.Script.getKey,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"enableVR":TDV.Tour.Script.enableVR,"getMainViewer":TDV.Tour.Script.getMainViewer,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlays":TDV.Tour.Script.getOverlays,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initQuiz":TDV.Tour.Script.initQuiz,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startMeasurement":TDV.Tour.Script.startMeasurement,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"createTween":TDV.Tour.Script.createTween,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleVR":TDV.Tour.Script.toggleVR,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showWindow":TDV.Tour.Script.showWindow,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"mixObject":TDV.Tour.Script.mixObject,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"shareSocial":TDV.Tour.Script.shareSocial,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"translate":TDV.Tour.Script.translate,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart},"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","layout":"absolute","minHeight":0,"minWidth":0,"gap":10,"width":"100%","backgroundColorRatios":[0],"lockedOrientation":"portrait","height":"100%","watermark":false};
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