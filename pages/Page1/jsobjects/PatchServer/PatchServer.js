export default {
  async run() {
    try {
      // Run the main patch
      await server_patch.run();

      // If a hostname domain was chosen, link it to this server
      if (PatchServer_Hostname.selectedOptionValue) {
        await hostname_patch_server.run();
      }

      // Refresh data afterwards
      await get_servers.run();

      showAlert("Server updated", "success");
    } catch (e) {
      showAlert("Update failed", "error");
      console.error("PatchServer error:", e);
    }
  }
};
