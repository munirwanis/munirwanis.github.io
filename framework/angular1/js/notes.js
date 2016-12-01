angular.module('notesApp', [])
    .controller('NotesListController', function() {
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
            console.log(notesObj);
            media = (notesObj.nota1 + notesObj.nota2 + notesObj.nota3 + notesObj.nota4) / 4;
            noteList.result = { 
                aluno: notesObj.aluno,
                media: media,
                conceito: media >= 7 ? 'Aprovado' : 'Reprovado'
            }
            console.log(media);
            console.log(noteList.result);
            console.log(noteList);
        };
    });