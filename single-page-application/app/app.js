var Application = function (model) {
    ko.applyBindings(model);

    // Client-side routes    
    return Sammy(function () {
        this.get('#:folder', function () {
            model.chosenFolderId(this.params.folder);
            model.chosenMailData(null);
            $.get('/mail',
                {
                    folder: this.params.folder
                },
                model.chosenFolderData);
        });

        this.get('#:folder/:mailId', function () {
            model.chosenFolderId(this.params.folder);
            model.chosenFolderData(null);
            $.get('/mail',
                {
                    mailId: this.params.mailId
                },
                model.chosenMailData);
        });

        this.get('', function () {
            this.app.runRoute('get', '#Inbox')
        });
    });
}

var app = new Application(new WebmailViewModel());
app.run();
