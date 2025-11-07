export default {
  async run() {
    try {
      // Create server
      await domain_create.run();

      // Refresh list
      await get_domains.run();
			await get_servers.run();

      // Optional: reset the add form inputs (if they are inside a form widget)
      // resetWidget("AddServerForm", true);

      showAlert("Domain created", "success");
    } catch (e) {
      showAlert("Domain creation failed", "error");
      console.error("CreateServer error:", e);
    }
  }
};
