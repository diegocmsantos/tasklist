Template.novo.events({

	"submit form": submitForm

});

function submitForm( event, template ) {

    event.preventDefault();

    var input = $('#tarefa');
    var name  = input.val();

    //Tarefas.insert( { nome: name, data: new Date() } );
    Meteor.call( "adiciona", { nome: name } );
    input.val( '' );

}