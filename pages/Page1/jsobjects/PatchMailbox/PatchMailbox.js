export default {
  getMailboxId() {
    const id = PatchMailbox_address.selectedOptionValue;

    if (!id) {
      throw new Error("No mailbox selected in PatchDomain_Name");
    }

    return id;
  },

  async run() {
    try {
      // Run the main patch
      await mailbox_patch.run();

      // Refresh data afterwards
      await get_mailboxes.run();

      showAlert("Mailbox updated", "success");
    } catch (e) {
      showAlert("Update failed", "error");
      console.error("PatchMailbox error:", e);
    }
  }
};
