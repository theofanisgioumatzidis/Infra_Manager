export default {
  async run() {
    try {
      // Create server
      await mailbox_create.run();

      // Refresh list
      await get_mailboxes.run();

      // Optional: reset the add form inputs (if they are inside a form widget)
      // resetWidget("AddServerForm", true);

      showAlert("Mailbox created", "success");
    } catch (e) {
      showAlert("Mailbox creation failed", "error");
      console.error("CreateMailbox error:", e);
    }
  }
};
