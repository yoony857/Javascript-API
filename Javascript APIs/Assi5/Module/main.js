//*avascript templating is a fast and efficient technique to render client-side templates with 
//Javascript using a JSON data source. The template is HTML markup, peppered with tags that will 
//either insert variables or run programming logic.*

// Mustach is a simple web template system with implementations
//Implementation is the realization of an application
//wikipedia.

var people = (function(){
    var people = [];


    var $el = $('#StudentModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();


    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render();

    function _render() {
       $ul.html(Mustache.render(template, {people: people}));
    }

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
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

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();



        


//people.addPerson("Young");
//people.deletePerson(0);

