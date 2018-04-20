var something = (function(){
    var something = [];
    var search = [];


    var $el = $('#YoggleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#something-template').html();


    $button.on('click', addSearch);
    $ul.delegate('i.del', 'click', deleteSearch);

    _render();

    function _render() {
       $ul.html(Mustache.render(template, {something: something}));
    }

    function addSearch(value) {
        var name = (typeof value === "string") ? value : $input.val();
        search.push(name);
        _render();
        $input.val('');

        $.ajax({
            type: "Get",
            url:"http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+ name +"&callback=?",
            async: false,
            dataType:"json",
            success: function (data, textStatus, jqXHR) {
                $('#ajax').html('<a href="https://en.wikipedia.org/?curid=' + data.parse.pageid + '&inprop=url">link</a>')
            },
            error: function (errorMessage) {

            }

            });
    }

    function deleteSearch(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        search.splice(i, 1);
        _render();
    }

    return {
        addSearch: addSearch,
        deleteSearch: deleteSearch
    };

})();
