$.replace = function (el) {
        var base = this;
        base.$el = $(el);
        var input = $('<div>');
        input.addClass('view-checkbox');
        input.insertAfter(base.$el);
        base.$el.hide();

        input.click(function () {
            var isChecked = false;
            input.toggleClass('view-checkbox-checked');
            isChecked = input.hasClass('view-checkbox-checked');
            base.$el.attr('checked', isChecked);
        });

    };
    $.fn.replace = function () {
        return this.each(function () {
            (new $.replace(this));
        });
    };

    $(".b-checkbox-user-agreement").replace();

    /* radio*/
    $.replaceRadio = function (el) {
        var base2 = this;
        base2.$el = $(el);
        var input2 = $('<span>');
        input2.addClass('view-radio');
        input2.insertAfter(base2.$el);
        base2.$el.hide();

        input2.click(function () {
            var isSelected = false;
            var select = document.getElementsByClassName('view-radio-selected');

            for (var i = 0; i < select.length; i++) {
                select[i].setAttribute('class', 'view-radio');
            }

            input2.toggleClass('view-radio-selected');
            isSelected = input2.hasClass('view-radio-selected');
            /*base2.$el.attr('selected', isSelected);*/
        });

    };
    $.fn.replaceRadio = function () {
        return this.each(function () {
            (new $.replaceRadio(this));
        });
    };

    $("#first-radio").replaceRadio();
    $("#second-radio").replaceRadio();
    $("#third-radio").replaceRadio();