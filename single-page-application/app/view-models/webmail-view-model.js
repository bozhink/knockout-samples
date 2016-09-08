function WebmailViewModel() {
    var self = this;

    // Data
    self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
    self.chosenFolderId = ko.observable();

    // Behaviours
    self.goToFolder = function(folder) {
        if (folder) {
            self.chosenFolderId(folder);
        }
    }
}