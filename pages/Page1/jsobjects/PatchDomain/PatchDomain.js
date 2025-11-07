export default {
  getDomainId() {
    const id = PatchDomain_Name.selectedOptionValue;

    if (!id) {
      throw new Error("No domain selected in PatchDomain_Name");
    }

    return id;
  },

  async run() {
    try {
      // Run the main patch
      await domain_patch.run();

      // Refresh data afterwards
      await get_domains.run();

      showAlert("Domain updated", "success");
    } catch (e) {
      showAlert("Update failed", "error");
      console.error("PatchDomain error:", e);
    }
  }
};
