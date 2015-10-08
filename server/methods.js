Meteor.methods({

    adiciona: adiciona,
    remove  : remove

});

function adiciona( obj ) {
    Tarefas.insert( { nome: obj.nome, data: new Date() } );
}

function remove( id ) {
    Tarefas.remove( { _id: id } );
}