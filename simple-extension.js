(function() {
  console.log("Simple Google Drive extension script started");

  window.TypingMindExtension = class {
    constructor() {
      console.log("Simple Google Drive extension constructor called");
    }

    onload() {
      console.log("Simple Google Drive extension onload called");
      this.addBackupButton();
    }

    addBackupButton() {
      console.log("Attempting to add backup button");
      // Try to add the button every second until it succeeds
      const addButtonInterval = setInterval(() => {
        if (this.tryAddButton()) {
          clearInterval(addButtonInterval);
        }
      }, 1000);
    }

    tryAddButton() {
      if (document.getElementById('google-drive-backup-button')) {
        console.log("Backup button already exists");
        return true; // Button already exists
      }
      const sidebarElement = document.querySelector('.sidebar-container');
      if (!sidebarElement) {
        console.log("Sidebar not found, will try again");
        return false;
      }
      const button = document.createElement('button');
      button.id = 'google-drive-backup-button';
      button.textContent = 'Backup to Drive';
      button.style.width = '100%';
      button.style.padding = '10px';
      button.style.marginTop = '10px';
      button.onclick = () => this.backupToDrive();
      sidebarElement.appendChild(button);
      console.log("Backup button added successfully");
      return true;
    }

    backupToDrive() {
      console.log("Backup to Google Drive clicked");
      alert("This is a simulated backup to Google Drive. In a real implementation, this would connect to Google Drive and save your data.");
    }
  };

  console.log("Simple Google Drive extension script completed");
})();
