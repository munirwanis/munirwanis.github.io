angular.module('notesApp', [])
    .controller('NotesListController', function($scope) {
        $scope.nomeAluno = '';
        $scope.nota1Aluno = 0;
        $scope.nota2Aluno = 0;
        $scope.nota3Aluno = 0;
        $scope.nota4Aluno = 0;
        $scope.media = ($scope.nota1Aluno + $scope.nota2Aluno + $scope.nota3Aluno + $scope.nota4Aluno) / 4;
        $scope.conceito = $scope.media >= 7 ? 'Aprovado' : 'Reprovado';
        $scope.addNoteWithScope = function() {
            noteList.notes.push({
                aluno: $scope.nomeAluno,
                nota1: $scope.nota1Aluno,
                nota2: $scope.nota2Aluno,
                nota3: $scope.nota3Aluno,
                nota4: $scope.nota4Aluno
            });
            $scope.nomeAluno = '';
            $scope.nota1Aluno = 0;
            $scope.nota2Aluno = 0;
            $scope.nota3Aluno = 0;
            $scope.nota4Aluno = 0;
            $scope.media = 0.0;
            $scope.conceito = '';
        };
        $scope.calculateNotesWithScope = function() {
            $scope.media = ($scope.nota1Aluno + $scope.nota2Aluno + $scope.nota3Aluno + $scope.nota4Aluno) / 4;
            $scope.conceito = $scope.media >= 7 ? 'Aprovado' : 'Reprovado';
        };
        var noteList = this;
        noteList.notes = [{
            aluno: 'João',
            nota1: 1.5,
            nota2: 8.7,
            nota3: 3.5,
            nota4: 7.5,
            done: true
        }, {
            aluno: 'Maria',
            nota1: 1.5,
            nota2: 8.7,
            nota3: 3.5,
            nota4: 2.5,
            done: false
        }];
        noteList.addNote = function() {
            noteList.notes.push({
                aluno: noteList.aluno,
                nota1: noteList.nota1,
                nota2: noteList.nota2,
                nota3: noteList.nota3,
                nota4: noteList.nota4,
                done: false
            });
            noteList.aluno = '';
            noteList.nota1 = '';
            noteList.nota2 = '';
            noteList.nota3 = '';
            noteList.nota4 = '';
        };
        noteList.remaining = function() {
            var count = 0;
            angular.forEach(noteList.notes, function(note) {
                count += note.done ? 0 : 1;
            });
            return count;
        };
        noteList.archive = function() {
            var oldnotes = noteList.notes;
            noteList.notes = [];
            angular.forEach(oldnotes, function(note) {
                if (!note.done) noteList.notes.push(note);
            });
        };
        noteList.result = {}
        noteList.calculateNotes = function(notesObj) {
            media = (notesObj.nota1 + notesObj.nota2 + notesObj.nota3 + notesObj.nota4) / 4;
            noteList.result = {
                aluno: notesObj.aluno,
                media: media,
                conceito: media >= 7 ? 'Aprovado' : 'Reprovado'
            }
        };
    });
