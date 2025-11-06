export default {
  async run() {
    try {
      // Create server
      await server_create.run();

      // Refresh list
      await get_servers.run();

      // Optional: reset the add form inputs (if they are inside a form widget)
      // resetWidget("AddServerForm", true);

      showAlert("Server created", "success");
    } catch (e) {
      showAlert("Server creation failed", "error");
      console.error("CreateServer error:", e);
    }
  }
};
