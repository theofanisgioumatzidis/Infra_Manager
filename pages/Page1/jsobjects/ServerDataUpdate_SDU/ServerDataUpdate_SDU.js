export default {
  async refreshAll() {
    await SDU_get_domains.run();
    await SDU_get_mailboxes.run();
    await SDU_Server_status_options.run();
		await SDU_fields_hostname.run();
		await SDU_get_hostnames.run();
		await SDU_fields_domain.run();
		await get_domains.run();
  },
};
