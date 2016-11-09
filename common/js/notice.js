  jQuery.noConflict;
        var $$=jQuery;
      //延迟目的是,ajax方式引入该子模块时,动画异常
        setTimeout(function(){
            /*初始化*/
            var _speed = 8, //几秒过一屏
                _obj = $$('#UlSlide'),
                _wrap = _obj.parent('.notice'),
                _item = _obj.find('li'),
                _wid = _wrap.width();


                _item.css('min-width', _wid)
            var _objWid = _obj.width()

            //尾部加入头一个li
            $$(_obj).append(_item.eq(0).clone())


            var _delay = _objWid / _wid * _speed * 1000,
                _initleft = _item.eq(0).width()

            function _scroll() {
                _obj.animate({
                    left: -_objWid,
                }, _delay, 'linear', function() {
                    _obj.css('left', 0)
                    _scroll()
                })

            }
            _scroll()


            _obj.on('mouseenter', function() {
                _obj.stop(true)
            })
            _obj.on('mouseleave', function() {
                _scroll()
            })
        },5000)