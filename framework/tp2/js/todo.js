angular.module('todoApp', ['ngSanitize']) //todoApp
    .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [{
            text: '<s>Learn angular</s>',
            done: true
        }, {
            text: 'Build an angular app',
            done: false
        }];
        todoList.todoText = '';
        todoList.err = '';
        todoList.addTodo = function() {
            verifyTodos(function(err, success) {
                console.log(err);
                if (err != null) {
                    todoList.err = err;
                    $("#todoModal").modal();
                }
                if (success) {
                    todoList.todos.push({
                        text: todoList.todoText,
                        done: false
                    });
                }
            });
            todoList.todoText = '';
        };
        todoList.remaining = function() {
            var count = 0;
            angular.forEach(todoList.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };
        todoList.archive = function() {
            var oldTodos = todoList.todos;
            todoList.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) todoList.todos.push(todo);
            });
        };
        var pattern = /<[/s]+>/g
        todoList.scratchText = function(todo) {
            todo.text = todo.done ? "<s>" + todo.text + "</s>" : todo.text.replace(pattern, "");
        };
        var verifyTodos = function(callback) {
            var err = null;
            var success = true;
            if (todoList.todoText == '') {
                err = 'É preciso preencher o ToDo!';
                success = false;
                callback(err, success);
            }
            angular.forEach(todoList.todos, function(todo) {
                if (todoList.todoText == todo.text) {
                    err = 'Já existe uma tarefa com este nome!'
                    success = false;
                    callback(err, success);
                }
            });
            callback(null, success);
        };
    });