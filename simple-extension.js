window.TypingMindExtension = class {
  constructor() {
    console.log("Simple Google Drive extension initialized");
  }

  onload() {
    console.log("Simple Google Drive extension loaded");
    this.addBackupButton();
  }

  addBackupButton() {
    const existingButton = document.getElementById('google-drive-backup-button');
    if (existingButton) {
      return;
    }
    const button = document.createElement('button');
    button.id = 'google-drive-backup-button';
    button.textContent = 'Backup to Google Drive';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '9999';
    button.onclick = () => this.backupToDrive();
    document.body.appendChild(button);
  }

  backupToDrive() {
    console.log("Backup to Google Drive clicked");
    alert("This is a simulated backup to Google Drive. In a real implementation, this would connect to Google Drive and save your data.");
  }
};
