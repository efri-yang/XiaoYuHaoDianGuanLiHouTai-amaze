(function($) {
    $.fn.sideMenu = function(options) {
        //this 是jquery 对象
        var defaults = {
                distance: 70
            },
            opts = $.extend(true, defaults, options),
            $lis = this.children("li"),
            liH = $lis.children('a').eq(0).height(),
            $fold = this.siblings(".aside-unfold"),
            $sideContainer = this.parent().parent(".coms-layout-aside").eq(0),
            $mainContainer = $('.coms-layout-body'),

            totalH = liH * $lis.length + opts.distance;

        var winH, remainH, $win = $(window),
            Timer, tipLayer;

        winH = $win.height();
        remainH = winH - totalH;
        if (remainH < 50) {
            remainH = winH - 100;
        }

        $win.on("resize", $.throttle(500, function() {
            winH = $win.height();
            remainH = winH - totalH;
            if (remainH < 50) {
                remainH = winH - 100;
            }
        }))

        $lis.each(function(index, el) {
            var $el = $(el),
                $childUl = $el.children('.treeview-menu');
            if ($el.hasClass('active')) {
                $childUl.css("max-height", remainH);
            } else {
                $childUl.css("max-height", 0);
            }
            $el.children('a').on("click", function() {
                var $this = $(this);
                var $siblingUl = $this.siblings('ul'),
                    $parent = $this.parent(),
                    $parentSibling = $parent.siblings();
                if ($sideContainer.hasClass('fold')) {
                    $sideContainer.removeClass('fold');
                    $mainContainer.addClass('unfold');
                }
                if ($parent.hasClass('active')) {
                    $parent.removeClass('active');
                    $siblingUl.css("max-height", 0);
                } else {
                    $parentSibling.removeClass('active');
                    $parent.addClass('active');
                    $siblingUl.css("max-height", remainH);
                    $parentSibling.children('.treeview-menu').css("max-height", 0);
                }
            });
            $el.children('a').on("mouseover", function() {
                if ($sideContainer.hasClass('fold')) {
                    var $this = $(this);
                    var $icon = $this.children('.iconfont')
                    var txt = $this.data("tip");
                    if (!!txt) {
                        tipLayer = layer.tips(txt, $icon);
                    }
                }
            }).on("mouseout", function() {
                layer.close(tipLayer);
            });

            $el.children('a > i').on("mouseout", function(event) {
                event.stopPropagation();
                layer.close(tipLayer);
            })

        });

        $fold.on("click", function() {
            if ($sideContainer.hasClass('fold')) {
                $sideContainer.removeClass('fold');
                $mainContainer.removeClass('unfold');
            } else {
                //收起 的时候
                //  1、把左侧下拉收起来
                //  2、左侧栏宽度减少，main 区域宽度增加
                //
                $mainContainer.addClass('unfold');
                $lis.each(function(index, el) {
                    var $el = $(el),
                        $childUl = $el.children('.treeview-menu');
                    $el.removeClass('active');
                    $childUl.css("max-height", 0);
                })
                $sideContainer.addClass('fold');
            }
        })

    }
})(jQuery)


