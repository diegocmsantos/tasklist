Meteor.startup(function(){

    Meteor.publish( "tarefas", publishTarefas );

});

function publishTarefas() {
    return Tarefas.find({});
}