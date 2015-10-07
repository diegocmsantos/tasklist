Template.novo.events({

	"submit form": function( event, template ) {

		event.preventDefault();

		var input = $('#tarefa');
		var name  = input.val();

		Tarefas.insert( { nome: name, data: new Date() } );
		input.val( '' );

	}

});