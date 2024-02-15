

$(document).ready(function() {
    $('.ct_type_border button').click(function() {
        $('.ct_type_border button').removeClass('active')
        $(this).addClass('active');
    })
    $('.ct_type_border_2 button').click(function() {
        $('.ct_type_border_2 button').removeClass('active')
        $(this).addClass('active');
    })
    $('.ct_sort_list_item').click(function() {
        $('.ct_sort_list_item').removeClass('active')
        $(this).addClass('active');
    })

    // Filter Popup js S

    $('.ct_filter_popup').click(function() {
        $('#ct_filter_popup_show').addClass('ct_modal_show');

    })
    $('.ct_close_modal').click(function() {
            $('#ct_filter_popup_show').removeClass('ct_modal_show');

        })
        // Filter Popup js E


    // Sort Popup js S

    $('.ct_sort_popup').click(function() {
        $('#ct_sort_popup_show').addClass('ct_modal_show2');

    })
    $('.ct_close_modal').click(function() {
            $('#ct_sort_popup_show').removeClass('ct_modal_show2');

        })
        // Sort Popup js S


    // create game js S
    $('.ct_create_game_popup').click(function() {
        $('#ct_create_game_popup').addClass('ct_modal_show3');

    })
    $('.ct_close_modal').click(function() {
            $('#ct_create_game_popup').removeClass('ct_modal_show3');

        })
        // create game js E

})

// Enter Fee Slider S

var DEBUG = false, // make true to enable debug output
    PLUGIN_IDENTIFIER = "RangeSlider";

var RangeSlider = function(element, options) {
    this.element = element;
    this.options = options || {};
    this.defaults = {
        output: {
            prefix: '', // function or string
            suffix: '', // function or string
            format: function(output) {
                return output;
            }
        },
        change: function(event, obj) {}
    };

    this.metadata = $(this.element).data('options');
};

RangeSlider.prototype = {
    init: function() {
        if (DEBUG && console) console.log('RangeSlider init');
        this.config = $.extend(true, {}, this.defaults, this.options, this.metadata);

        var self = this;
        this.trackFull = $('<div className="track track--full"></div>').appendTo(self.element);
        this.trackIncluded = $('<div className="track track--included"></div>').appendTo(self.element);
        this.inputs = [];
        $('input[type="range"]', this.element).each(function(index, value) {
            var rangeInput = this;
            rangeInput.output = $('<output>').appendTo(self.element);
            rangeInput.output.zindex = parseInt($(rangeInput.output).css('z-index')) || 1;
            rangeInput.thumb = $('<div className="slider-thumb">').prependTo(self.element);
            rangeInput.initialValue = $(this).val();
            rangeInput.update = function() {
                if (DEBUG && console) console.log('RangeSlider rangeInput.update');
                var range = $(this).attr('max') - $(this).attr('min'),
                    offset = $(this).val() - $(this).attr('min'),
                    pos = offset / range * 100 + '%',
                    transPos = offset / range * -100 + '%',
                    prefix = typeof self.config.output.prefix == 'function' ? self.config.output.prefix.call(self, rangeInput) : self.config.output.prefix,
                    format = self.config.output.format($(rangeInput).val()),
                    suffix = typeof self.config.output.suffix == 'function' ? self.config.output.suffix.call(self, rangeInput) : self.config.output.suffix;
                $(rangeInput.output).html(prefix + '' + format + '' + suffix);
                $(rangeInput.output).css('left', pos);
                $(rangeInput.output).css('transform', 'translate(' + transPos + ',0)');
                $(rangeInput.thumb).css('left', pos);
                $(rangeInput.thumb).css('transform', 'translate(' + transPos + ',0)');
                self.adjustTrack();
            };

            rangeInput.sendOutputToFront = function() {
                $(this.output).css('z-index', rangeInput.output.zindex + 1);
            };
            rangeInput.sendOutputToBack = function() {
                $(this.output).css('z-index', rangeInput.output.zindex);
            };
            $(rangeInput.thumb).on('mousedown', function(event) {
                self.sendAllOutputToBack();
                $(this).data('tracking', true);
                $(document).one('mouseup', function() {
                    $(rangeInput.thumb).data('tracking', false);
                    self.change(event);
                });
            });
            $('body').on('mousemove', function(event) {
                if ($(rangeInput.thumb).data('tracking')) {
                    var rangeOffset = $(rangeInput).offset(),
                        relX = event.pageX - rangeOffset.left,
                        rangeWidth = $(rangeInput).width();
                    if (relX <= rangeWidth) {
                        var val = relX / rangeWidth;
                        $(rangeInput).val(val * $(rangeInput).attr('max'));
                        rangeInput.update();
                    }
                }
            });

            $(this).on('mousedown input change touchstart', function(event) {
                if (DEBUG && console) console.log('RangeSlider rangeInput, mousedown input touchstart');
                self.sendAllOutputToBack();
                rangeInput.sendOutputToFront();
                rangeInput.update();
            });

            $(this).on('mouseup touchend', function(event) {
                if (DEBUG && console) console.log('RangeSlider rangeInput, change');
                self.change(event);
            });
            self.inputs.push(this);
        });
        this.reset();
        return this;
    },

    sendAllOutputToBack: function() {
        $.map(this.inputs, function(input, index) {
            input.sendOutputToBack();
        });
    },

    change: function(event) {
        if (DEBUG && console) console.log('RangeSlider change', event);
        var values = $.map(this.inputs, function(input, index) {
            return {
                value: parseInt($(input).val()),
                min: parseInt($(input).attr('min')),
                max: parseInt($(input).attr('max'))
            };
        });
        values.sort(function(a, b) {
            return a.value - b.value;
        });
        this.config.change.call(this, event, values);
    },

    reset: function() {
        if (DEBUG && console) console.log('RangeSlider reset');
        $.map(this.inputs, function(input, index) {
            $(input).val(input.initialValue);
            input.update();
        });
    },
    adjustTrack: function() {
        if (DEBUG && console) console.log('RangeSlider adjustTrack');
        var valueMin = Infinity,
            rangeMin = Infinity,
            valueMax = 0,
            rangeMax = 0;
        $.map(this.inputs, function(input, index) {
            var val = parseInt($(input).val()),
                min = parseInt($(input).attr('min')),
                max = parseInt($(input).attr('max'));
            valueMin = (val < valueMin) ? val : valueMin;
            valueMax = (val > valueMax) ? val : valueMax;
            rangeMin = (min < rangeMin) ? min : rangeMin;
            rangeMax = (max > rangeMax) ? max : rangeMax;
        });
        if (this.inputs.length > 1) {
            this.trackIncluded.css('width', (valueMax - valueMin) / (rangeMax - rangeMin) * 100 + '%');
            this.trackIncluded.css('left', (valueMin - rangeMin) / (rangeMax - rangeMin) * 100 + '%');
        } else {
            this.trackIncluded.css('width', valueMax / (rangeMax - rangeMin) * 100 + '%');
            this.trackIncluded.css('left', '0%');
        }
    }
};

RangeSlider.defaults = RangeSlider.prototype.defaults;

$.fn.RangeSlider = function(options) {
    if (DEBUG && console) console.log('$.fn.RangeSlider', options);
    return this.each(function() {
        var instance = $(this).data(PLUGIN_IDENTIFIER);
        if (!instance) {
            instance = new RangeSlider(this, options).init();
            $(this).data(PLUGIN_IDENTIFIER, instance);
        }
    });
};

var rangeSlider = $('#facet-price-range-slider');
if (rangeSlider.length > 0) {
    rangeSlider.RangeSlider({
        output: {
            format: function(output) {
                return output.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            },
            suffix: function(input) {
                return parseInt($(input).val()) == parseInt($(input).attr('max')) ? this.config.maxSymbol : '';
            }
        }
    });
}



// diration slider css S


var DEBUG = false, // make true to enable debug output
    PLUGIN_IDENTIFIER = "RangeSlider";

var RangeSlider = function(element, options) {
    this.element = element;
    this.options = options || {};
    this.defaults = {
        output: {
            prefix: '', // function or string
            suffix: '', // function or string
            format: function(output) {
                return output;
            }
        },
        change: function(event, obj) {}
    };

    this.metadata = $(this.element).data('options');
};

RangeSlider.prototype = {
    init: function() {
        if (DEBUG && console) console.log('RangeSlider init');
        this.config = $.extend(true, {}, this.defaults, this.options, this.metadata);

        var self = this;
        this.trackFull = $('<div className="track track--full"></div>').appendTo(self.element);
        this.trackIncluded = $('<div className="track track--included"></div>').appendTo(self.element);
        this.inputs = [];
        $('input[type="range"]', this.element).each(function(index, value) {
            var rangeInput = this;
            rangeInput.output = $('<output>').appendTo(self.element);
            rangeInput.output.zindex = parseInt($(rangeInput.output).css('z-index')) || 1;
            rangeInput.thumb = $('<div className="slider-thumb">').prependTo(self.element);
            rangeInput.initialValue = $(this).val();
            rangeInput.update = function() {
                if (DEBUG && console) console.log('RangeSlider rangeInput.update');
                var range = $(this).attr('max') - $(this).attr('min'),
                    offset = $(this).val() - $(this).attr('min'),
                    pos = offset / range * 100 + '%',
                    transPos = offset / range * -100 + '%',
                    prefix = typeof self.config.output.prefix == 'function' ? self.config.output.prefix.call(self, rangeInput) : self.config.output.prefix,
                    format = self.config.output.format($(rangeInput).val()),
                    suffix = typeof self.config.output.suffix == 'function' ? self.config.output.suffix.call(self, rangeInput) : self.config.output.suffix;
                $(rangeInput.output).html(prefix + '' + format + '' + suffix);
                $(rangeInput.output).css('left', pos);
                $(rangeInput.output).css('transform', 'translate(' + transPos + ',0)');
                $(rangeInput.thumb).css('left', pos);
                $(rangeInput.thumb).css('transform', 'translate(' + transPos + ',0)');
                self.adjustTrack();
            };

            rangeInput.sendOutputToFront = function() {
                $(this.output).css('z-index', rangeInput.output.zindex + 1);
            };
            rangeInput.sendOutputToBack = function() {
                $(this.output).css('z-index', rangeInput.output.zindex);
            };
            $(rangeInput.thumb).on('mousedown', function(event) {
                self.sendAllOutputToBack();
                $(this).data('tracking', true);
                $(document).one('mouseup', function() {
                    $(rangeInput.thumb).data('tracking', false);
                    self.change(event);
                });
            });
            $('body').on('mousemove', function(event) {
                if ($(rangeInput.thumb).data('tracking')) {
                    var rangeOffset = $(rangeInput).offset(),
                        relX = event.pageX - rangeOffset.left,
                        rangeWidth = $(rangeInput).width();
                    if (relX <= rangeWidth) {
                        var val = relX / rangeWidth;
                        $(rangeInput).val(val * $(rangeInput).attr('max'));
                        rangeInput.update();
                    }
                }
            });

            $(this).on('mousedown input change touchstart', function(event) {
                if (DEBUG && console) console.log('RangeSlider rangeInput, mousedown input touchstart');
                self.sendAllOutputToBack();
                rangeInput.sendOutputToFront();
                rangeInput.update();
            });

            $(this).on('mouseup touchend', function(event) {
                if (DEBUG && console) console.log('RangeSlider rangeInput, change');
                self.change(event);
            });
            self.inputs.push(this);
        });
        this.reset();
        return this;
    },

    sendAllOutputToBack: function() {
        $.map(this.inputs, function(input, index) {
            input.sendOutputToBack();
        });
    },

    change: function(event) {
        if (DEBUG && console) console.log('RangeSlider change', event);
        var values = $.map(this.inputs, function(input, index) {
            return {
                value: parseInt($(input).val()),
                min: parseInt($(input).attr('min')),
                max: parseInt($(input).attr('max'))
            };
        });
        values.sort(function(a, b) {
            return a.value - b.value;
        });
        this.config.change.call(this, event, values);
    },

    reset: function() {
        if (DEBUG && console) console.log('RangeSlider reset');
        $.map(this.inputs, function(input, index) {
            $(input).val(input.initialValue);
            input.update();
        });
    },
    adjustTrack: function() {
        if (DEBUG && console) console.log('RangeSlider adjustTrack');
        var valueMin = Infinity,
            rangeMin = Infinity,
            valueMax = 0,
            rangeMax = 0;
        $.map(this.inputs, function(input, index) {
            var val = parseInt($(input).val()),
                min = parseInt($(input).attr('min')),
                max = parseInt($(input).attr('max'));
            valueMin = (val < valueMin) ? val : valueMin;
            valueMax = (val > valueMax) ? val : valueMax;
            rangeMin = (min < rangeMin) ? min : rangeMin;
            rangeMax = (max > rangeMax) ? max : rangeMax;
        });
        if (this.inputs.length > 1) {
            this.trackIncluded.css('width', (valueMax - valueMin) / (rangeMax - rangeMin) * 100 + '%');
            this.trackIncluded.css('left', (valueMin - rangeMin) / (rangeMax - rangeMin) * 100 + '%');
        } else {
            this.trackIncluded.css('width', valueMax / (rangeMax - rangeMin) * 100 + '%');
            this.trackIncluded.css('left', '0%');
        }
    }
};

RangeSlider.defaults = RangeSlider.prototype.defaults;

$.fn.RangeSlider = function(options) {
    if (DEBUG && console) console.log('$.fn.RangeSlider', options);
    return this.each(function() {
        var instance = $(this).data(PLUGIN_IDENTIFIER);
        if (!instance) {
            instance = new RangeSlider(this, options).init();
            $(this).data(PLUGIN_IDENTIFIER, instance);
        }
    });
};

var rangeSlider = $('#facet-price-range-slider2');
if (rangeSlider.length > 0) {
    rangeSlider.RangeSlider({
        output: {
            format: function(output) {
                return output.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
            },
            suffix: function(input) {
                return parseInt($(input).val()) == parseInt($(input).attr('max')) ? this.config.maxSymbol : '';
            }
        }
    });
}


// Show hide pass js 
const new_pass = () => {
    if (document.querySelector('.ct_new_pass_hide').type === "password") {
        document.querySelector('.ct_new_pass_hide').type = "text";

    } else {
        document.querySelector('.ct_new_pass_hide').type = "password"
    }
}

const confirm_pass = () => {
    if (document.querySelector('.ct_con_pass_hide').type === "password") {
        document.querySelector('.ct_con_pass_hide').type = "text";

    } else {
        document.querySelector('.ct_con_pass_hide').type = "password"
    }
}


// INCLUDE JQUERY & JQUERY UI 1.12.1
$( function() {
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );








